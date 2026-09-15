import { Component, OnInit } from '@angular/core';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: UserProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };

  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  submitForm(form: any): void {
    this.submitted = true;
    if (form.valid) {
      console.log('Profile saved', this.profile);
    }
  }
}
