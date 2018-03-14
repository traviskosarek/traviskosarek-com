"use strict";

import { Request, Response } from "express";
import * as path from "path";

import Configuration from "../configuration/configuration";
import { Route } from "../shared/route";

/**
 * Represents the collective Routes served up by this API
 * @export
 * @class Routes
 */
export default class RouteController extends Route {
    public constructor () {
        super("/");

      this.Router.get("/", this.getHomePage);
      this.Router.use(this.getHomePage);

    }

    private getHomePage(req: Request, res: Response): void {
        res.sendFile(path.join(Configuration.rootDirectory, "/index.html"));
    }
}
