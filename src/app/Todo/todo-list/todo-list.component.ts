import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output() todoremoveEvent = new EventEmitter();
  @Input() todolist: string[]=[];


  constructor() { }

  ngOnInit(): void {
  }
  removetodo=(myIndex: number)=>{
    this.todoremoveEvent.emit(myIndex)
  }

}
