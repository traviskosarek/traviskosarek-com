'use strict';

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import { Express } from 'express';
import * as path from 'path';

import { IEnvironment } from './shared/environment';
import Configuration from './configuration/configuration';
import { Route } from './shared/route';

/**
 * Represents an Express server
 * @export
 * @class Server
 */
export default class Server {
  /**
   * An instance of the current Express server
   * @private
   * @type {Express}
   */
  private server: Express;

  /**
   * An instance of the current {Configuration} settings
   * @private
   * @type {IEnvironment}
   */
  private config: IEnvironment;

  /**
   * The time in which the web server was started.
   * @private
   * @type {number}
   */
  private startTime: number;

  /**
   * Creates an instance of Server.
   * @param {IEnvironment} config (description)
   */
  public constructor(config: IEnvironment) {
    this.server = express();
    this.config = config;

    this.setApiPaths();
    this.insertMiddleware();
    this.setApplicationCodePath();
  }

  /**
   * Helper method to map documenation output path to a route
   *
   * @private
   */
  private setApiPaths() {
    this.server.use(
      '/api/services',
      express.static(path.join(Configuration.rootDirectory, '/api/services'))
    );
  }

  /**
   * Helper method to map app folder to a route
   * @private
   */
  private setApplicationCodePath() {
    this.server.use(
      '/',
      express.static(path.join(Configuration.rootDirectory, '/'))
    );
    this.server.use(
      '/images',
      express.static(path.join(Configuration.rootDirectory, '/images'))
    );
  }

  /**
   * Helper method to insert various middleware into the server
   * @private
   */
  private insertMiddleware() {
    this.server.use(bodyParser.json({ limit: '100mb' }));
    this.server.use(compression());
  }

  // /**
  //  * Helper method to serve development documenation
  //  *
  //  * @private
  //  */
  // private serveApiRoutes() {
  //   this.server.get('/api/services/', (req, res) => {
  //       res.serve()
  //         res.sendFile(path.join(Configuration.rootDirectory, '/doc/dev/index.html'));
  //     });
  // }

  /**
   * Sets the router for the server.
   * @param route The Route to set to the server.
   */
  public setRouter(route: Route) {
    this.server.use(route.Path, route.Router);
  }

  /**
   * Starts the server in the environment chosen by the {Configuration} settings
   */
  public startServer() {
    this.server.listen(this.config.port, () => {
      this.startTime = Date.now();
      console.log('angular-example is now running on port', this.config.port);
    });
  }
}
