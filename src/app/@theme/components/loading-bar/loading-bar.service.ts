import {Injectable} from '@angular/core';
import {LoadingBarComponent} from './loading-bar.component';

@Injectable({providedIn: 'root'})
export class LoadingBarService {
  public static loading: LoadingBarComponent;

  constructor() {
  }

  open(): void {
    LoadingBarService.loading.open();
  }

  close(): void {
    LoadingBarService.loading.close();
  }
}
