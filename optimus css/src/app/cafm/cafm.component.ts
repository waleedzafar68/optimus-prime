import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-cafm',
  templateUrl: './cafm.component.html',
  styleUrls: ['./cafm.component.css']
})
export class CafmComponent implements OnInit {

public constructor(private titleService: Title ) { }

  ngOnInit() {
  	 this.titleService.setTitle( 'CAFM' );
  }

}
