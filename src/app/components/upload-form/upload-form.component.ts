import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  @Output() backEmitter = new EventEmitter<any>();
  @Output() nextEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(){
   
    this.nextEmitter.emit();
  }
  back(){
    this.backEmitter.emit();
  }
}
