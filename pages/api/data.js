import pool from '../../lib/db';




// export default async function handler(req, res) {
  

//   try {
    
//       const result = await query(   `
//             SELECT *, ST_AsGeoJSON(geom) AS geojson
//             FROM "combined_view"; `);
    
//     // Respond with the fetched data
//    res.status(200).json(result.rows);
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   } 
// }



export default async function handler(req, res) {
    try {
        const queryText = `
            SELECT *, ST_AsGeoJSON(geom) AS geojson
            FROM "combined_view";    
        `;
        const { rows } = await pool.query(queryText);

        // Formatting the response data as GeoJSON
        const geojsonFeatures = rows.map((row) => ({
            type: 'Feature',
            properties: {
                PLAN_NAME: row.plan_name,
                PLAN_LOCATION: row.plan_location,
                PLAN_LGA: row.plan_lga,
                PLAN_NUMBER: row.plan_number,
                SURVEYOR: row.surveyor,
                PILLAR_NUMBER: row.pillar_number,
                // Add more attributes as needed
            },
            geometry: JSON.parse(row.geojson), // parsing GeoJSON string to object
        }));

        const geojson = {
            type: 'FeatureCollection',
            features: geojsonFeatures,
        };

        res.status(200).json(geojson);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
