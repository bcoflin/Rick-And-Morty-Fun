import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {

  constructor(
    public snackBar: MatSnackBar) {}


    success(message: string) {
      this.snackBar.open(message, undefined, { duration: 3000, panelClass: ['success']});
    }
    error(message: string) {
    this.snackBar.open(message, undefined, { duration: 3000, panelClass: ['error']});
    //  snackOpen.onAction().subscribe(() => {
    //     snackOpen.dismiss();
    //   });
    }
}
