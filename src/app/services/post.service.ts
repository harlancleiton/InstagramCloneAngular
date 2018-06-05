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
        console.log(post)
        firebase.database().ref('Posts').child(userId).child(post.id).set(post)
            .then((response: any) => {
                console.log('Success: ', response)
                this.storageService.uploadFile(post.image)
            })
            .catch((error: Error) => console.log('Error: ', error))
    }
}