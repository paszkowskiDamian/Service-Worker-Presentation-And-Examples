export class Auth {
    constructor() {
        if (window.localStorage
            && window.localStorage.getItem('name')
            && window.localStorage.getItem('email')) {
            this._isLoggedIn = true
        } else {
            this._isLoggedIn = false
        }
        console.log('isLoggedIn', this._isLoggedIn)
    }

    login(name, email) {
        if (window.localStorage) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
            this._isLoggedIn = true
            return Promise.resolve({ status: 'success' })
        } else {
            return Promise.resolve({ status: 'local storage is unavalable' })
        }
    }

    getLoggedInUser() {
        const { localStorage } = window
        return Promise.resolve({
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email')
        })
    }

    isLoggedIn() {
        console.log(this._isLoggedIn)
        return this._isLoggedIn
    }

    logout() {
        this._isLoggedIn = false
        window.localStorage.clear()
        return Promise.resolve({ status: 'user loggedout' })
    }

}