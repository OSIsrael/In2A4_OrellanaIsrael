import { Component } from '@angular/core';
import { PokeapiService } from './../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemId: number | null = null;
  itemName: string | null = null;
  itemDetailsById: any;
  itemDetailsByName: any;

  constructor(private api: PokeapiService) {}

  getItemDataById() {
    try {
      if (this.itemId !== null) {
        this.api.getItemByID(this.itemId).subscribe(response => {
          this.itemDetailsById = response;
          this.api.getItemByName(this.itemDetailsById.name).subscribe(nameResponse => {
            this.itemDetailsById.name = nameResponse.name;
            
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  getItemDataByName() {
    try {
      if (this.itemName !== null) {
        this.api.getItemByName(this.itemName).subscribe(response => {
          this.itemDetailsByName = response;
          this.api.getItemByID(this.itemDetailsByName.id).subscribe(idResponse => {
            this.itemDetailsByName.id = idResponse.id;
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
