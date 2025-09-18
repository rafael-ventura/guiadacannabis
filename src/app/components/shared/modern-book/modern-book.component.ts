import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LegalProtection {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

@Component({
  selector: 'app-modern-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modern-book.component.html',
  styleUrl: './modern-book.component.scss'
})
export class ModernBookComponent {

  legalProtections: LegalProtection[] = [
    {
      icon: '🌿',
      title: 'Cultivo Responsável',
      description: 'Informações sobre cultivo doméstico seguro, sustentável e respeitando o meio ambiente.',
      badge: 'Eco-Friendly'
    },
    {
      icon: '🔬',
      title: 'Baseado em Ciência',
      description: 'Todas as técnicas são baseadas em pesquisas botânicas e estudos científicos comprovados.',
      badge: 'Científico'
    },
    {
      icon: '🏠',
      title: 'Cultivo Doméstico',
      description: 'Focado em cultivo caseiro, pequena escala e para uso pessoal, sempre dentro da legalidade.',
      badge: 'Doméstico'
    },
    {
      icon: '⚖️',
      title: 'Respeito Legal',
      description: 'Encorajamos sempre o conhecimento das leis locais e cultivo dentro da legalidade.',
      badge: 'Legal'
    }
  ];
}
