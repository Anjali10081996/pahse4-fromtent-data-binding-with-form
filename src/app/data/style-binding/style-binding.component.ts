import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //data
  public username:string = "Anjali";
  public age:number=24;
  public message:string="Today is a good day!"
  public isMarried:boolean=false;
  public imagUrl="./assets/smiley.jpg";
  public email:string="anjalik.agrawal@gmail.com"

  //object type : custome type
  public product:Product ={id:101,name:"Dell laptop",price:89999,isActive:true,description:"it is a gaming laptop"}
  public color ={RED:'red', GREEN:'green', ORANGE:'orange',BLUE:'blue',YELLOW:'#93932b'}

}
interface Product{
  id:number;
  name:string;
  price:number;
  isActive:boolean;
  description:string;
}


