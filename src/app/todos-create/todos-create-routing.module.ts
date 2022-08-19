import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosCreateComponent } from './todos-create.component';

const routes: Routes = [
  {
    path: '',
    component: TodosCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosCreateRoutingModule {
}
