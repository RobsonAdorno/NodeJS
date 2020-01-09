"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = __importDefault(require("restify"));
class Server {
    constructor(application) {
        this.application = application;
    }
    initServer(router) {
        return new Promise((resolve, reject) => {
            try {
                this.serverConfiguration(router, resolve);
            }
            catch (exception) {
                console.log('Error in: Class -> Server/ Method -> initServer()');
                throw new Error(exception);
            }
        });
    }
    serverConfiguration(router, resolve) {
        this.application = restify_1.default.createServer({
            name: 'Rest-Api',
            version: '1.0.0'
        });
        this.application.use(restify_1.default.plugins.bodyParser());
        router.allRouters(this.application);
        this.application.listen(8080, () => {
            resolve(this.application);
        });
    }
    bootstrap(router) {
        return this.initServer(router).then(() => this);
    }
}
exports.Server = Server;
