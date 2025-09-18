import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  name: string;
  icon: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  showDropdown = false;

  currentLanguage: Language = {
    code: 'pt-BR',
    name: 'Português',
    icon: 'icon-flag-br',
    flag: '🇧🇷'
  };

  availableLanguages: Language[] = [
    {
      code: 'pt-BR',
      name: 'Português',
      icon: 'icon-flag-br',
      flag: '🇧🇷'
    },
    {
      code: 'en-US',
      name: 'English',
      icon: 'icon-flag-us',
      flag: '🇺🇸'
    },
    {
      code: 'es-ES',
      name: 'Español',
      icon: 'icon-flag-es',
      flag: '🇪🇸'
    }
  ];

  ngOnInit(): void {
    // Carregar idioma salvo do localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const language = this.availableLanguages.find(lang => lang.code === savedLanguage);
      if (language) {
        this.currentLanguage = language;
      }
    }
  }

  ngOnDestroy(): void {
    // Cleanup se necessário
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      this.showDropdown = false;
    }
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectLanguage(language: Language): void {
    this.currentLanguage = language;
    this.showDropdown = false;

    // Salvar idioma selecionado
    localStorage.setItem('selectedLanguage', language.code);

    // Emitir evento de mudança de idioma (em produção, usar um serviço)
    console.log('Idioma alterado para:', language.name);

    // Aqui você implementaria a lógica de mudança de idioma
    // Por exemplo, carregar traduções, atualizar conteúdo, etc.
  }
}
