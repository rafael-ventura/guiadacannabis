import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  avatar?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface TeamStat {
  icon: string;
  label: string;
  value: number;
}

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent implements OnInit, OnDestroy {
  teamMembers: TeamMember[] = [
    {
      name: 'Dev Cultivador',
      role: 'Full Stack + Cultivo',
      description: 'Desenvolve código de dia, cultiva de noite. Especialista em JavaScript e genética canábica.',
      skills: ['JavaScript', 'Cultivo Indoor', 'Genética', 'Open Source'],
      github: 'https://github.com',
      linkedin: '#'
    },
    {
      name: 'Dev Antiproibicionista',
      role: 'Frontend + Ativismo',
      description: 'Acredita que informação é poder. Desenvolve interfaces e luta pela legalização.',
      skills: ['React', 'Ativismo', 'UI/UX', 'Comunidade'],
      github: 'https://github.com',
      twitter: '#'
    },
    {
      name: 'Dev Guerrilheiro',
      role: 'Backend + Cultivo',
      description: 'Código limpo, plantas limpas. Especialista em APIs e sistemas de cultivo automatizados.',
      skills: ['Node.js', 'Automação', 'IoT', 'Sustentabilidade'],
      github: 'https://github.com',
      linkedin: '#'
    }
  ];

  teamStats: TeamStat[] = [
    {
      icon: 'icon-users',
      label: 'Devs na Guerrilha',
      value: 3
    },
    {
      icon: 'icon-github',
      label: 'Repositórios Abertos',
      value: 1
    },
    {
      icon: 'icon-heart',
      label: 'Amor pelo Conhecimento',
      value: 100
    },
    {
      icon: 'icon-globe',
      label: 'Acesso Universal',
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

  joinCommunity(): void {
    // Implementar navegação para comunidade
    console.log('Juntar-se à comunidade');
  }

  contactUs(): void {
    // Implementar navegação para contato
    console.log('Entrar em contato');
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
