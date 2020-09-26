import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  @Output() backEmitter = new EventEmitter<any>();
  @Output() submitEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  lastForm = new FormGroup({

  });
  submitData(){
    this.submitEmitter.emit();
  }
  back(){
    this.backEmitter.emit();
  }
}
