import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Newsblog } from '../../newsblog';
import { NewspostComponent } from '../newspost/newspost.component';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NewspostComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
[x: string]: any;
  blogArray: Newsblog[] = [];
  blogService: BlogService = inject(BlogService);

  constructor() {
    this.blogArray = this.blogService.getNewestBlogs(10)
  }
}
