import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal.component';
import {Injectable} from '@angular/core';

@Injectable(({providedIn: 'root'}))
export class ModalService {
  constructor(private modalService: NgbModal) {
  }

  show(title: string, content: string) {
    const modal = this.modalService.open(ModalComponent, {size: 'sm'});
    modal.componentInstance.showCancelBtn = false;
    modal.componentInstance.ok = function () {
      modal.dismiss();
    };
    if (title) {
      modal.componentInstance.title = title;
    }
    modal.componentInstance.content = content;
  }
}
