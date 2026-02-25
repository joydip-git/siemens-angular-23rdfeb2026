import { postRecords } from "../../../../data/post-records";
import { Post } from "../models/post";

export interface IDataService {
    getPosts(): Post[];
}
export class PostService implements IDataService {
    constructor() {
        console.log('post service');
    }
    getPosts(): Post[] {
        return [...postRecords]
    }
}