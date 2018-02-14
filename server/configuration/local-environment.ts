"use strict";

import { ENVIRONMENT, IEnvironment } from "../shared/environment";

/**
 * Class which denotes the environment for local development.
 *
 * @export
 * @class LocalEnvironment
 */
export class LocalEnvironment implements IEnvironment {
    /**
     * The port to be used when hosting an instance of this application
     */
    public port = 8080;

    /**
     * Environment the application is running in
     * @type {ENVIRONMENT}
     */
    public environment: ENVIRONMENT = ENVIRONMENT.Local;
}
