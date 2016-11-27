const express = require ('express');
const app = express();

const HOST = process.env.NSS_HOSTNAME || 'localhost';
const PORT = process.env.NSS_PORT || '3000';

app.get('*', (req, res) => {
  res.jsonp({
    "message" : "API is up and running. Bye!"
  });
});

app.listen(PORT, HOST, () => {
  console.log('>> Server ready for action on http://%s:%s', HOST, PORT);
});
