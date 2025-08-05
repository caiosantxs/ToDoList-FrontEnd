import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Seus imports de Task e outros
import { Task } from '../../task'; // Ajuste o caminho se necessário

// Imports dos Módulos PrimeNG
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-new-task-registration',
  standalone: true, // Adicionado para componentes standalone
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    InputTextModule,
    InputMaskModule,
    DatePickerModule
  ],
  templateUrl: './new-task-registration.html',
  styleUrl: './new-task-registration.scss'
})
export class NewTaskRegistration {


  @Input() priorities: any[] = [];

  @Output() onTaskSave = new EventEmitter<Task>();
  @Output() onCancel = new EventEmitter<void>();


  taskParaAdicionar: Partial<Task> = {
    priority: 'MEDIUM'
  };

  save() {

    if (!this.taskParaAdicionar.title || !this.taskParaAdicionar.title.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: this.taskParaAdicionar.title.trim(),
      description: this.taskParaAdicionar.description || '',
      priority: this.taskParaAdicionar.priority || 'MEDIUM',
      dueDate: this.taskParaAdicionar.dueDate,
      completed: false,
      createdAt: new Date(),
    };

    this.onTaskSave.emit(newTask);
  }

  cancel() {
    this.onCancel.emit();
  }
}
