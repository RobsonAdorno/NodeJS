import restify from 'restify'
import { Router } from '../common/router'

export class Server {
    application: restify.Server

    constructor()
    constructor(application?: restify.Server) {
        this.application = application!
    }

    initServer(router:Router):Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.serverConfiguration(router, resolve)
            } catch (exception) {
                console.log('Error in: Class -> Server/ Method -> initServer()')
                throw new Error(exception)
            }
        })
    }

    serverConfiguration(router:Router, resolve:any) {
        this.application = restify.createServer({
            name:'Rest-Api',
            version: '1.0.0'
        }) 

        this.application.use(restify.plugins.bodyParser())

        router.allRouters(this.application)

        this.application.listen(8080, () => {
            resolve(this.application)
        })
    }

    bootstrap(router:Router):Promise<Server> {
        return this.initServer(router).then(() => this)
    }
}