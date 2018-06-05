import { User } from "../shared/user.model";
import * as firebase from 'firebase'
import { Injectable } from "@angular/core";
import { NavigationService } from "./navigation.service";

@Injectable()
export class Authentication {

    public tokenId: Promise<any>;

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
                    .then((token: Promise<any>) => {
                        this.tokenId = token
                        this.navigationService.navigateTo('/home')
                    })
                    .catch((error: Error) => console.log(error))
            }).catch((error: Error) => console.log(error))
    }

    public logOut(): Promise<any> {
        return firebase.auth().signOut()
            .then()
            .catch((error: Error) => console.log(error))
    }
}