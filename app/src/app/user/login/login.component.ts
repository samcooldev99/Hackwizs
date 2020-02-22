import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../utils/services/user/user.service';
import {MatDialog} from '@angular/material';
import spinner from '../../utils/spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const spinnerRef = spinner.showSpinner(this.matDialog);
      this.userService.login(this.loginForm.value).subscribe( (response: any) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/']);
        console.log(response);
        spinnerRef.close();
      }, error => {
        console.log(error);
        spinnerRef.close();
      });
    }
  }

}
