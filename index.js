const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Request object:</h1>');
    res.write('<ul>');
    res.write(`<li><strong>req.protocol</strong>:${req.protocol}</li>`);
    res.write(`<li><strong>req.method</strong>:${req.method}</li>`);
    res.write(`<li><strong>req.path</strong>:${req.path}</li>`);
    res.write(`<li><strong>req.host</strong>:${req.host}</li>`);
    res.write('</ul>');
    res.write("<p>I dont know why its undefined... Will try to figure it out...</p>")
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});