import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Newsblog } from '../../newsblog';

@Component({
  selector: 'app-newspost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newspost.component.html',
  styleUrl: './newspost.component.css'
})
export class NewspostComponent {

  @Input() newspost!: Newsblog;

}
