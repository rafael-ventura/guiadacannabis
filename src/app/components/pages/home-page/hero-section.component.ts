import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      title: 'Conteúdo Completo',
      description: '21 capítulos cobrindo desde o básico até técnicas avançadas',
      progress: 100
    },
    {
      icon: 'icon-globe',
      title: 'Multilíngue',
      description: 'Disponível em português, inglês e espanhol',
      progress: 85
    },
    {
      icon: 'icon-mobile',
      title: 'Responsivo',
      description: 'Otimizado para desktop, tablet e mobile',
      progress: 100
    },
    {
      icon: 'icon-science',
      title: 'Baseado em Ciência',
      description: 'Informações validadas por pesquisas científicas',
      progress: 95
    },
    {
      icon: 'icon-leaf',
      title: 'Sustentável',
      description: 'Foco em práticas ecológicas e responsáveis',
      progress: 90
    },
    {
      icon: 'icon-community',
      title: 'Comunidade',
      description: 'Conecte-se com outros cultivadores',
      progress: 75
    }
  ];

  private scrollRevealElements: Element[] = [];
  private animationFrameId: number | null = null;

  ngOnInit(): void {
    this.initializeScrollReveal();
    this.animateCounters();
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

  private animateCounters(): void {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000; // 2 segundos
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      // Iniciar animação quando o elemento estiver visível
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(counter);
    });
  }

  private startFloatingAnimations(): void {
    const animate = () => {
      this.animateFloatingElements();
      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  private animateFloatingElements(): void {
    const time = Date.now() * 0.001;

    // Animar folhas flutuantes
    for (let i = 1; i <= 10; i++) {
      const leaf = document.querySelector(`.leaf-${i}`);
      if (leaf) {
        const speed = 0.5 + (i * 0.1);
        const amplitude = 20 + (i * 5);
        const x = Math.sin(time * speed) * amplitude;
        const y = Math.cos(time * speed * 0.7) * amplitude;

        (leaf as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.5}deg)`;
      }
    }

    // Animar partículas
    for (let i = 1; i <= 5; i++) {
      const particle = document.querySelector(`.particle-${i}`);
      if (particle) {
        const speed = 0.3 + (i * 0.1);
        const amplitude = 30 + (i * 10);
        const x = Math.sin(time * speed) * amplitude;
        const y = Math.cos(time * speed * 0.8) * amplitude;

        (particle as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
        (particle as HTMLElement).style.opacity = (Math.sin(time * speed) + 1) / 2;
      }
    }
  }

  startReading(): void {
    // Scroll para a seção de capítulos
    const chaptersSection = document.querySelector('.book-structure');
    if (chaptersSection) {
      chaptersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  exploreChapters(): void {
    // Navegar para a página de capítulos
    console.log('Explorar capítulos');
    // Implementar navegação para capítulos
  }
}
