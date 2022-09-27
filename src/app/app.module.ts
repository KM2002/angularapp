import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todocomponent } from './Todo/todo.component';
import { TodoAddComponent } from './Todo/todo-add/todo-add.component';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';
import { RandomMemeComponent } from './random-meme/random-meme.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Todocomponent,
    TodoAddComponent,
    TodoListComponent,
    RandomMemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
