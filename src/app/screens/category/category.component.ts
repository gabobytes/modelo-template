import { ServiceMainService } from './../../shared/services/service-main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  public bodyArray:Array<object>=[
    {
        "id": 3,
        "nombre": "Tennis adidas",
        "precio": 250000.0,
        "imagen": ""
    }
  ]
  constructor(public service:ServiceMainService) { }

  loadedContent = false;

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      res => {this.bodyArray=res["body"]},
      error => {this.loadedContent = false},
      () => {
        this.loadedContent = true;
      }
      )
  }

  addItem(item){
    console.log(item)
  }

}
