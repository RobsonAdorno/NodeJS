export class UserModel {
    private _id?:string
    private _name:string
    private _login:string
    private _password:string

    constructor(name?:string, login?:string, password?:string) {
        this._name = name!
        this._login = login!
        this._password = password!
    }

    public getId() {
        return this._id
    }

    public setId(id:string):void {
        this._id = id
    }

    public getName() {
        return this._name
    }

    public setName(name:string):void {
        this._name = name
    }

    public getLogin() {
        return this._login
    }

    public setLogin(login:string):void {
        this._login = login
    }

    public getPassword() {
        return this._password
    }

    public setPassword(password:string):void {
        this._password = password
    }

}