const selfsigned = require('selfsigned');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const https = require('https');

const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

const app = express();
app.use('/', createProxyMiddleware({
  target: 'https://localhost:8181',
  changeOrigin: true,
  secure: false
}));

https.createServer({
  key: pems.private,
  cert: pems.cert
}, app).listen(8080);