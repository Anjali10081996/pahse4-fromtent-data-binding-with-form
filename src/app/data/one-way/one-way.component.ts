import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //data
  public username:string = "Anjali";
  public age:number=25;
  public message:string="Today is a good day!"
  public isMarried:boolean=false;
  public imagUrl="./assets/smiley.jpg";
  public email:string="anjalik.agrawal@gmail.com"

  //object type : custome type
  public product:Product ={id:101,name:"Dell laptop",price:89999,isActive:true,description:"it is a gaming laptop"}
}
interface Product{
  id:number;
  name:string;
  price:number;
  isActive:boolean;
  description:string;
}