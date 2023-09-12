import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.css']
})
export class AdvantageComponent implements OnInit {

public constructor(private titleService: Title ) { }

  ngOnInit() {
  	 this.titleService.setTitle( 'Advantage' );
  }

}
