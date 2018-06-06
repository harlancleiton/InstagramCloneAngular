import { Post } from "../shared/post.model";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { StorageService } from "./storage.service";

@Injectable()
export class PostService {

    constructor(private storageService: StorageService) { }

    public newPost(post: Post) {
        let userId: string = firebase.auth().currentUser.uid
        post.id = firebase.database().ref().push().key
        firebase.database().ref('Posts').child(userId).child(post.id).set(post)
            .then((response: any) => {
                this.storageService.uploadFile(post.image, post.id)
            })
            .catch((error: Error) => console.log('Error: ', error))
    }

    public getPosts(): any {
        let userId: string = firebase.auth().currentUser.uid
        firebase.database().ref('Posts').child(userId)
            .once('value')
            .then((snapshot: any) => {
                console.log(snapshot.val())
            })
    }
}