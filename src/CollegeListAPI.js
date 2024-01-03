const fetch = require('node-fetch');

(async () => {
  const where = encodeURIComponent(JSON.stringify({
    "name": {
      "$exists": true
    }
  }));
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Usuniversitieslist_Region?count=1&limit=10&order=name&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': 'UTyDd7DI6RAHNyTaHQD2vxmZHMcAb2fypqrWMdFl', // This is your app's application id
        'X-Parse-REST-API-Key': 'Lxu5DMB7MuLrbrr4tB9PPfsipykMg6U0GPIKPvX3', // This is your app's REST API key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  console.log(JSON.stringify(data, null, 2));
})();