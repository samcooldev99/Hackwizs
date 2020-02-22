import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material';



@NgModule({
  declarations: [SpinnerComponent],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ]
})
export class CommonComponentsModule { }
