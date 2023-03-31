import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form-edit',
  templateUrl: './todo-form-edit.component.html',
  styleUrls: ['./todo-form-edit.component.css'],
})
export class TodoFormEditComponent {
  errors = '';
  

  @Input()
  public todo!: Todo;

  @Input()
  public editable=false;

  constructor(private _todoService: TodoService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const todo = new Todo();
      todo.text = form.value.text;
      todo.done = !!form.value.done;
      todo.idUser = form.value.idUser;
      todo.id = form.value.id;
      todo.categorie = form.value.categorie;
      this._todoService.update(todo);
      this.editable=!this.editable;
    }
  }
}
