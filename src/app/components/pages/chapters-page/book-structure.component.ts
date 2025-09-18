import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Chapter {
  number: number;
  title: string;
  description: string;
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  inProgress: boolean;
  progress: number;
}

interface Part {
  title: string;
  description: string;
  icon: string;
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  chapters: Chapter[];
}

@Component({
  selector: 'app-book-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-structure.component.html',
  styleUrl: './book-structure.component.scss'
})
export class BookStructureComponent implements OnInit, OnDestroy {
  activePart = 0;

  parts: Part[] = [
    {
      title: 'Fundamentos',
      description: 'Conhecimento básico sobre cannabis e cultivo',
      icon: 'icon-seed',
      estimatedTime: 60,
      difficulty: 'beginner',
      chapters: [
        {
          number: 1,
          title: 'Introdução à Cannabis',
          description: 'Visão geral sobre a planta, história e usos',
          estimatedTime: 15,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 2,
          title: 'Anatomia da Planta',
          description: 'Estrutura da planta, partes importantes e funções',
          estimatedTime: 20,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 3,
          title: 'Ciclo de Vida',
          description: 'Fases do crescimento, floração e colheita',
          estimatedTime: 25,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    },
    {
      title: 'Preparação e Plantio',
      description: 'Tudo que você precisa saber antes de começar',
      icon: 'icon-tools',
      estimatedTime: 75,
      difficulty: 'beginner',
      chapters: [
        {
          number: 4,
          title: 'Escolha do Local',
          description: 'Indoor vs outdoor, fatores ambientais',
          estimatedTime: 20,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 5,
          title: 'Preparação do Solo',
          description: 'Tipos de solo, pH, nutrientes e drenagem',
          estimatedTime: 30,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 6,
          title: 'Sementes e Germinação',
          description: 'Escolha de sementes, métodos de germinação',
          estimatedTime: 25,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    },
    {
      title: 'Cultivo e Cuidados',
      description: 'Cuidados diários e técnicas de cultivo',
      icon: 'icon-leaf',
      estimatedTime: 150,
      difficulty: 'intermediate',
      chapters: [
        {
          number: 7,
          title: 'Irrigação e Nutrição',
          description: 'Regas, fertilizantes, deficiências nutricionais',
          estimatedTime: 35,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 8,
          title: 'Iluminação',
          description: 'Tipos de luz, fotoperíodo, LED vs HPS',
          estimatedTime: 30,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 9,
          title: 'Controle de Pragas e Doenças',
          description: 'Identificação, prevenção e tratamento',
          estimatedTime: 40,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 10,
          title: 'Técnicas de Treinamento',
          description: 'LST, HST, topping, defoliation',
          estimatedTime: 45,
          difficulty: 'advanced',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    },
    {
      title: 'Floração e Colheita',
      description: 'Fase final e preparação para consumo',
      icon: 'icon-flower',
      estimatedTime: 90,
      difficulty: 'intermediate',
      chapters: [
        {
          number: 11,
          title: 'Floração',
          description: 'Indução, desenvolvimento e cuidados na floração',
          estimatedTime: 35,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 12,
          title: 'Colheita e Secagem',
          description: 'Sinais de maturação, colheita e secagem',
          estimatedTime: 30,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 13,
          title: 'Cura e Armazenamento',
          description: 'Processo de cura e armazenamento adequado',
          estimatedTime: 25,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    },
    {
      title: 'Técnicas Avançadas',
      description: 'Para cultivadores experientes',
      icon: 'icon-science',
      estimatedTime: 135,
      difficulty: 'advanced',
      chapters: [
        {
          number: 14,
          title: 'Hidroponia',
          description: 'Cultivo sem solo, sistemas hidropônicos',
          estimatedTime: 50,
          difficulty: 'advanced',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 15,
          title: 'Melhoramento Genético',
          description: 'Cruzamentos, seleção e estabilização',
          estimatedTime: 45,
          difficulty: 'advanced',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 16,
          title: 'Extração e Concentrados',
          description: 'Métodos de extração, hash, óleos',
          estimatedTime: 40,
          difficulty: 'advanced',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    },
    {
      title: 'Análise e Otimização',
      description: 'Maximizando resultados',
      icon: 'icon-chart',
      estimatedTime: 90,
      difficulty: 'intermediate',
      chapters: [
        {
          number: 17,
          title: 'Análise de Qualidade',
          description: 'Avaliação de qualidade, testes',
          estimatedTime: 30,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 18,
          title: 'Solução de Problemas',
          description: 'Diagnóstico e correção de problemas comuns',
          estimatedTime: 35,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 19,
          title: 'Planejamento de Cultivos',
          description: 'Cronogramas, rotação e escalonamento',
          estimatedTime: 25,
          difficulty: 'intermediate',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    },
    {
      title: 'Aspectos Legais e Éticos',
      description: 'Responsabilidade e legalidade',
      icon: 'icon-shield',
      estimatedTime: 35,
      difficulty: 'beginner',
      chapters: [
        {
          number: 20,
          title: 'Aspectos Legais',
          description: 'Legislação, regulamentações e responsabilidades',
          estimatedTime: 20,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        },
        {
          number: 21,
          title: 'Cultivo Responsável',
          description: 'Práticas sustentáveis e éticas',
          estimatedTime: 15,
          difficulty: 'beginner',
          completed: false,
          inProgress: false,
          progress: 0
        }
      ]
    }
  ];

  totalChapters = 21;
  totalTime = 635;
  totalLanguages = 3;
  totalReaders = 1250;

  private scrollRevealElements: Element[] = [];

  ngOnInit(): void {
    this.initializeScrollReveal();
    this.animateStats();
  }

  ngOnDestroy(): void {
    // Cleanup se necessário
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkScrollReveal();
  }

  get activePartData(): Part {
    return this.parts[this.activePart];
  }

  setActivePart(index: number): void {
    this.activePart = index;
  }

  openChapter(chapter: Chapter): void {
    console.log('Abrir capítulo:', chapter.title);
    // Implementar navegação para o capítulo
  }

  getStatusIcon(chapter: Chapter): string {
    if (chapter.completed) return 'icon-check';
    if (chapter.inProgress) return 'icon-play';
    return 'icon-lock';
  }

  getDifficultyLabel(difficulty: string): string {
    switch (difficulty) {
      case 'beginner': return 'Iniciante';
      case 'intermediate': return 'Intermediário';
      case 'advanced': return 'Avançado';
      default: return 'Iniciante';
    }
  }

  getChapterButtonClass(chapter: Chapter): string {
    if (chapter.completed) return 'btn-completed';
    if (chapter.inProgress) return 'btn-in-progress';
    return 'btn-locked';
  }

  getChapterButtonIcon(chapter: Chapter): string {
    if (chapter.completed) return 'icon-check';
    if (chapter.inProgress) return 'icon-play';
    return 'icon-lock';
  }

  getChapterButtonText(chapter: Chapter): string {
    if (chapter.completed) return 'Revisar';
    if (chapter.inProgress) return 'Continuar';
    return 'Bloqueado';
  }

  startReading(): void {
    console.log('Começar a ler');
    // Implementar navegação para o primeiro capítulo
  }

  downloadGuide(): void {
    console.log('Baixar guia');
    // Implementar download do guia
  }

  private initializeScrollReveal(): void {
    this.scrollRevealElements = Array.from(document.querySelectorAll('.scroll-reveal'));
    this.checkScrollReveal();
  }

  private checkScrollReveal(): void {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    this.scrollRevealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementHeight = element.getBoundingClientRect().height;
      const revealPoint = windowHeight * 0.8;

      if (scrollTop + revealPoint > elementTop && scrollTop < elementTop + elementHeight) {
        element.classList.add('revealed');
      }
    });
  }

  private animateStats(): void {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
      const target = parseInt(stat.textContent || '0');
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateStat = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateStat);
        } else {
          stat.textContent = target.toString();
        }
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateStat();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(stat);
    });
  }
}
