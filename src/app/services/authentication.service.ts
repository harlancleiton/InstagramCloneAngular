import { User } from "../shared/user.model";
import * as firebase from 'firebase'

export class Authentication {
    public registerUser(user: User): void {
        console.log('Usuario no serviço: ', user)
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response: any) => {
                console.log(response)
                delete user.password
                firebase.database().ref('Users').child(firebase.auth().currentUser.uid).set(user)
                    .then((response: any) => {
                        console.log(response)
                    }).catch((error: Error) => {
                        console.log(error)
                    })
                //firebase.auth().signOut()
            }).catch((error: Error) => {
                console.log(error)
            })
    }

    public loginUser(user: User): void {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    }
}