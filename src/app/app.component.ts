import { CurrencyPipe, LowerCasePipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, TitleCasePipe, UpperCasePipe} from '@angular/common';
import { Component } from '@angular/core';
// import { NgModel} from '@angular/forms';
import { RouterModule, RouterOutlet,Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import {  } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoformComponent,TodolistComponent,HeaderComponent,NgIf,NgFor,NgSwitch,CurrencyPipe,NgSwitchDefault,NgSwitchCase,UpperCasePipe,TitleCasePipe,LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // show=true
  // movies=["rrr","hanuman","pushpa","srikanth"]
  
  // ngIf
  
  // showheading:boolean=true
  
 
  // data=""


// ngFor


// nums=[1,2,3,4,5,6,7,8,9,10]

// nums1=[{
//   mobile:"redme",
//   storage:"128gb",
//   cost:"10000"
// },
// {
//   mobile:"redme",
//   storage:"128gb",
//   cost:"10000"
// },
// {
//   mobile:"redme",
//   storage:"128gb",
//   cost:"10000"
// },
// ]


// num=[{
//   mobile:"redme",
//   storage:"128gb",
//   cost:"10000"
// },{
//   mobile:"Apple",
//   storage:"228gb",
//   cost:"12,900,00"
// },
// {
//   mobile:"samsang",
//   storage:"12gb",
//   cost:"15800"
// },
// ]

// ngSwitch


// num1:number=3
// num2:number=6

// op=''
title="Day_2"
name:string="angular"

amount:number=12344


}
