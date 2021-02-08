import { Component } from "@angular/core";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Test component";

  public todos: Todo[] = [
    { id: 1, title: "121", completed: false },
    { id: 2, title: "122", completed: false },
    { id: 3, title: "123", completed: false }
  ];
}
