import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private regexMatrix = '^[0-9]+[-]+[0-9]';
  private regexStart = '^[0-9]+[-]+([A-Z])$';

  settingForm!: FormGroup;

  get matrixValid() {
    return this.settingForm.get('matrix')?.status;
  }

  data: any;

  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    // this.settingForm.valueChanges.subscribe(data => {
    //   console.log(data)
    // })
  }

  submitForm() {
    console.log(this.settingForm.value)
    this.data = this.settingForm.value;
  }

  initForm() {
    this.settingForm = this.fb.group({
      matrix: ['', [Validators.compose([
        Validators.required,
        Validators.pattern(this.regexMatrix)
      ])]],

      start: ['', [Validators.compose([
        Validators.required,
        Validators.pattern(this.regexStart)
      ])]],

      end: ['', [Validators.compose([
        Validators.required,
        Validators.pattern(this.regexStart)
      ])]],
      locked: '',
    });
  }



}
