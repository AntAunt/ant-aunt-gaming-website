import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Newsblog } from '../../newsblog';
import { BlogService } from '../../blog.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);
  newspost: Newsblog | undefined;

  loading : string = "<p>loading...</p>"

  externalHtml : any = this.loading;
  
  constructor( private http: HttpClient) {
    const blogId = this.route.snapshot.params['id'];
    this.newspost = this.blogService.getBlogById(blogId);
    this.externalHtml = this.http.get(this.newspost ? this.newspost.contentLink : this.loading, { responseType: 'text' }).subscribe(
      data => this.externalHtml = data);
  }
}
