const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8420;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  console.log('Incoming request: ', parsedUrl.path);

  if (pathname === '/next/') {
    if (query.origin && query.destination) {
      res.statusCode = 200;
      res.end(getNextTrain());
    } else {
      res.statusCode = 400;
      res.end(JSON.stringify({ "code": "INVALID_INPUT", "message": "Parameters origin and destination are required." }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ "code": "NOT_FOUND", "message": "Endpoint does not exist." }));
  }
});

function getNextTrain() {
  const randResponses = [
    { timeToNextTrain: "14 Minutos", cost: "$182", travelDuration: "20 Minutos" },
    { timeToNextTrain: "10 Minutos", cost: "$132", travelDuration: "7 Minutos" },
    { timeToNextTrain: "5 Minutos", cost: "$152", travelDuration: "15 Minutos" },
    { timeToNextTrain: "28 Minutos", cost: "$162", travelDuration: "17 Minutos" }
  ];
  return JSON.stringify(randResponses[Math.floor(Math.random() * randResponses.length)]);
}

server.listen(port, hostname, () => {
  console.log(`Pingu Trener backend mock running at http://${hostname}:${port}/`);
});
