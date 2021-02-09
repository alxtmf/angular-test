import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
//import { EventEmitter } from "events";
//import { Todo } from "../app.component";
import {TodosService} from "../services/todos.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  //@Input() todos: Todo[] = [];
  //@Output() onToggle = new EventEmitter<number>();

  constructor(private todosService: TodosService) {}

  ngOnInit() {}

  onChange(id: number) {
    this.todosService.onToggle(id);
    //this.onToggle.emit(id);
    //console.log(id);
    //const index = this.todos.findIndex((e) => e.id === id);
    //this.todos[index].completed = !this.todos[index].completed;
  }
}
