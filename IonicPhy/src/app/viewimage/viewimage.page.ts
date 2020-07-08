import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.page.html',
  styleUrls: ['./viewimage.page.scss'],
})
export class ViewimagePage implements OnInit {
  @Input() item: any;

  constructor(private NavParams: NavParams) {
    this.item = this.NavParams.get('item');
  }

  ngOnInit() {
  }

}
