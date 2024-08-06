'use client'

import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
import Header from '../siginUp/nav';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibXV6YW1pbDIwNiIsImEiOiJjbGN5eXh2cW0wc2lnM290ZzJsZnNlbmxsIn0.o2Obvl7E_nQefSN34XsFmw';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(4.474076);
  const [lat, setLat] = useState(8.70274);
  const [zoom, setZoom] = useState(12);
  const [data, setData] = useState(null); 
  

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    const fetchGeoJSON = async () => {
      // const response = await fetch('http://localhost:8080/geoserver/cadastral/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cadastral%3Apolygon%20table&maxFeatures=50&outputFormat=application%2Fjson');
      
      // const data = await response.json();
      // setData(data);
      // console.log(data[0])
      
    

    
    

    // Add all features from GeoJSON data to the map
    map.current.on('load', () => {
      // Create an empty source to hold all features
      const source = map.current.addSource('allFeaturesSource', {
        type: 'geojson',
        data: 'http://localhost:8080/geoserver/cadastral/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cadastral%3Acombined_view&maxFeatures=50&outputFormat=application%2Fjson',
      });
      // Loop through GeoJSON features and add them to the source
      if (data && data.features) {
        data.features.forEach(feature => {
          source.push({
            type: 'Feature',
            geometry: feature.geometry,
            properties: feature.properties 
          });
        });
      }

      // Add layers for different feature types (points and polygons)
      map.current.addLayer({
        id: 'pointsLayer',
        type: 'circle', 
        source: 'allFeaturesSource',
        filter: ['==', '$type', 'Point'], // Filter for points
        paint: {
          'circle-color': '#ff0000', // Customize point color
          'circle-radius': 5 // Customize point size
        }
      });

      map.current.addLayer({
        id: 'lineLayer',
        type: 'line',
        source: 'allFeaturesSource',
        layout: {},
        paint: {
            'line-color': '#ff0000',
            'line-width': 3
        }
    });

      map.current.addLayer({
        id: 'polygonsLayer',
        type: 'fill', // Use `fill` for polygons
        source: 'allFeaturesSource',
        filter: ['==', '$type', 'Polygon'], // Filter for polygons
        paint: {
          'fill-color': 'rgba(200, 100, 240, 0.4)', // Customize polygon color
          'fill-opacity': 0.4
        }
      });

      map.current.addLayer({
        id: 'poi-labels',
        type: 'symbol',
        source: 'allFeaturesSource',
        layout: {
          'text-field': ['get', 'pillar_num'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
          'icon-image': ['get', 'icon']
        }
      });


// Change the cursor to a pointer when
// the mouse is over the states layer.
map.current.on('mouseenter', 'polygonsLayers', () => {
  map.current.getCanvas().style.cursor = 'pointer';
  });
   
  // Change the cursor back to a pointer
  // when it leaves the states layer.
  map.current.on('mouseleave', 'polygonsLayer', () => {
  map.current.getCanvas().style.cursor = '';
  });

  map.current.on('click', 'polygonsLayer', (e) => {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(`
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <div class="text-lg font-bold mb-2">NAME: ${e.features[0].properties.plan_name}</div>
      <div class="mb-2">LOCATION: <p class="text-gray-700">${e.features[0].properties.plan_locat}</p></div>
      <div class="mb-2">LOCAL GOV: <p class="text-gray-700">${e.features[0].properties.plan_lga}</p></div>
      <div class="mb-2">PLAN AREA: <p class="text-gray-700">${e.features[0].properties.plan_area}</p></div>
      <div class="mb-2">PLAN ORIGIN: <p class="text-gray-700">${e.features[0].properties.plan_origi}</p></div>
      <div class="mb-2">PLAN NUMBER: <p class="text-gray-700">${e.features[0].properties.plan_numbe}</p></div>
      <div class="mb-2">SURVEYOR: <p class="text-gray-700">${e.features[0].properties.surveyor}</p></div>
    </div>
  `)
  
    .addTo(map.current);
    });



    });

    }
    fetchGeoJSON();

    map.current.addControl(new mapboxgl.NavigationControl(), "top-left");


    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        bbox: [2.05, 7.7, 5.4, 9.4],
        countries: 'NG', // Limit search results to Nigeria
        mapboxgl: mapboxgl,
        position: 'top-left' 
      })
    );

    
  


  }, []);

  return (
    <div>
      <div>
         <Header/>
      </div>
      <div ref={mapContainer} className="map-container  w-screen h-screen"  />
    </div>
  );
}