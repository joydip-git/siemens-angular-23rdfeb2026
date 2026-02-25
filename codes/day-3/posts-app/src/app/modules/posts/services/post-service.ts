import { map, Observable } from "rxjs";
import { postRecords } from "../../../../data/post-records";
import { Post } from "../models/post";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface IDataService {
    getPosts(): Observable<Post[]>;
}

//@Injectable({providedIn:'root'})
//@Injectable({providedIn:'platform'})
//@Injectable({providedIn:'any'})
@Injectable()
export class PostService implements IDataService {

    // private http: HttpClient;
    constructor(private http: HttpClient) {
        //this.http = http
        console.log('post service');
    }
    getPosts(): Observable<Post[]> {
        const obs: Observable<Post[]> = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        return obs
        // const obs: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/posts')
        //return [...postRecords]
        // return obs
        //     .pipe(
        //         map(
        //             (arr) => {
        //                 return arr.map(
        //                     p => {
        //                         return <Post>{
        //                             id: p.id,
        //                             userId: p.userId,
        //                             title: p.title,
        //                             body: p.body
        //                         }
        //                     }
        //                 )
        //             }
        //         )
        //     )
    }
}