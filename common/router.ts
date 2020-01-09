import restify from 'restify'

export abstract class Router {
    abstract allRouters<T>(application: restify.Server):void
}