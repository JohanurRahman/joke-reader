import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes-add',
  templateUrl: './jokes-add.component.html',
  styleUrls: ['./jokes-add.component.scss']
})
export class JokesAddComponent implements OnInit {

  checked = false;
  indeterminate = false;

  constructor() { }

  ngOnInit() {
  }

}
