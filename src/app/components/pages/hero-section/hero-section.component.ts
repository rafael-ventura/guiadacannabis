import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
  progress: number;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  features: Feature[] = [
    {
      icon: 'icon-book',
      title: 'Navegação Intuitiva',
      description: 'Navegue pelos capítulos como em um livro real',
      progress: 100
    },
    {
      icon: 'icon-search',
      title: 'Busca Avançada',
      description: 'Encontre qualquer informação rapidamente',
      progress: 95
    },
    {
      icon: 'icon-bookmark',
      title: 'Marcadores',
      description: 'Salve suas páginas favoritas e continue de onde parou',
      progress: 90
    },
    {
      icon: 'icon-mobile',
      title: 'Leitura Responsiva',
      description: 'Leia confortavelmente em qualquer dispositivo',
      progress: 100
    }
  ];

  private animationFrameId: number | null = null;
  private floatingElements: HTMLElement[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeScrollReveal();
    this.startFloatingAnimations();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkScrollReveal();
  }

  startReading(): void {
    this.router.navigate(['/chapters']);
  }

  exploreChapters(): void {
    this.router.navigate(['/chapters']);
  }

  private initializeScrollReveal(): void {
    // Inicializar elementos para animação de scroll
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

    // Animar contadores
    this.animateCounters();
  }

  private animateCounters(): void {
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

  private startFloatingAnimations(): void {
    this.floatingElements = Array.from(document.querySelectorAll('.leaf, .particle'));
    this.animateFloatingElements();
  }

  private animateFloatingElements(): void {
    this.floatingElements.forEach((element, index) => {
      const time = Date.now() * 0.001;
      const offset = index * 0.5;
      const y = Math.sin(time + offset) * 10;
      const rotation = Math.sin(time + offset) * 5;

      element.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
    });

    this.animationFrameId = requestAnimationFrame(() => this.animateFloatingElements());
  }
}
