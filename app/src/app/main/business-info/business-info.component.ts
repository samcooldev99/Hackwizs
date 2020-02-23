import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import spinner from '../../utils/spinner';
import {UserService} from '../../utils/services/user/user.service';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {

  infoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.infoForm = this.formBuilder.group({
      business_name: ['', Validators.required],
      business_address: ['', Validators.required],
      gst_number: ['', Validators.required],
      sales_history: ['', Validators.required]
    });
  }

  updateBusinessInfo() {
    const userID = JSON.parse(localStorage.getItem('currentUser')).user_id;
    if (this.infoForm.value) {
      const spinnerRef = spinner.showSpinner(this.matDialog);
      this.userService.updateUserInfo(userID, this.infoForm.value).subscribe( response => {
        console.log(response);
        spinnerRef.close();
      }, error => {
        console.log(error);
        spinnerRef.close();
      });
    }
  }

  onGSTUpload(file) {
    const spinnerRef = spinner.showSpinner(this.matDialog);
    this.userService.uploadImage(file).subscribe( (response: any) => {
      if (response.body) {
        spinnerRef.close();
        this.infoForm.patchValue({
          gst_number: response.body.gst_number
        });
        console.log(response);
      }
    }, error => {
      console.log(error);
      spinnerRef.close();
    });
  }
}
