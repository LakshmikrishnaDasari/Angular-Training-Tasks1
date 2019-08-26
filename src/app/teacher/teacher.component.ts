import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  
  constructor(private interaction:InteractionService) { }


  appreciate(){
    this.interaction.sendmessage('WelDone');
    console.log('weldone');
  }
  greet(){
    this.interaction.sendmessage('GoodMorning');
  
  }
  

  ngOnInit() {
  }

}
