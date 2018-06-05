import * as firebase from 'firebase'

export class StorageService {
    public uploadFile(file: File): void {
        let userId = firebase.auth().currentUser.uid
        let fileId = firebase.database().ref().push().key
        firebase.storage().ref().child('images').child(userId).child(fileId).put(file)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => console.log(snapshot),
                (error) => console.log(error),
                () => console.log('Upload completo')
            )
    }
}