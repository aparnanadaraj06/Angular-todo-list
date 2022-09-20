import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http' 
import { restapiService} from './services/restapi.service'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [restapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
