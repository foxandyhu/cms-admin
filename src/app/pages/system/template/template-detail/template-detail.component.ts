import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-system-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss'],
})
export class TemplateDetailComponent implements OnInit {

  constructor(private ref: NbDialogRef<TemplateDetailComponent>) {
  }

  ngOnInit() {
  }

  content: string; //  内容

  cancel() {
    this.ref.close();
  }

  submit() {
    this.ref.close(this.content);
  }
}
