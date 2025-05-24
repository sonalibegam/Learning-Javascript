class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase
    }

    set email(value){
        this._email= value
    }

    get password(){
        return `${this._password}sonali`
    }

    set password(value){
        this._password = value
    }
}

const sonali = new user ("s@sonali.ai", "abc")
console.log(sonali.email);