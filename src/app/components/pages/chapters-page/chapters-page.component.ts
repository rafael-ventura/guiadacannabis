import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Article {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'in-development';
}

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: Article[];
}

@Component({
  selector: 'app-chapters-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapters-page.component.html',
  styleUrl: './chapters-page.component.scss'
})
export class ChaptersPageComponent {

  topics: Topic[] = [
    {
      id: 'fundamentos',
      title: 'Fundamentos',
      description: 'Conhecimento básico sobre cannabis e botânica',
      icon: '🌱',
      articles: [
        {
          id: 'introducao-cannabis',
          title: 'O que é Cannabis?',
          description: 'Entenda o básico sobre a planta, sua história e usos medicinais.',
          status: 'available'
        },
        {
          id: 'anatomia-planta',
          title: 'Anatomia da Planta',
          description: 'Conheça as partes da planta e como elas funcionam.',
          status: 'available'
        },
        {
          id: 'ciclo-vida',
          title: 'Ciclo de Vida',
          description: 'Entenda as fases de crescimento da cannabis.',
          status: 'in-development'
        }
      ]
    },
    {
      id: 'preparacao',
      title: 'Preparação',
      description: 'Como preparar o ambiente e materiais para o cultivo',
      icon: '🏠',
      articles: [
        {
          id: 'escolha-local',
          title: 'Escolhendo o Local',
          description: 'Indoor ou outdoor? Saiba qual escolher e como preparar.',
          status: 'available'
        },
        {
          id: 'materiais-basicos',
          title: 'Materiais Básicos',
          description: 'Lista completa do que você precisa para começar.',
          status: 'available'
        },
        {
          id: 'sementes-germinacao',
          title: 'Sementes e Germinação',
          description: 'Como escolher sementes e fazer elas germinarem.',
          status: 'in-development'
        }
      ]
    },
    {
      id: 'cultivo',
      title: 'Cultivo',
      description: 'Técnicas práticas de cultivo e cuidados',
      icon: '🌿',
      articles: [
        {
          id: 'regas-nutricao',
          title: 'Regas e Nutrição',
          description: 'Como regar e alimentar suas plantas corretamente.',
          status: 'in-development'
        },
        {
          id: 'iluminacao',
          title: 'Iluminação',
          description: 'Entenda sobre luz artificial e fotoperíodo.',
          status: 'in-development'
        },
        {
          id: 'pragas-problemas',
          title: 'Pragas e Problemas',
          description: 'Como identificar e resolver problemas comuns.',
          status: 'in-development'
        }
      ]
    },
    {
      id: 'colheita',
      title: 'Colheita e Pós-Colheita',
      description: 'Quando e como colher, secar e curar',
      icon: '✂️',
      articles: [
        {
          id: 'quando-colher',
          title: 'Quando Colher',
          description: 'Sinais de que sua planta está pronta para colheita.',
          status: 'in-development'
        },
        {
          id: 'secagem-curacao',
          title: 'Secagem e Curação',
          description: 'Processo completo de secagem e curação dos buds.',
          status: 'in-development'
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  openArticle(article: Article): void {
    if (article.status === 'available') {
      // Mapear IDs para as rotas corretas
      const routeMap: { [key: string]: string } = {
        'introducao-cannabis': '1-introducao-cannabis',
        'anatomia-planta': '2-anatomia-planta',
        'ciclo-vida': '3-ciclo-vida'
      };
      
      const route = routeMap[article.id] || `/chapters/${article.id}`;
      this.router.navigate([route]);
    }
  }
}

