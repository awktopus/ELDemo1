import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home$: Object;
  showa$: Boolean;
  showb$: Boolean;
  showc$: Boolean;
  showd$: Boolean;
  showe$: Boolean;
  showf$: Boolean;

  showa = true;
  showb = true;
  showc = true;
  showd = true;
  showe = true;
  showf = true;
  constructor(private data: DataService) { }

  ngOnInit() {


    this.data.getHome().subscribe(
      data => this.home$ = data
    )

  }

  

}
