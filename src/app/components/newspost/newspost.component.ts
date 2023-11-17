import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Newsblog } from '../../newsblog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newspost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newspost.component.html',
  styleUrl: './newspost.component.css'
})
export class NewspostComponent implements OnChanges {

  @Input() newspost!: Newsblog;

  externalHtml : any;
  show : boolean = true;

  constructor(
    private http: HttpClient
  ) {
  }
  ngOnChanges(): void {
    this.externalHtml = this.http.get(this.newspost.contentLink, { responseType: 'text' }).subscribe(
      data => this.externalHtml = data);
  } 


}
