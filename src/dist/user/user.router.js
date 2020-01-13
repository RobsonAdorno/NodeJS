"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_model_1 = require("../common/router.model");
class UserRouter extends router_model_1.RouterModel {
    allRouters(application) {
        application.get('/', this.listAll);
        application.post('/user', this.save);
    }
}
exports.UserRouter = UserRouter;
