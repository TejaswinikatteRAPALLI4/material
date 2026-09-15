import { Component, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component {
  @Input() data!: string;
  constructor(private fb: FormBuilder,private router:Router) { }
  formData!: FormGroup;
  count = signal(0);
  ngOnInit() {
    this.formData = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required],Validators.minLength(6)],
    })
  }
  changeCount(amount: number): void {
    this.count.update((currentCount) => currentCount + amount);
  }
  submitForm(){
    console.log(this.formData.value,"25");
     this.router.navigate(['/dashboard']);
    this.formData.reset();
   
  }
}

