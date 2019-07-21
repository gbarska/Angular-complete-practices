export class AuthFakeService {
    loggedIn = false;

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=> {
                    resolve(this.loggedIn)
                },400);
            }
        );
        return promise;
    }
}