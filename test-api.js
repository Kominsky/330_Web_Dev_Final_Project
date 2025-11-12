const https = require('https');
const fs = require('fs');
//api specific key to each user
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY0MDU2NDE5LTA1NWItNDFjNi1hNDVmLTc5MGMzYWZhODIzYyIsImlhdCI6MTc2Mjk3NTM2NSwic3ViIjoiZGV2ZWxvcGVyLzczNDY1YzRhLTk3M2EtNDE0YS03OGQyLTU1M2JkMDAzMzU1YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNTMuOTAuMjMzLjIxOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.qsR_VPyADmqNjx-B7rW1r5O4eYFUN4iq2jrTZIu_Y_2w9nZEL8YQBmSiKoBGwneUx9f2_g-MmBWeFtu__DuR0A';

//change path to get diffrent information from the API
const options = {
  hostname: 'api.clashroyale.com',
  path: '/v1/cards',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
};

//gets the data from the clash royal api
const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    const jsonData = JSON.parse(data)

    console.log('Response:', JSON.parse(data));
    fs.writeFileSync('cards-data.json', JSON.stringify(jsonData, null, 2));
    console.log('Card data saved to cards-data.json');
    console.log(`Total cards: ${jsonData.items.length}`);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();