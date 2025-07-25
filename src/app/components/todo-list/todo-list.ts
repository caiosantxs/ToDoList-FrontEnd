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
    ToolbarModule,
],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoListComponent {

  newTask: string = '';
  tasks: Task[] = [
    { id: 1, title: 'Criar componente de header', completed: true, createdAt: new Date(), priority: 'HIGH', dueDate: new Date('2025-10-01'), description: 'Desenvolver o cabeçalho principal da aplicação com logo e menu de navegação.' },
    { id: 2, title: 'Desenvolver a tela de login', completed: false, createdAt: new Date(), priority: 'HIGH', dueDate: new Date('2025-10-05'), description: 'Implementar o formulário de login com validação de email e senha.' },
    { id: 3, title: 'Corrigir bug no formulário', completed: false, createdAt: new Date(), priority: 'MEDIUM', dueDate: new Date('2025-10-10'), description: 'O botão de "Salvar" não está sendo habilitado corretamente após o preenchimento dos campos.' },
    { id: 4, title: 'Atualizar documentação da API', completed: true, createdAt: new Date(), priority: 'LOW', dueDate: new Date('2025-10-15'), description: 'Documentar os novos endpoints de usuários e produtos no Swagger.' },
  ];
  tarefasSelecionadas: Task[] = [];


  loading: boolean = false;
  priorities: any[];

  constructor() {

    this.priorities = [
        { label: 'Alta', value: 'HIGH' },
        { label: 'Média', value: 'MEDIUM' },
        { label: 'Baixa', value: 'LOW' }
    ];
  }


  novaTarefa(){
    this.newTask = '';
  }
  deletarTarefasSelecionadas() {
    this.tasks = this.tasks.filter(task => !task.completed);
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
