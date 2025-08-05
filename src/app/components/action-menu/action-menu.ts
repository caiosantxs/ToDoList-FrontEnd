import { Component } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  imports: [],
  templateUrl: './action-menu.html',
  styleUrl: './action-menu.scss'
})
export class ActionMenuComponent {
  // Aqui você pode adicionar propriedades e métodos necessários para o menu de ações
  actions: string[] = ['Criar', 'Editar', 'Excluir', 'Visualizar'];

  onActionSelected(action: string): void {
    console.log(`Ação selecionada: ${action}`);
    // Implemente a lógica para cada ação aqui
  }
}
