import { Component } from "@angular/core";

@Component({
  selector: "pj",
  template : `<h2>Welcome PJ</h2>
              <p *ngIf="name">Prajyot</p>
              <p *ngIf="sirname">JOgi</p>

              <!--<div [ngSwitch]="colors">
                    <p *ngSwitchWhen="'red'" >Red color</p>
                    <p *ngSwitchWhen="'blue'" >blue color</p>
                    <p *ngSwitchDefault>Invalid color</p>
                  </div>
              -->
              <ul>
                <li *ngFor="let color of colors">{{color}}</li>
              </ul>
            `
})
export class PjComponent { 
  name=true;
  sirname = false;
  color = "red";
  colors = ["red","blue", "green"];

}