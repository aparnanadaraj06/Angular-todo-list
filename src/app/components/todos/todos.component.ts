import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'
import { restapiService } from './../../services/restapi.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = ''
  todos:Todo[];

  constructor(private _restapiService: restapiService) { }

// Initialisation
  ngOnInit(): void {

    this._restapiService.getTasks().subscribe
    (
      data=>{
        this.todos=data;
      }
  

    )
      console.log(this.todos);


  //   this.todos = [
  //     {
  //     content:'First1',
  //     completed:false
  //     name:string;
  //     description:string;
  //     status:boolean;
  //     createdAt:Date;
  //     dueDate:Date;
  //   },
  //   {
  //     content:'Second1',
  //     completed:true
  //   }
  // ]
  }
// Toggle Done

toggleDone (id:number) {
  this.todos.map((v,i)=>{
    console.log('jjj');
    if(i==id) v.status = !v.status;
    return v;
  })

} 

deleteTodo(id:number){
  this.todos = this.todos.filter((v,i)=> i!==id );
}

addTodo(newTodolabel,newTodoDesc){
  if(newTodolabel == ''){
    alert('Title cannot be empty');
    return;
 }

  var NewTodo={
    name:newTodolabel,
    description:newTodoDesc,
    status:false,
    createdAt:new Date(),
    dueDate:new Date()

  };
  this.todos.push(NewTodo);
}


}
