import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { User } from 'src/app/shared/models/user';
import { TodoService } from 'src/app/shared/services/todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos$ = this._todoService.todo$;
  editTodo!: Todo;
  editable = false;
  public idUser = '';
  public name = '';
  public categorie = 'tous';
  public done:Boolean=false;
  


  constructor(
    private _todoService: TodoService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = (this._route.snapshot.params as any).id;
    this.name = (this._route.snapshot.params as any).name;
    this.idUser = id;
    this._todoService.findById(id).subscribe((listesTodos) => {
      console.log(listesTodos);
      this.todos$.next(listesTodos);
    });
  }

  // Recupere la todo a modifier
  getUpdateTodo(todo: Todo) {
    this.editTodo = todo;
    this.editable = !this.editable;
    // this._todoService.update(todo);
  }
  // Suppression
  delete(todo: Todo) {
    this._todoService.delete(todo);
  }
  // filtre
  filtreCateg() {
    this._todoService.filtreCateg(this.categorie, this.idUser);
  }
  filtreDone(){
  
    this._todoService.filtreDone(this.done, this.idUser);
  }
}
