'use client'

import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
import Header from '../siginUp/nav';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from '@turf/turf';




mapboxgl.accessToken = 'pk.eyJ1IjoibXV6YW1pbDIwNiIsImEiOiJjbGN5eXh2cW0wc2lnM290ZzJsZnNlbmxsIn0.o2Obvl7E_nQefSN34XsFmw';

const paragraphStyle = {
  fontFamily: 'Open Sans',
  margin: 0,
  fontSize: 13
};




export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(4.474076); 
  const [lat, setLat] = useState(8.70274);
  const [zoom, setZoom] = useState(12);
  const [data, setData] = useState(null); 
  const [roundedArea, setRoundedArea] = useState();
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const [style, setStyle] = useState('mapbox://styles/mapbox/streets-v12');

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: style,
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

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
    map.current.addControl(draw);

    map.current.on('draw.create', updateArea);
    map.current.on('draw.delete', updateArea);
    map.current.on('draw.update', updateArea);

    function updateArea(e) {
      const data = draw.getAll();
      if (data.features.length > 0) {
        const area = turf.area(data);
        setRoundedArea(Math.round(area * 100) / 100);
      } else {
        setRoundedArea();
        if (e.type !== 'draw.delete') alert('Click the map to draw a polygon.');
      }
    }
  


  }, []);



  useEffect(() => {
    if (map.current) {

      
      map.current.setStyle(style);
       


         map.current.on('styledata', () => {
        if (!map.current.getSource('example-source')) {
          map.current.addSource('example-source', {
            type: 'geojson',
            data: 'http://localhost:8080/geoserver/cadastral/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cadastral%3Acombined_view&maxFeatures=50&outputFormat=application%2Fjson',
          });

          
         
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
            id: 'pointsLaye',
            type: 'circle', 
            source: 'example-source',
            filter: ['==', '$type', 'Point'], // Filter for points
            paint: {
              'circle-color': '#ff0000', // Customize point color
              'circle-radius': 5 // Customize point size
            }
          });
    
          map.current.addLayer({
            id: 'lineLaye',
            type: 'line',
            source: 'example-source',
            layout: {},
            paint: {
                'line-color': '#ff0000',
                'line-width': 3
            }
        });
    
          map.current.addLayer({
            id: 'polygonsLaye',
            type: 'fill', // Use `fill` for polygons
            source: 'example-source',
            filter: ['==', '$type', 'Polygon'], // Filter for polygons
            paint: {
              'fill-color': 'rgba(200, 100, 240, 0.4)', // Customize polygon color
              'fill-opacity': 0.4
            }
          });
    
          map.current.addLayer({
            id: 'poi-label',
            type: 'symbol',
            source: 'example-source',
            layout: {
              'text-field': ['get', 'pillar_num'],
              'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
              'text-radial-offset': 0.5,
              'text-justify': 'auto',
              'icon-image': ['get', 'icon']
            }
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





        }
      });
    }
  }, [style]); // Change map style whenever `style` changes

  const handleStyleChange = (newStyle) => {
    setStyle(newStyle);


    
  };










  return (
    <div>
      <div>
         <Header/>
      </div>

      <div ref={mapContainer} className="map-container" style={{ width: '100%', height: '500px' }} />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => handleStyleChange('mapbox://styles/mapbox/streets-v11')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Streets
        </button>
        <button
          onClick={() => handleStyleChange('mapbox://styles/mapbox/satellite-v9')}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
        >
          Satellite
        </button>
        <button
          onClick={() => handleStyleChange('mapbox://styles/mapbox/outdoors-v11')}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none"
        >
          Outdoors
        </button>
        <button
          onClick={() => handleStyleChange('mapbox://styles/mapbox/dark-v10')}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 focus:outline-none"
        >
          Dark
        </button>
      </div>
      <div>
        <>
      
      <div
        className="calculation-box"
        style={{
          height: 75,
          width: 150,
          position: 'absolute',
          bottom: 40,
          left: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 15,
          textAlign: 'center'
        }}
      >
        <p style={paragraphStyle}>Click the map to draw a polygon.</p>
        <div id="calculated-area">
          {roundedArea && (
            <>
              <p style={paragraphStyle}>
                <strong>{roundedArea}</strong>
              </p>
              <p style={paragraphStyle}>square meters</p>
            </>
          )}
        </div>
      </div>
    </>
      </div>
    </div>
  );
}