import { Component,Input,EventEmitter  } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  @Input()
  todo !:Todo;
  
}
