import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.modules';
import { CardUserComponent } from './components/card-user/card-user.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-list/todo-form/todo-form.component';
import { TodoDetailsComponent } from './components/todo-list/todo-details/todo-details.component';
import { TodoFormEditComponent } from './components/todo-list/todo-form-edit/todo-form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardUserComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoFormComponent,
    TodoFormEditComponent
    
    // FavorisComponent,
    // RechercheComponent,
    // CardFilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
