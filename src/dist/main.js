"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const user_router_1 = require("./user/user.router");
const server = new server_1.Server();
const userRouter = new user_router_1.UserRouter();
server.bootstrap(userRouter)
    .then((serverConfig) => {
    console.log(serverConfig.application.address());
})
    .catch((exception) => {
    console.error('Error to up server\nDetails: File(main.ts) Function(bootstrap)');
    throw new Error(exception);
});
