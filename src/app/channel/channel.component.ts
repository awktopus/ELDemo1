import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channel$: Object;
  show$: Boolean;
  show2$: Boolean;
  
  show = true;
  show2 = false;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getChannel().subscribe(
      data => this.channel$ = data
    )
  }
  

}
