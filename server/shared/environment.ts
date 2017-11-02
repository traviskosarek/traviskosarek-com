'use strict';

/**
 * An interface representing the environment settings
 * @export
 * @interface Environment
 */
export interface IEnvironment {
    /**
     * The port to be used when hosting an instance of the REST API
     * @type {number}
     */
    port: number;

    /**
     * Environment
     * @type {Environment}
     */
    environment: ENVIRONMENT;
}

/**
 * Envinroment types
 * @export
 * @enum {number}
 */
export enum ENVIRONMENT {
    Local,
    Development,
    Production
}




