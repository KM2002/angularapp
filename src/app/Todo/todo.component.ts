import { Component } from '@angular/core';

interface Todolist{
  title: string;
  description: string;
  date: Date;

}
@Component({
  selector: 'app-Todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class Todocomponent {
  todolist: string[]=[];

  todoAddHandler=(todoItem: string)=>{
    this.todolist.push(todoItem)
  }
}
