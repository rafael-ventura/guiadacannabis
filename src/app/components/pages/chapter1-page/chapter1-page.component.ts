import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter1-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter1-page.component.html',
  styleUrl: './chapter1-page.component.scss'
})
export class Chapter1PageComponent implements OnInit {
  
  // Dados do capítulo
  chapterData = {
    id: 'introducao-cannabis',
    title: 'O que é Cannabis?',
    subtitle: 'Conhecendo a planta milenar',
    estimatedTime: '15 min',
    difficulty: 'Iniciante',
    progress: 0
  };

  // Seções do capítulo
  sections = [
    {
      id: 'introducao',
      title: 'Introdução à Cannabis',
      content: 'A cannabis é uma das plantas mais fascinantes e controversas da história humana. Conhecida há milênios por suas propriedades medicinais e industriais, ela continua sendo objeto de estudo e debate em todo o mundo.',
      type: 'text'
    },
    {
      id: 'definicao-botanica',
      title: 'Definição Botânica',
      content: 'A cannabis é uma planta angiosperma pertencente à família Cannabaceae, gênero Cannabis. Seu nome científico completo é Cannabis sativa L., sendo o "L." uma referência ao botânico sueco Carl Linnaeus.',
      type: 'text'
    },
    {
      id: 'historia',
      title: 'História Milenar',
      content: 'A cannabis tem uma história rica que remonta a mais de 8.000 anos. Primeiros vestígios arqueológicos foram encontrados na China, e desde então a planta se espalhou pelo mundo, sendo usada para medicina, têxteis, papel e muito mais.',
      type: 'text'
    },
    {
      id: 'tipos-variedades',
      title: 'Tipos e Variedades',
      content: 'Existem três tipos principais de cannabis: Sativa, Indica e Ruderalis. Cada um tem características únicas e efeitos distintos, sendo amplamente utilizados em programas de melhoramento genético para criar híbridos modernos.',
      type: 'text'
    }
  ];

  // Dicas do capítulo
  tips = [
    {
      id: 'tip-1',
      content: 'A cannabis é uma das plantas mais antigas cultivadas pelo ser humano, com evidências de uso que remontam a mais de 8.000 anos.',
      icon: '💡'
    },
    {
      id: 'tip-2',
      content: 'O nome científico "Cannabis sativa L." foi dado pelo botânico sueco Carl Linnaeus em 1753.',
      icon: '💡'
    },
    {
      id: 'tip-3',
      content: 'A cannabis é uma planta dioica, ou seja, existem plantas macho e fêmea separadas.',
      icon: '💡'
    }
  ];

  // Avisos importantes
  warnings = [
    {
      id: 'warning-1',
      content: 'O cultivo de cannabis é regulamentado por lei em muitos países. Sempre verifique a legislação local antes de começar.',
      type: 'warning',
      icon: '⚠️'
    },
    {
      id: 'warning-2',
      content: 'O uso de cannabis pode ter efeitos colaterais. Consulte sempre um profissional de saúde qualificado.',
      type: 'danger',
      icon: '🚨'
    }
  ];

  // Timeline da cannabis
  timelineItems = [
    { year: '8000 a.C.', event: 'Primeiros vestígios arqueológicos na China' },
    { year: '2700 a.C.', event: 'Primeira menção escrita no livro chinês "Shen Nung"' },
    { year: '1500 a.C.', event: 'Uso medicinal documentado no Egito' },
    { year: '1000 a.C.', event: 'Cannabis na medicina ayurvédica indiana' },
    { year: '1850-1937', event: 'Cannabis amplamente usada na medicina ocidental' },
    { year: '1937', event: 'Lei de Imposto sobre a Maconha (EUA)' },
    { year: '1996', event: 'Califórnia legaliza uso medicinal' },
    { year: '2012', event: 'Colorado e Washington legalizam uso recreativo' },
    { year: '2018', event: 'Canadá legaliza uso recreativo' }
  ];

  // Tipos de cannabis para comparação
  cannabisTypes = [
    {
      name: 'Cannabis Sativa',
      icon: '🌱',
      height: '2-6 metros',
      leaves: 'Finas e alongadas',
      effects: 'Energizante, criativo, social',
      usage: 'Diurno, atividades produtivas'
    },
    {
      name: 'Cannabis Indica',
      icon: '🍃',
      height: '1-3 metros',
      leaves: 'Largas e arredondadas',
      effects: 'Relaxante, sedativo, analgésico',
      usage: 'Noturno, relaxamento'
    },
    {
      name: 'Cannabis Ruderalis',
      icon: '🌿',
      height: '30cm-1 metro',
      leaves: 'Pequenas e simples',
      effects: 'Baixo THC, autoflorescente',
      usage: 'Principalmente para híbridos'
    }
  ];

  // Conteúdo em markdown
  markdownContent = `
# Cannabis: A Planta Milenar

A **cannabis** é uma das plantas mais fascinantes e controversas da história humana. Conhecida há milênios por suas propriedades medicinais e industriais, ela continua sendo objeto de estudo e debate em todo o mundo.

## Características Principais

- **Altura**: Pode variar de 30cm a 6 metros
- **Ciclo de vida**: Anual (completa em 1 ano)
- **Reprodução**: Dioica (plantas macho e fêmea separadas)
- **Folhas**: Palmadas, com 5-7 folíolos
- **Flores**: Pequenas, agrupadas em inflorescências

## História da Cannabis

### Primeiros Registros
- **8000 a.C.**: Primeiros vestígios arqueológicos na China
- **2700 a.C.**: Primeira menção escrita no livro chinês "Shen Nung"
- **1500 a.C.**: Uso medicinal documentado no Egito
- **1000 a.C.**: Cannabis na medicina ayurvédica indiana

### Era Moderna
- **1850-1937**: Cannabis amplamente usada na medicina ocidental
- **1937**: Lei de Imposto sobre a Maconha (EUA)
- **1996**: Califórnia legaliza uso medicinal
- **2012**: Colorado e Washington legalizam uso recreativo

## Tipos de Cannabis

### Cannabis Sativa
- **Altura**: 2-6 metros
- **Folhas**: Finas e alongadas
- **Efeitos**: Energizante, criativo, social
- **Uso**: Diurno, atividades produtivas

### Cannabis Indica
- **Altura**: 1-3 metros
- **Folhas**: Largas e arredondadas
- **Efeitos**: Relaxante, sedativo, analgésico
- **Uso**: Noturno, relaxamento

### Cannabis Ruderalis
- **Altura**: 30cm-1 metro
- **Característica**: Autoflorescente
- **Uso**: Principalmente para híbridos
- **Origem**: Rússia e Ásia Central
  `;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadChapterProgress();
  }

  loadChapterProgress(): void {
    // Carregar progresso salvo do localStorage
    const savedProgress = localStorage.getItem(`chapter-${this.chapterData.id}-progress`);
    if (savedProgress) {
      this.chapterData.progress = parseInt(savedProgress);
    }
  }

  saveProgress(progress: number): void {
    this.chapterData.progress = progress;
    localStorage.setItem(`chapter-${this.chapterData.id}-progress`, progress.toString());
  }

  goToNextChapter(): void {
    this.router.navigate(['/chapters']);
  }

  goToPreviousChapter(): void {
    this.router.navigate(['/chapters']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  // Animações
  animateElement(element: HTMLElement): void {
    element.classList.add('animate-in');
    setTimeout(() => {
      element.classList.remove('animate-in');
    }, 1000);
  }

  // Função auxiliar para eventos
  onElementClick(event: Event): void {
    const element = event.target as HTMLElement;
    this.animateElement(element);
  }

  // Scroll suave para seções
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
