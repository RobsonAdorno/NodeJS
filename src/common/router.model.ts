import { Router } from './router'
import restify from 'restify'

export abstract class RouterModel extends Router {
    public list:any = []

    save = (req:restify.Request, res:restify.Response) => {
        const params = {
            name: req.params.name,
            age: req.params.age
        }
        this.list.push(params)
    }

    listAll = (req:restify.Request, res: restify.Response) => {
        res.json(this.list)
    }

    register = (req:restify.Request, res: restify.Response) => {
        const [{email,password}] = req.params
    }
}