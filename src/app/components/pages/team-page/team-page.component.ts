import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface CommunityValue {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {

  communityValues: CommunityValue[] = [
    {
      icon: '🌱',
      title: 'Conhecimento Livre',
      description: 'Informação científica e prática, sem segredos ou cobranças. Apenas conhecimento puro compartilhado com amor.'
    },
    {
      icon: '🔬',
      title: 'Baseado em Ciência',
      description: 'Todas as informações são baseadas em pesquisas científicas e evidências, não em opiniões ou crenças.'
    },
    {
      icon: '🤝',
      title: 'Comunidade Solidária',
      description: 'Cultivadores ajudando cultivadores. Uma comunidade que cresce junto e compartilha experiências.'
    },
    {
      icon: '⚖️',
      title: 'Uso Responsável',
      description: 'Encorajamos sempre o respeito às leis locais e o uso responsável das informações compartilhadas.'
    }
  ];

  constructor(private router: Router) {}

  shareKnowledge(): void {
    // Implementar compartilhamento de conhecimento
    console.log('Compartilhar conhecimento');
  }

  joinCommunity(): void {
    // Implementar navegação para comunidade
    console.log('Juntar-se à comunidade');
  }
}
