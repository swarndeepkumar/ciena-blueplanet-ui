import { Component, OnInit, Input } from '@angular/core';
import { FieldDefination } from '../field-defination';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input() field :FieldDefination;
  @Input() form : FormGroup;
  @Input() operation : string;
  @Input() submitted: boolean;


  get isValid(){
      return this.form.controls[this.field.key].valid ;
  }


  constructor() { }

  ngOnInit() {
  }

}
