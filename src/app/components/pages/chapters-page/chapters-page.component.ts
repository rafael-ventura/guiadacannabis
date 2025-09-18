import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Chapter {
  id: string;
  title: string;
  description: string;
  page: number;
  content: string;
  status: 'available' | 'in-development' | 'coming-soon';
}

interface Part {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  chapters: Chapter[];
}

interface GeneralStat {
  icon: string;
  label: string;
  value: number;
}

@Component({
  selector: 'app-chapters-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapters-page.component.html',
  styleUrl: './chapters-page.component.scss'
})
export class ChaptersPageComponent implements OnInit, OnDestroy {

  parts: Part[] = [
    {
      title: 'Fundamentos Botânicos',
      subtitle: 'Conhecimento científico sobre Cannabis sativa L.',
      description: 'Classificação botânica, anatomia e fisiologia da planta.',
      icon: 'icon-microscope',
      chapters: [
        {
          id: 'introducao-cannabis',
          title: 'Introdução à Cannabis',
          description: 'Classificação botânica, história evolutiva e aplicações medicinais.',
          page: 1,
          content: 'Taxonomia, fitoquímica, endocanabinoides, usos terapêuticos',
          status: 'available'
        },
        {
          id: 'anatomia-planta',
          title: 'Anatomia da Planta',
          description: 'Estrutura morfológica e fisiologia da Cannabis sativa L.',
          page: 15,
          content: 'Sistema radicular, caule, folhas, inflorescências, tricomas',
          status: 'available'
        },
        {
          id: 'ciclo-vida',
          title: 'Ciclo de Vida',
          description: 'Fases fenológicas e desenvolvimento vegetativo.',
          page: 28,
          content: 'Germinação, crescimento vegetativo, indução floral, maturação',
          status: 'in-development'
        }
      ]
    },
    {
      title: 'Preparação do Ambiente',
      subtitle: 'Análise técnica e preparação do sistema de cultivo',
      description: 'Avaliação de ambientes e preparação de substratos.',
      icon: 'icon-settings',
      chapters: [
        {
          id: 'escolha-local',
          title: 'Análise do Local de Cultivo',
          description: 'Avaliação técnica de ambientes indoor e outdoor.',
          page: 42,
          content: 'Fatores ambientais, controle climático, segurança, legalidade',
          status: 'available'
        },
        {
          id: 'preparacao-solo',
          title: 'Preparação do Substrato',
          description: 'Composição e preparação de substratos para cultivo.',
          page: 58,
          content: 'Tipos de solo, pH, CEC, drenagem, nutrientes, microrganismos',
          status: 'in-development'
        },
        {
          id: 'sementes-germinacao',
          title: 'Propagação e Germinação',
          description: 'Técnicas de propagação e estabelecimento de mudas.',
          page: 75,
          content: 'Seleção de sementes, métodos de germinação, clones, estacas',
          status: 'coming-soon'
        }
      ]
    },
    {
      title: 'Manejo Cultural',
      subtitle: 'Técnicas de cultivo e controle fitossanitário',
      description: 'Sistemas de irrigação, iluminação e controle de pragas.',
      icon: 'icon-leaf',
      chapters: [
        {
          id: 'irrigacao-nutricao',
          title: 'Irrigação e Nutrição',
          description: 'Sistemas de irrigação e programa nutricional.',
          page: 92,
          content: 'Frequência de regas, EC, pH, macro e micronutrientes, deficiências',
          status: 'coming-soon'
        },
        {
          id: 'iluminacao',
          title: 'Sistemas de Iluminação',
          description: 'Tecnologias de iluminação artificial para cultivo.',
          page: 115,
          content: 'LED, HPS, MH, espectro luminoso, PPFD, fotoperíodo',
          status: 'coming-soon'
        },
        {
          id: 'pragas-doencas',
          title: 'Controle Fitossanitário',
          description: 'Identificação e controle de pragas e patógenos.',
          page: 135,
          content: 'Pragas, fungos, bactérias, vírus, controle biológico, químico',
          status: 'coming-soon'
        },
        {
          id: 'tecnicas-treinamento',
          title: 'Técnicas de Manejo',
          description: 'Técnicas de condução e otimização da produção.',
          page: 158,
          content: 'LST, HST, topping, defoliation, SCROG, SOG',
          status: 'coming-soon'
        }
      ]
    }
  ];

  generalStats: GeneralStat[] = [
    {
      icon: 'icon-book',
      label: 'Total de Páginas',
      value: 400
    },
    {
      icon: 'icon-chapter',
      label: 'Capítulos Disponíveis',
      value: 21
    },
    {
      icon: 'icon-science',
      label: 'Referências Científicas',
      value: 150
    },
    {
      icon: 'icon-check',
      label: 'Conteúdo Validado',
      value: 100
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeScrollReveal();
  }

  ngOnDestroy(): void {
    // Cleanup se necessário
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkScrollReveal();
    this.animateStats();
  }

  // Métodos de livro digital
  getOverallProgress(): number {
    const totalChapters = this.parts.reduce((total, part) => total + part.chapters.length, 0);
    const availableChapters = this.parts.reduce((total, part) =>
      total + part.chapters.filter(c => c.status === 'available').length, 0);
    return Math.round((availableChapters / totalChapters) * 100);
  }

  getTotalPages(): number {
    return this.parts.reduce((total, part) => {
      const lastChapter = part.chapters[part.chapters.length - 1];
      return lastChapter ? Math.max(total, lastChapter.page + 20) : total;
    }, 0);
  }

  getTotalChapters(): number {
    return this.parts.reduce((total, part) => total + part.chapters.length, 0);
  }

  getAvailableChapters(): number {
    return this.parts.reduce((total, part) =>
      total + part.chapters.filter(c => c.status === 'available').length, 0);
  }

  openChapter(chapter: Chapter): void {
    if (chapter.status === 'available') {
      this.router.navigate(['/chapters', chapter.id]);
    }
  }

  startReading(): void {
    this.router.navigate(['/chapters/introducao-cannabis']);
  }

  downloadGuide(): void {
    console.log('Download do guia');
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'available': return 'icon-check';
      case 'in-development': return 'icon-edit';
      case 'coming-soon': return 'icon-clock';
      default: return 'icon-circle';
    }
  }

  getChapterButtonClass(status: string): string {
    switch (status) {
      case 'available': return 'btn-success';
      case 'in-development': return 'btn-warning';
      case 'coming-soon': return 'btn-disabled';
      default: return 'btn-secondary';
    }
  }

  getChapterButtonIcon(status: string): string {
    switch (status) {
      case 'available': return 'icon-book';
      case 'in-development': return 'icon-edit';
      case 'coming-soon': return 'icon-clock';
      default: return 'icon-arrow-right';
    }
  }

  getChapterButtonText(status: string): string {
    switch (status) {
      case 'available': return 'Ler Capítulo';
      case 'in-development': return 'Em Desenvolvimento';
      case 'coming-soon': return 'Em Breve';
      default: return 'Ler';
    }
  }

  // Métodos de navegação do livro
  goToChapter(chapterId: string): void {
    this.router.navigate(['/chapters', chapterId]);
  }

  goToNextChapter(): void {
    // Implementar navegação para próximo capítulo
    console.log('Próximo capítulo');
  }

  goToPreviousChapter(): void {
    // Implementar navegação para capítulo anterior
    console.log('Capítulo anterior');
  }

  private initializeScrollReveal(): void {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = 'translateY(30px)';
    });
  }

  private checkScrollReveal(): void {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        (element as HTMLElement).style.opacity = '1';
        (element as HTMLElement).style.transform = 'translateY(0)';
        (element as HTMLElement).style.transition = 'all 0.6s ease-out';
      }
    });
  }

  private animateStats(): void {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const current = parseInt(counter.textContent || '0');

      if (current < target) {
        const increment = Math.ceil(target / 50);
        const newValue = Math.min(current + increment, target);
        counter.textContent = newValue.toString();
      }
    });
  }
}
