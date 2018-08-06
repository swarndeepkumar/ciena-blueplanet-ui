import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FieldDefination } from '../field-defination';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges, OnInit {

  @Input() vm: any;
  @Input() vmDefination: Array<FieldDefination>;
  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }


  clearForm(){
    let group = {}
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefination.forEach( field => {
      group[field.key] = field.required ? new FormControl(this.vmCopy[field.key], Validators.required)
        : new FormControl(this.vmCopy[field.key]); 
    });
    this.form = new FormGroup(group);

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['errorMessage'].currentValue && this.status === 'waiting'){
          this.status = "";
        }
  }

  ngOnInit() {
    this.clearForm();
    this.route.params.subscribe( params => {
      this.operation = params['operation'];
      this.clearForm();
    })

  }

  onBack(){
    this.errorMessage = null;
    this.location.back();
  }

  onCancel(){
    this.onBack();
  }

  onCreate(){
    this.submitted = true;
    if(this.form.valid){
      this.status = "waiting";
      this.create.emit(this.form.value);
    }
  }

  onEdit(){
    this.router.navigate(['../', 'edit'], {relativeTo: this.route});

  }

  onSave(){
    this.submitted = true;
    if(this.form.valid){
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }

}
