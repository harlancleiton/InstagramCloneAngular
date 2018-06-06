export const LOADING = 0
export const ERROR = 1
export const COMPLETE = 2

export class ProgressService {
    public snapshot: any
    public status: number

    public LOADING: number = 0
    public ERROR: number = 1
    public COMPLETE: number = 2

    public getProgress(): number {
        if (this.snapshot !== undefined){
            return Math.trunc((this.snapshot.bytesTransferred / this.snapshot.totalBytes) * 100)
        }
        else return 0
    }
}