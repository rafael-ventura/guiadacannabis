import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: string;
  status: 'online' | 'offline' | 'busy';
  experience: number;
  projects: number;
  skills: string[];
}

interface TeamStats {
  totalMembers: number;
  totalHours: number;
  researchPapers: number;
  countries: number;
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent implements OnInit, OnDestroy {
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Maria Silva',
      role: 'Botânica e Pesquisa',
      description: 'Especialista em fisiologia vegetal com 15 anos de experiência em cannabis medicinal.',
      icon: 'icon-science',
      status: 'online',
      experience: 15,
      projects: 23,
      skills: ['Botânica', 'Pesquisa', 'Cannabis Medicinal', 'Fisiologia Vegetal']
    },
    {
      name: 'João Santos',
      role: 'Cultivador Experiente',
      description: 'Cultivador profissional há 12 anos, especialista em técnicas avançadas de cultivo.',
      icon: 'icon-leaf',
      status: 'busy',
      experience: 12,
      projects: 45,
      skills: ['Cultivo Indoor', 'Hidroponia', 'Técnicas Avançadas', 'Sustentabilidade']
    },
    {
      name: 'Ana Costa',
      role: 'Desenvolvedora Frontend',
      description: 'Desenvolvedora apaixonada por criar experiências digitais incríveis e acessíveis.',
      icon: 'icon-code',
      status: 'online',
      experience: 8,
      projects: 67,
      skills: ['Angular', 'TypeScript', 'UI/UX', 'Acessibilidade']
    },
    {
      name: 'Carlos Oliveira',
      role: 'Designer e Ilustrador',
      description: 'Criativo especializado em design de interfaces e ilustrações científicas.',
      icon: 'icon-palette',
      status: 'offline',
      experience: 10,
      projects: 89,
      skills: ['Design', 'Ilustração', 'UI/UX', 'Branding']
    },
    {
      name: 'Dr. Pedro Lima',
      role: 'Químico e Analista',
      description: 'Especialista em análise de cannabinoides e controle de qualidade.',
      icon: 'icon-flask',
      status: 'online',
      experience: 18,
      projects: 34,
      skills: ['Química', 'Análise', 'Cannabinoides', 'Controle de Qualidade']
    },
    {
      name: 'Lucas Ferreira',
      role: 'Engenheiro de Software',
      description: 'Engenheiro focado em arquitetura de software e performance.',
      icon: 'icon-gear',
      status: 'busy',
      experience: 6,
      projects: 56,
      skills: ['Arquitetura', 'Performance', 'DevOps', 'Backend']
    }
  ];

  teamStats: TeamStats = {
    totalMembers: 6,
    totalHours: 2500,
    researchPapers: 150,
    countries: 4
  };

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

  joinCommunity(): void {
    console.log('Juntar-se à comunidade');
    // Implementar navegação para comunidade
  }

  contactUs(): void {
    console.log('Entrar em contato');
    // Implementar navegação para contato
  }
}
