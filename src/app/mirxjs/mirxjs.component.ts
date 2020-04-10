import { Component, OnInit,} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-mirxjs',
  templateUrl: './mirxjs.component.html',
  styleUrls: ['./mirxjs.component.css']
})
export class MirxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el=document.getElementById("elemento");
    const mouseMove= fromEvent(el, 'dblclick');
     mouseMove.subscribe((e: any)=>{
      alert("has pulsado dble click")
    });
  }

}
