/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Jeremy Whitlock
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import basicAuth from 'basic-auth';
import connect from 'connect';
import personJson from './browser/project.json';

const app = connect();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Accept,Allow,Authorization,Content-Type'
  );
  res.setHeader('Access-Control-Request-Methods', 'GET,PUT,POST,DELETE');

  next();
});

app.use('/secure', function (req, res, next) {
  const user = basicAuth(req);

  if (!user || user.name !== 'whitlockjc' || user.pass !== 'path-loader') {
    res.writeHead(401, {
      'WWW-Authenticate': 'Basic realm="path-loader Test Realm"',
    });

    res.end();
  } else {
    next();
  }
});

app.use(function (req, res) {
  switch (req.url) {
    case '/project.json':
    case '/secure/project.json':
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(personJson));

      break;
    default:
      res.writeHead(404);
      res.end();
  }
});

export function createServer (transport: {createServer(app: connect.Server): http.Server}): http.Server {
  return transport.createServer(app);
}

import http from 'http';
import karma from 'karma';
import path from 'path';

export async function startKarma () {
  const httpServer = createServer(http).listen(44444);

 const karmaConfig=  await karma.config.parseConfig(
    path.join(__dirname, './browser/karma.conf.ts'),
    undefined,
    {promiseConfig: true, throwErrors: true}
  );

  const srv: karma.Server =  new karma.Server(karmaConfig, function (exitCode) {
    console.log(`Karma exit code: ${exitCode}`);
  });

  srv.start();

  return {httpServer, srv};

}

export async function  stopKarma (info: {
  httpServer: http.Server;
  srv: karma.Server;
}) {

  await info.srv.on('run_complete', async function () {
    await info.srv.stop();
    info.httpServer.close();
  });

}


