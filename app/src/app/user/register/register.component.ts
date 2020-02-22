import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../utils/services/user/user.service';
import spinner from '../../utils/spinner';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobile_number: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.value) {
      const spinnerRef = spinner.showSpinner(this.matDialog);
      this.userService.createUser({
        username: this.registerForm.value.email,
        ...this.registerForm.value
      }).subscribe( response => {
        console.log(response);
        this.router.navigate(['/auth/']);
        spinner.closeSpinner(spinnerRef);
      }, error => {
        console.log(error);
        spinner.closeSpinner(spinnerRef);
      });
    }
  }

}
