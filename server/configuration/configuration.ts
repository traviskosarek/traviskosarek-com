'use strict';

import * as path from 'path';

import { ENVIRONMENT, IEnvironment } from '../shared/environment';
import { DevelopmentEnvironment } from './development-environment';
import { ProductionEnvironment } from './production-environment';
import { LocalEnvironment } from './local-environment';

/**
 * A singleton representing the current configuration settings
 * @export
 * @class Configuration
 */
export default class Configuration {
    /**
     * An instance of the current environment settings
     * @public
     * @type {IEnvironment}
     */
    public static config: IEnvironment;

    /**
     * The root directory of the application - this will be one step outside the app folder.
     * @type {string}
     */
    public static rootDirectory: string = path.join(__dirname + '/../../');

    /**
     * The current environment the application is hosted in
     */
    public static get environment(): ENVIRONMENT {
        return Configuration.instance().environment;
    }

    /**
     * Creates a new production instance based on the global NODE_ENV setting
     * @returns {IConfig} An object representing the current configuration settings
     */
    public static instance(): IEnvironment {
        if (this.config === undefined) {
            if (process.env.NODE_ENV === 'production') {
                this.config = new ProductionEnvironment();
            } else if (process.env.NODE_ENV === 'development') {
                this.config = new DevelopmentEnvironment();
            } else {
                this.config = new LocalEnvironment();
            }
        }
        return this.config;
    }
}
