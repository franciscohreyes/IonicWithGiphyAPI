import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewimagePage } from '../viewimage/viewimage.page';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public searchInput: string = "";
  public listItems: any = [];

  constructor(public modalController: ModalController, private api: RestapiService) {}

  /**
   * search
   * @param ev
   */
  search(ev){
    this.searchInput = ev;
    if(this.searchInput != ""){
      this.api.search(this.searchInput).subscribe((data) => {
        this.listItems = data['data'];
      }, (err) => {
        console.log("Err: ", err);
        this.listItems = [];
      });
    }
  }

  /**
   * selectedItem
   * @param item
   */
  async selectedItem(item){
    const modal = await this.modalController.create({
      component: ViewimagePage,
      cssClass: 'my-custom-class',
      componentProps: {item: item}
    });
    return await modal.present();
  }

  /**
   * clear
   */
  clear(){
    this.searchInput = "";
    this.listItems = [];
  }

}
