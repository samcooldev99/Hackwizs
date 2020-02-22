import {MatDialog, MatDialogRef} from '@angular/material';
import {SpinnerComponent} from '../common-components/spinner/spinner.component';

export default {
  showSpinner: (matDialogInstance: MatDialog) => {
    return matDialogInstance.open(SpinnerComponent, {
      disableClose: true,
      panelClass: 'transparent'
    });
  },
  closeSpinner: (spinnerInstance: MatDialogRef<SpinnerComponent>) => {
    spinnerInstance.close();
  }
};

