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
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { NewTaskRegistration } from "../new-task-registration/new-task-registration";


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
    DialogModule,
    NewTaskRegistration
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
    { id: 5, title: 'Configurar pipeline de CI/CD', completed: false, createdAt: new Date(), priority: 'HIGH', dueDate: new Date('2025-11-01'), description: 'Criar pipeline no GitHub Actions para build, teste e deploy automático em ambiente de homologação.' },
    { id: 6, title: 'Refatorar serviço de autenticação', completed: false, createdAt: new Date(), priority: 'MEDIUM', dueDate: new Date('2025-11-15'), description: 'O serviço atual está obsoleto. Refatorar para usar JWT e melhorar a segurança dos tokens.' },
    { id: 7, title: 'Criar testes unitários para pagamentos', completed: false, createdAt: new Date(), priority: 'MEDIUM', dueDate: new Date('2025-10-25'), description: 'Aumentar a cobertura de testes do módulo de pagamentos para 80%, focando nos casos de borda.' },
    { id: 8, title: 'Otimizar carregamento da dashboard', completed: false, createdAt: new Date(), priority: 'HIGH', dueDate: new Date('2025-10-20'), description: 'A dashboard está demorando mais de 3s para carregar. Investigar e otimizar as queries e o rendering.' },
    { id: 9, title: 'Atualizar dependências do projeto', completed: true, createdAt: new Date(), priority: 'LOW', dueDate: new Date('2025-09-20'), description: 'Rodar `npm audit` e atualizar as dependências para as versões mais recentes para corrigir vulnerabilidades.' },
    { id: 10, title: 'Implementar "Esqueci minha senha"', completed: false, createdAt: new Date(), priority: 'MEDIUM', dueDate: new Date('2025-11-10'), description: 'Criar o fluxo completo de recuperação de senha, incluindo o envio de email com um link seguro para reset.' }
];
  tarefasSelecionadas: Task[] = [];
  loading: boolean = false;
  visible: boolean = false;
  priorities: any[];

  constructor() {

    this.priorities = [
        { label: 'Alta', value: 'HIGH' },
        { label: 'Média', value: 'MEDIUM' },
        { label: 'Baixa', value: 'LOW' }
    ];
  }


  abrirDialogNovaTarefa() {
    this.visible = true;
  }

  fecharDialog() {
    this.visible = false;
  }

  adicionarNovaTarefa(novaTask: Task) {
    this.tasks.push(novaTask);
    this.fecharDialog();
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
