import { Component } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todo$ = this._todoService.todo$;
  user$ = this._todoService.user$;
  
  constructor(private _todoService: TodoService) {
    this._todoService.findAllUser();
  }
}
