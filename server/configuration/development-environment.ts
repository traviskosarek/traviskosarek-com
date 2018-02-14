"use strict";

import { ENVIRONMENT, IEnvironment } from "../shared/environment";

/**
 * A class representing the environment settings for the development environment
 *
 * @export
 * @class DevelopmentEnvironment
 * @implements {IEnvironment}
 */
export class DevelopmentEnvironment implements IEnvironment {
    /**
     * The port to be used when hosting an instance of this application
     */
    public port = 8080;

    /**
     * Environment the application is running in
     * @type {ENVIRONMENT}
     */
    public environment: ENVIRONMENT = ENVIRONMENT.Development;
}
