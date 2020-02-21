import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-list' ,
  templateUrl: './list.component.html',

})
export class ListComponent implements OnInit, OnDestroy { 

  value:string = "Hey Value!";  
  txtSize: number = 50;
  listIcon: string = "disc";

  items: string[];

  ngOnInit():void {
    console.log("List initialized");
    let date = new Date();
  
    console.log(this.listIcon);
    this.items = ['Item 1 on '+date, 'Item 2 on '+date];
  }

  ngOnDestroy(): void {
    console.log("List destroyed");
  }

 }