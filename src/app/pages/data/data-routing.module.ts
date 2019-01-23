import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {SensitiveComponent} from './sensitive/sensitive.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'dictionary', component: DictionaryComponent},
  {path: '', redirectTo: 'dictionary', pathMatch: 'full'},
  {path: 'sensitivewords', component: SensitiveComponent},
  {path: 'searchwords', component: SearchComponent},
  {path: '**', redirectTo: 'dictionary'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {
}
