import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResourceComponent} from './resource/resource.component';
import {WatermarkComponent} from './watermark/watermark.component';

const routes: Routes = [
  {path: 'resource', component: ResourceComponent},
  {path: 'setting/watermark', component: WatermarkComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule { }
