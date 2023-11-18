import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Newsblog } from '../../newsblog';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-newspost',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './newspost.component.html',
  styleUrl: './newspost.component.css'
})
export class NewspostComponent implements OnChanges {

  @Input() newspost!: Newsblog;

  externalHtml : any;
  show : boolean = true;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
  }
  ngOnChanges(): void {
    this.externalHtml = this.http.get(this.newspost.contentLink, { responseType: 'text' }).subscribe(
      data => this.externalHtml = data);
    this.externalHtml = this.sanitizer.bypassSecurityTrustHtml(`<style>.read-more-content{display: none}</style>`);
  } 


}
