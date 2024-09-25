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

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/map'); // Allows all origins; 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allows only certain HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allows only certain headers

  if (req.method === 'OPTIONS') {
      // Preflight request
      res.status(200).end();
      return;
  }

    try {
        const queryText = `
             SELECT 
                "PLAN_NAME",
                "PLAN_LOCATION",
                "PLAN_LGA",
                "PLAN_NUMBER",
                "SURVEYOR",
                "PILLAR_NUMBER",
                ST_AsGeoJSON(geom) AS geojson
            FROM 
                "combined_view"; 
        `;
        const { rows } = await pool.query(queryText);  // "combined_view"
        

        // Formatting the response data as GeoJSON
        const geojsonFeatures = rows.map((row) => ({
            type: 'Feature',
            properties: {
                PLAN_NAME: row.PLAN_NAME,
                PLAN_LOCATION: row. PLAN_LOCATION,
                PLAN_LGA: row.PLAN_LGA,
                PLAN_NUMBER: row.PLAN_NUMBER,
                SURVEYOR: row.SURVEYOR,
                PILLAR_NUMBER: row.PILLAR_NUMBER,
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
