'use strict';

import 'jasmine';

import Configuration from './configuration';
import { DevelopmentEnvironment } from './development-environment';
import { ProductionEnvironment } from './production-environment';
import { LocalEnvironment } from './local-environment';

describe('Configuration', () => {
    const prod = new ProductionEnvironment();
    const dev = new DevelopmentEnvironment();
    const local = new LocalEnvironment();

    let originalEnv;
    let originalConfig;

    // save original variables and restore
    beforeAll(() => {
        originalEnv = process.env.NODE_ENV;
        originalConfig = Configuration.config;
    });

    afterAll(() => {
        process.env.NODE_ENV = originalEnv;
        Configuration.config = originalConfig;
    });

    beforeEach(() => {
        Configuration.config = undefined;
    });

    it('should set configuration to production', () => {
        process.env.NODE_ENV = 'production';

        expect(Configuration.instance()).toEqual(prod);
    });

    it('should set configuration to development', () => {
        process.env.NODE_ENV = 'development';

        expect(Configuration.instance()).toEqual(dev);
    });

    it('should set configuration to local', () => {
        process.env.NODE_ENV = undefined;

        expect(Configuration.instance()).toEqual(local);
    });
});
