import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.data.getChannel().subscribe(
      data => this.chat$ = data
    )
  }

}
