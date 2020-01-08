import { Component } from "@angular/core";
import { NgStyle } from '@angular/common';

@Component({
  selector: "pj",
  template : `<h2 [ngClass]="{classTwo:class2}">Welcome PJ</h2>
              <p *ngIf="name" [ngClass]="{classOne:class1,classTwo:class2}">Prajyot</p>
              <p *ngIf="sirname">JOgi</p>

              <!--<div [ngSwitch]="colors">
                    <p *ngSwitchWhen="'red'" >Red color</p>
                    <p *ngSwitchWhen="'blue'" >blue color</p>
                    <p *ngSwitchDefault>Invalid color</p>
                  </div>
              -->
              <ul [ngClass]="{classThree:class3}">
                <li *ngFor="let color of colors">{{color}}</li>
              </ul>
              <button (click)="toggle()" [ngClass]="{classFour:class4}">Toggle</button>
              <p [ngStyle]="{'font-style':'italic', 'font-size': fontSize}">ngStyle Paragraph</p>
            `,
  styles : [`.classOne{ color: blue }
              .classTwo{ background-color: red }
              .classThree{ background-color: pink }
              .classFour{ background-color: red }
            `]
})
export class PjComponent { 
  name=true;
  sirname = false;
  color = "red";
  colors = ["red","blue", "green"];
  class1 = true;
  class2 = true;
  class3 = true;
  class4 = false;
  fontSize = "25px";

  toggle(){
    this.class1 = !this.class1;
    this.class2 = !this.class2;
    this.class3 = !this.class3;
    this.class4 = !this.class4;
  }

}