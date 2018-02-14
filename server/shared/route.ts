"use strict";

import * as express from "express";
import {Router} from "express";

/**
 * Represents a Route exposed by this server
 * @export
 * @class Route
 */
export class Route {

    /**
     * A reference to the Router for this {Route}
     * @private
     * @type {Router}
     */
    private router: Router;

    /**
     * The Router for this {Route}, has the responsibility of setting the route points.
     * @readonly
     */
    public get Router() {
        return this.router;
    }

    /**
     * A reference to the unique base path for this route.
     * @private
     * @type {string}
     */
    private basePath: string;

    /**
     * The unique base path for this route.
     *
     * @readonly
     */
    public get Path() {
        return this.basePath;
    }

    /**
     * Creates an instance of Route.
     * @param {string} basePath (description)
     */
    public constructor(basePath: string) {
        this.router = express.Router();
        this.basePath = basePath;
    }

    /**
     * A generic error handler for a {Route}
     * @protected
     * @static
     * @param {*} res (description)
     * @param {*} err (description)
     * @param {number} [status] (description)
     */
    protected static handleError(res: any, err: any, status?: number): void {
        res.status(status || 400).send(err);
    }
}
