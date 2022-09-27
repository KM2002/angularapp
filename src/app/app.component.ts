import { Component } from '@angular/core';

interface Todolist{
  title: string;
  description: string;
  date: Date;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItem: string='';

  
  todolist: Todolist[] = [];


  addtodolist=()=>{
    this.todolist.push({title:this.todoItem, description:this.tododescription, date: new Date()})
  }

  removelist=(myIndex:number)=>{
    this.todolist.splice(myIndex,1)
  }
tododescription: any;
}
