import { Server } from "./server/server";
import { UserRouter } from "./user/user.router";

const server = new Server()
const userRouter = new UserRouter()

server.bootstrap(userRouter)
    
        .then((serverConfig) => {
            console.log(serverConfig.application.address())
        })

        .catch((exception) => {
            console.error('Error to up server\nDetails: File(main.ts) Function(bootstrap)')
            throw new Error(exception)
        })