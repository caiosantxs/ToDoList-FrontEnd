// Imports do Angular (você provavelmente já os tem)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Seus imports de Task e outros
import { Task } from '../../task';

// Imports dos Módulos PrimeNG
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule, Toolbar } from 'primeng/toolbar'; // Certifique-se de que o módulo de toolbar está importado corretamente


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ButtonModule,
    TableModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
    TagModule,
    TooltipModule,
],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoListComponent {

  newTask: string = '';
  tasks: Task[] = [

    { id: 1, title: 'Criar componente de header', completed: true, createdAt: new Date(), priority: 'HIGH' },
    { id: 2, title: 'Desenvolver a tela de login', completed: false, createdAt: new Date(), priority: 'HIGH' },
    { id: 3, title: 'Corrigir bug no formulário', completed: false, createdAt: new Date(), priority: 'MEDIUM' },
    { id: 4, title: 'Atualizar documentação da API', completed: true, createdAt: new Date(), priority: 'LOW' }
  ];


  loading: boolean = false;
  priorities: any[];

  constructor() {

    this.priorities = [
        { label: 'Alta', value: 'HIGH' },
        { label: 'Média', value: 'MEDIUM' },
        { label: 'Baixa', value: 'LOW' }
    ];
  }


  addTask(): void {
    if (this.newTask.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTask.trim(),
        completed: false,
        createdAt: new Date(),
        priority: 'MEDIUM'
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }


  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }


  getPrioritySeverity(priority: 'LOW' | 'MEDIUM' | 'HIGH'): string {
    switch (priority) {
        case 'HIGH':
            return 'danger';
        case 'MEDIUM':
            return 'warn';
        case 'LOW':
            return 'success';
        default:
            return 'info';
    }
  }
}
