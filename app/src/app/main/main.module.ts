import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BusinessInfoComponent } from './business-info/business-info.component';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main.component';


@NgModule({
  declarations: [MainComponent, BusinessInfoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
