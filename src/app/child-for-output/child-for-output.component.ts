import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-for-output',
  templateUrl: './child-for-output.component.html',
  styleUrls: ['./child-for-output.component.scss']
})
export class ChildForOutputComponent implements OnInit {

  message: string = "(Reactive Forms!)"

  @Output() message1 = new EventEmitter<string>();
  constructor() { }

  ChangeTitle() {
    this.message1.emit(this.message)
  }

  ngOnInit() {
  }

}
