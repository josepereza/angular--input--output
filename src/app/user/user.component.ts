import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input('info') user:any;
@Output() borrar=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
BorrarUsuario(id:number){
  this.borrar.emit(id);
}
}
