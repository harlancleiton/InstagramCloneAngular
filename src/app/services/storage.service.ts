import * as firebase from 'firebase'
import { Injectable } from '@angular/core';
import { ProgressService } from './progress.service';

@Injectable()
export class StorageService {

    constructor(private progressService: ProgressService) { }

    public uploadFile(file: File, postId: string): void {
        let userId = firebase.auth().currentUser.uid
        let fileId = firebase.database().ref().push().key
        firebase.storage().ref().child('images').child(userId).child(postId).child(fileId).put(file)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    this.progressService.status = this.progressService.LOADING
                    this.progressService.snapshot = snapshot
                },
                (error) => {
                    this.progressService.status = this.progressService.ERROR
                    console.log(error)
                },
                () => {
                    this.progressService.status = this.progressService.COMPLETE
                    console.log('Upload completo')
                }
            )
    }
}