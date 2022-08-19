import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { TodoPriority } from '../shared/enums/todo-priority';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.scss'],
})
export class TodosCreateComponent implements OnInit, OnDestroy {
  /** form of create todo  */
  createTodoForm: FormGroup;

  /** Object of todo priorities. */
  todoPriority = {
    low: TodoPriority.LOW,
    normal: TodoPriority.NORMAL,
    high: TodoPriority.HIGH,
  };

  /** Subscription for observables to unsubscribe after component destroy. */
  private readonly subscription = new Subscription();

  /** List of todos. */
  private todos: Todo[] = [];

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {
    console.debug('TodosCreateComponent initiated.');

    this.createTodoForm = formBuilder.group({
      "title": [null, [Validators.required]],
      "date": [null, [Validators.required]],
      "priority": [null, [Validators.required]],
      "done": [false]
    });
  }

  ngOnInit(): void {
    this.subscription.add(this.appService.todos.subscribe({
      next: (value: Todo[]): void => {
        this.todos = value;
      },
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createTodo() {
    if (!this.todos) {
      this.todos = []
    }

    this.todos.push(this.createTodoForm.value)
    this.appService.todos.next(this.todos);
    this.createTodoForm.reset();
  }
}
