import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  errors = '';
  todo!: Todo;

  @Input()
  public idUser = '';

  constructor(private _todoService: TodoService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const todo = new Todo();
      todo.text = form.value.text;
      todo.done = !!form.value.done;
      todo.idUser = this.idUser;
      todo.categorie = form.value.categorie;
      
      this._todoService.create(todo,this.idUser).subscribe({
        next: () => {
          form.reset();
        },
        error: () => {
          this.errors = "La création n'a pas pu aboutir";
        },
      });
    }
  }
}
