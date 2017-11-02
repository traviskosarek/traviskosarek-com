'use strict';

import Configuration from './configuration/configuration';
import RouteController from './routes/route-controller';
import Server from './server';

const config = Configuration.instance();
const server = new Server(config);

server.setRouter(new RouteController());

server.startServer();
