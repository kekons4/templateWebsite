export class Users{
    emailId:string;
    username:string;
    password:string;
    constructor(emailId:string, username:string, password:string){
        this.emailId = emailId;
        this.username = username;
        this.password = password;
    }
}