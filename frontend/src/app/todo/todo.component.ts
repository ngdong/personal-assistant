import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngd-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  complete: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
