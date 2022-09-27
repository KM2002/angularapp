import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() todoAddedEvent = new EventEmitter();

  TodoItem: string='';

  constructor() { }

  ngOnInit(): void {
  }
  addtoTodo=()=>{
    this.todoAddedEvent.emit(this.TodoItem)

  }

}
