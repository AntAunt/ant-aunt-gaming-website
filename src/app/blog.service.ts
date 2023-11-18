import { Injectable } from '@angular/core';
import { Newsblog } from './newsblog';
import data from '../assets/newblogs.json';

@Injectable({
    providedIn: 'root'
})

export class BlogService {

    readonly blogArray: Array<Newsblog> = data as Newsblog[];

    getAllBlogs(): Newsblog[] {
        return this.blogArray
    }

    getBlogById(id: number) : Newsblog | undefined {
        return this.blogArray.find(blog => blog.id == id)
    }

    getNewestBlogs(pageSize = data.length){
        this.blogArray.sort((a,b) => (a.id > b.id ? -1 : 1));
        if (pageSize >= data.length) {
            return this.blogArray;
        }
        this.blogArray.sort((a,b) => (a.id > b.id ? -1 : 1));
        return this.blogArray.slice(0, pageSize);
    }

}