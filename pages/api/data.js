import query from '../../lib/db';

// export default async function handler(req, res) {
//   try {
//     // orrect the SQL query to select all columns from the table
//     const result = await query( 'SELECT ST_AsGeoJSON(geom) AS geojson FROM "combined_view"');
    
//     // Respond with the fetched data
//     res.status(200).json(result.rows);
//   } catch (error) {
//     // Log the error and respond with a 500 status code
//     console.error('Error fetching data:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }




export default async function handler(req, res) {
  

  try {
    
      const result = await query( 'SELECT ST_AsGeoJSON(geom) AS geojson FROM "polygon table"');
    
    // Respond with the fetched data
   res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  } 
}

