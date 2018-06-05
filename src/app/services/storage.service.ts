import * as firebase from 'firebase'
import { Injectable } from '@angular/core';
import { ProgressService } from './progress.service';

@Injectable()
export class StorageService {

    constructor(private progressService: ProgressService) { }

    public uploadFile(file: File): void {
        let userId = firebase.auth().currentUser.uid
        let fileId = firebase.database().ref().push().key
        firebase.storage().ref().child('images').child(userId).child(fileId).put(file)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    console.log(snapshot)
                    this.progressService.snapshot = snapshot
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    console.log('Upload completo')
                }
            )
    }
}