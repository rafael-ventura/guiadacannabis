import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'chapter' | 'section' | 'topic';
  url: string;
}

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchQuery = '';
  showResults = false;
  searchResults: SearchResult[] = [];

  private searchTimeout: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicialização se necessário
  }

  ngOnDestroy(): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  }

  onSearch(): void {
    if (this.searchQuery.length < 3) {
      this.searchResults = [];
      this.showResults = false;
      return;
    }

    // Debounce da busca
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.performSearch();
    }, 300);
  }

  onFocus(): void {
    if (this.searchResults.length > 0) {
      this.showResults = true;
    }
  }

  onBlur(): void {
    // Delay para permitir cliques nos resultados
    setTimeout(() => {
      this.showResults = false;
    }, 200);
  }

  selectResult(result: SearchResult): void {
    this.router.navigate([result.url]);
    this.showResults = false;
    this.searchQuery = '';
  }

  private performSearch(): void {
    // Simulação de busca - em produção, isso viria de um serviço
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'Introdução à Cannabis',
        description: 'Visão geral sobre a planta, história e usos',
        type: 'chapter',
        url: '/chapters/1'
      },
      {
        id: '2',
        title: 'Preparação do Solo',
        description: 'Tipos de solo, pH, nutrientes e drenagem',
        type: 'chapter',
        url: '/chapters/5'
      },
      {
        id: '3',
        title: 'Técnicas de Treinamento',
        description: 'LST, HST, topping, defoliation',
        type: 'chapter',
        url: '/chapters/10'
      }
    ];

    // Filtrar resultados baseado na query
    this.searchResults = mockResults.filter(result =>
      result.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.showResults = true;
  }
}
