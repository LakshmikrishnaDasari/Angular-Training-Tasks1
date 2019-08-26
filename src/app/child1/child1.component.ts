import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/primeng';
import {  MessageService } from 'primeng/primeng';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  msgs: Message[] = [];
  uploadedFiles: any[] = [];
  // msgs: Message[] = [];

  constructor(private messageService: MessageService) { }
  @Input() x: string; 



  ngOnInit() {
  }

  add1() {
   
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  
  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
