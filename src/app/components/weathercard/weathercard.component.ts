import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.less']
})
export class WeathercardComponent implements OnInit {
  @Input() weatherCard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
