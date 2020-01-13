"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getLogin() {
        return this._login;
    }
    setLogin(login) {
        this._login = login;
    }
    getPassword() {
        return this._password;
    }
    setPassword(password) {
        this._password = password;
    }
}
exports.UserModel = UserModel;
