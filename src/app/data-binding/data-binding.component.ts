import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/primeng';
import { MessageService } from 'primeng/primeng';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  uploadedFiles: any[] = [];
  msgs: Message[] = [];
  name: string = 'Miracle Software solutions';
  name1: string = 'Mss';
  name2: string = 'Miracle';
  name3: string = `lakshmi is Working in ${this.name2}`
  name4: any;
  constructor(private messageService: MessageService) { }

  changetitle() {
    this.name2 = 'Mss';
  }

  ngOnInit() {
    console.log(this.name3)
  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
  

  showResponse(event) {
    this.messageService.add({ severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true });
  }
}



