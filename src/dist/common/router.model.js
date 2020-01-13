"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class RouterModel extends router_1.Router {
    constructor() {
        super(...arguments);
        this.list = [];
        this.save = (req, res) => {
            const params = {
                name: req.params.name,
                age: req.params.age
            };
            this.list.push(params);
        };
        this.listAll = (req, res) => {
            res.json(this.list);
        };
        this.register = (req, res) => {
            const [{ email, password }] = req.params;
        };
    }
}
exports.RouterModel = RouterModel;
