import { RouterModel } from "../common/router.model";
import restify from 'restify'

export class UserRouter extends RouterModel {

    allRouters(application: restify.Server) {
        application.get('/', this.listAll)
        application.post('/user', this.save)
    }
}