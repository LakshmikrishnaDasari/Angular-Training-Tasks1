import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
 

  constructor(private interaction:InteractionService) { }

  ngOnInit() {

    this.interaction.teachermsg$.subscribe(message =>{
      if(message == 'GoodMorning'){
        alert('Good Morning teacher');

      }else if(message =='WelDone'){
        alert('Thank you');
      }
      
    }
    );

  }

 }


