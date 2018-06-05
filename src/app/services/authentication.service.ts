import { User } from "../shared/user.model";
import * as firebase from 'firebase'
import { Injectable } from "@angular/core";
import { NavigationService } from "./navigation.service";

@Injectable()
export class Authentication {

    public tokenId: string;

    constructor(private navigationService: NavigationService) { }

    public registerUser(user: User): Promise<any> {
        console.log('Usuario no serviço: ', user)
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response: any) => this.saveUser(user))
            .catch((error: Error) => console.log(error))
    }

    private saveUser(user: User): Promise<any> {
        delete user.password
        return firebase.database().ref('Users').child(firebase.auth().currentUser.uid).set(user)
            .then()
            .catch((error: Error) => console.log(error))
    }

    public loginUser(user: User): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((response: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => {
                        this.tokenId = token
                        localStorage.setItem('tokenId', token)
                        this.navigationService.navigateTo('/home')
                    })
                    .catch((error: Error) => console.log(error))
            }).catch((error: Error) => console.log(error))
    }

    public logOut(): Promise<any> {
        return firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('tokenId')
                this.tokenId = undefined
                this.navigationService.navigateTo('')
            })
            .catch((error: Error) => console.log(error))
    }

    public isLogged(): boolean {
        if (this.tokenId === undefined && localStorage.getItem('tokenId') != null)
            this.tokenId = localStorage.getItem('tokenId')
        else if (this.tokenId === undefined)
            this.navigationService.navigateTo('')
        return this.tokenId !== undefined
    }
}