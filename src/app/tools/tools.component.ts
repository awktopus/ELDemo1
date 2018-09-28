import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  tools$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.data.getTools().subscribe(
      data => this.tools$ = data
    )
  }

}
