import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todo$ = new BehaviorSubject<Todo[]>([]);
  public user$ = new BehaviorSubject<User[]>([]);
  private _baseUrlUser = environment.urlApi + '/Users';
  private _baseUrlTodo = environment.urlApi + '/Todos';

  constructor(private _http: HttpClient) {}

  public findAllUser() {
    this._http.get<User[]>(this._baseUrlUser).subscribe((listeUsers) => {
      this.user$.next(listeUsers);
    });
  }
  public findAllTodo() {
    this._http.get<Todo[]>(this._baseUrlTodo).subscribe((listesTodos) => {
      this.todo$.next(listesTodos);
    });
  }

  public findById(id?: string) {
    return this._http.get<Todo[]>(`${this._baseUrlTodo}?idUser=${id}`);
  }

  public create(todo: Todo, id?: string) {
    return this._http.post<Todo>(this._baseUrlTodo, todo).pipe(
      tap(() =>
        setTimeout(() => {
          this.selectedTodoPerUser(id);
        }, 500)
      )
    );
  }

  public update(todo: Todo) {
    this._http
      .put<Todo>(`${this._baseUrlTodo}/${todo.id}`, todo)
      .subscribe(() => console.log('Mise a jour ok'));
  }

  public delete(todo: Todo) {
    this._http.delete<Todo>(`${this._baseUrlTodo}/${todo.id}`).subscribe(() => {
      setTimeout(() => {
        this.selectedTodoPerUser(todo.idUser);
      }, 500);
    });
  }

  selectedTodoPerUser(id?: string) {
    return this._http
      .get<Todo[]>(`${this._baseUrlTodo}?idUser=${id}`)
      .subscribe((listeTodoUser) => {
        console.log(listeTodoUser);
        this.todo$.next(listeTodoUser);
      });
  }
  filtreCateg(categorie: String,idUser?: string) {
    if (categorie !== 'tous') {
      return this._http
        .get<Todo[]>(`${this._baseUrlTodo}?categorie=${categorie}&idUser=${idUser}`)
        .subscribe((listeTodoUser) => {
          console.log(listeTodoUser);
          this.todo$.next(listeTodoUser);
        });
    }
    return this.selectedTodoPerUser(idUser);
  }

  filtreDone(done?:Boolean,idUser?: string) {

      return this._http
        .get<Todo[]>(`${this._baseUrlTodo}?done=${done}&idUser=${idUser}`)
        .subscribe((listeTodoUser) => {
          console.log(listeTodoUser);
          this.todo$.next(listeTodoUser);
        });

  }
}
