import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Test component";

  //public todos: Todo[] = [
  //  { id: 1, title: "121", completed: false, date: new Date() },
  //  { id: 2, title: "122", completed: true, date: new Date() },
  //  { id: 3, title: "123", completed: false }
  //];

  //onToggle(id: number) {
  //  console.log(id);
  //  const index = this.todos.findIndex((e) => e.id === id);
  //  this.todos[index].completed = !this.todos[index].completed;
  //}
}
