import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Define your variables done,todos,newToDo,newToDoObj,error
  //Define your constructor here with todos as [] ,newToDo as '' and error as false
  //Define your addMore function here
  //Define your clearAll function here
  done:boolean;
  newToDo: string;
  newToDoObj:any;
  error: boolean;
  todos : Array<Object>;

  constructor(){
    this.todos = [];
    this.newToDo = "";
    this.error = false;
  }
  
  addMore(){
    if(this.newToDo === "") this.error = true;
    else{
      this.todos.push({desc: this.newToDo, done: false});
      this.error = false;
      console.log(this.todos);
    }
  }

  clearAll(){
    this.todos=[];
  }
}
