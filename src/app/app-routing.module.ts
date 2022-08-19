import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./todos/todos.module").then((m) => m.TodosModule),
  },
  {
    path: "new",
    loadChildren: () =>
      import("./todos-create/todos-create.module").then(
        (m) => m.TodosCreateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
