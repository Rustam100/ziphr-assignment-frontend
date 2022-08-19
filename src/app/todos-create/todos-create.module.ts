import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosCreateRoutingModule } from './todos-create-routing.module';
import { TodosCreateComponent } from './todos-create.component';

@NgModule({
  declarations: [
    TodosCreateComponent,
  ],
  imports: [
    CommonModule,
    TodosCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TodosCreateModule {
}
