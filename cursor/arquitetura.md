# Arquitetura do Projeto - Guia Digital de Cultivo de Cannabis

## Visão Geral da Arquitetura

### Tecnologia Principal
- **Framework**: Angular 19
- **Linguagem**: TypeScript
- **Estilização**: SCSS
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## Estrutura de Pastas

```
guia-cannabis/
├── src/
│   ├── app/
│   │   ├── components/           # Componentes reutilizáveis
│   │   │   ├── shared/          # Componentes compartilhados
│   │   │   ├── layout/          # Componentes de layout
│   │   │   └── content/         # Componentes de conteúdo
│   │   ├── pages/               # Páginas principais
│   │   │   ├── home/            # Página inicial
│   │   │   ├── chapter/         # Página de capítulo
│   │   │   ├── search/          # Página de busca
│   │   │   └── settings/        # Página de configurações
│   │   ├── services/            # Serviços Angular
│   │   │   ├── content.service.ts
│   │   │   ├── language.service.ts
│   │   │   ├── search.service.ts
│   │   │   └── storage.service.ts
│   │   ├── models/              # Interfaces e tipos
│   │   │   ├── chapter.interface.ts
│   │   │   ├── content.interface.ts
│   │   │   └── user.interface.ts
│   │   ├── pipes/               # Pipes customizados
│   │   │   ├── markdown.pipe.ts
│   │   │   ├── safe-html.pipe.ts
│   │   │   └── translate.pipe.ts
│   │   ├── guards/              # Guards de rota
│   │   │   └── content.guard.ts
│   │   ├── directives/          # Diretivas customizadas
│   │   │   └── lazy-load.directive.ts
│   │   ├── app.component.ts     # Componente raiz
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts        # Configuração da aplicação
│   │   └── app.routes.ts        # Rotas da aplicação
│   ├── assets/
│   │   ├── i18n/               # Arquivos de tradução
│   │   │   ├── pt-BR.json
│   │   │   ├── en-US.json
│   │   │   └── es-ES.json
│   │   ├── images/             # Imagens do projeto
│   │   │   ├── icons/
│   │   │   ├── illustrations/
│   │   │   └── photos/
│   │   ├── content/            # Conteúdo markdown
│   │   │   ├── chapters/
│   │   │   └── sections/
│   │   └── fonts/              # Fontes customizadas
│   ├── styles/                 # Estilos globais
│   │   ├── _variables.scss     # Variáveis SCSS
│   │   ├── _mixins.scss        # Mixins SCSS
│   │   ├── _base.scss          # Estilos base
│   │   └── _components.scss    # Estilos de componentes
│   ├── environments/           # Configurações de ambiente
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── main.ts                 # Ponto de entrada
│   └── index.html              # HTML principal
├── cursor/                     # Documentação do projeto
│   ├── requisitos.md
│   ├── design-system.md
│   ├── arquitetura.md
│   └── instrucoes-prompt.md
├── angular.json                # Configuração do Angular
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação do projeto
```

## Módulos da Aplicação

### 1. AppModule (Raiz)
- Configuração principal da aplicação
- Importação de módulos essenciais
- Configuração de rotas principais

### 2. SharedModule
- Componentes reutilizáveis
- Pipes compartilhados
- Diretivas comuns
- Serviços utilitários

### 3. ContentModule
- Componentes de conteúdo
- Pipes de markdown
- Serviços de conteúdo
- Guards de conteúdo

### 4. LayoutModule
- Componentes de layout
- Header, Footer, Sidebar
- Navegação principal
- Breadcrumbs

## Serviços Principais

### 1. ContentService
```typescript
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // Gerenciamento de conteúdo
  getChapter(id: string): Observable<Chapter>
  getSection(chapterId: string, sectionId: string): Observable<Section>
  searchContent(query: string): Observable<SearchResult[]>
  getTableOfContents(): Observable<Chapter[]>
}
```

### 2. LanguageService
```typescript
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Gerenciamento de idiomas
  currentLanguage$: Observable<string>
  setLanguage(lang: string): void
  getTranslation(key: string): string
  loadTranslations(): Observable<void>
}
```

### 3. SearchService
```typescript
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Funcionalidades de busca
  search(query: string): Observable<SearchResult[]>
  getSearchSuggestions(query: string): Observable<string[]>
  indexContent(): Observable<void>
}
```

### 4. StorageService
```typescript
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Gerenciamento de armazenamento local
  setItem(key: string, value: any): void
  getItem(key: string): any
  removeItem(key: string): void
  clear(): void
}
```

## Interfaces e Modelos

### 1. Chapter Interface
```typescript
export interface Chapter {
  id: string;
  title: string;
  description: string;
  order: number;
  sections: Section[];
  imageUrl?: string;
  estimatedReadTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}
```

### 2. Section Interface
```typescript
export interface Section {
  id: string;
  chapterId: string;
  title: string;
  content: string; // Markdown content
  order: number;
  type: 'text' | 'image' | 'video' | 'interactive';
  mediaUrl?: string;
  mediaType?: 'image' | 'gif' | 'video';
  alignment?: 'left' | 'center' | 'right';
}
```

### 3. Search Result Interface
```typescript
export interface SearchResult {
  id: string;
  title: string;
  content: string;
  type: 'chapter' | 'section';
  chapterId?: string;
  sectionId?: string;
  relevanceScore: number;
  highlightedContent: string;
}
```

## Configuração de Rotas

### 1. Rotas Principais
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chapter/:id', component: ChapterComponent },
  { path: 'section/:chapterId/:sectionId', component: SectionComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/home' }
];
```

### 2. Lazy Loading
```typescript
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

## Configuração de Build

### 1. Angular.json
```json
{
  "projects": {
    "guia-cannabis": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/guia-cannabis",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/manifest.json"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}
```

## Configuração de Internacionalização

### 1. Angular.json (i18n)
```json
{
  "projects": {
    "guia-cannabis": {
      "i18n": {
        "sourceLocale": "pt-BR",
        "locales": {
          "en-US": "src/locale/messages.en.xlf",
          "es-ES": "src/locale/messages.es.xlf"
        }
      }
    }
  }
}
```

### 2. Configuração de Locale
```typescript
// app.config.ts
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localePt);
registerLocaleData(localeEn);
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
```

## Estratégias de Performance

### 1. Lazy Loading
- Módulos carregados sob demanda
- Componentes carregados dinamicamente
- Imagens com lazy loading

### 2. OnPush Change Detection
```typescript
@Component({
  selector: 'app-example',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {}
```

### 3. TrackBy Functions
```typescript
trackByFn(index: number, item: any): any {
  return item.id;
}
```

### 4. Virtual Scrolling
```typescript
<cdk-virtual-scroll-viewport itemSize="50" class="viewport">
  <div *cdkVirtualFor="let item of items">{{item}}</div>
</cdk-virtual-scroll-viewport>
```

## Configuração de Desenvolvimento

### 1. ESLint + Prettier
```json
// .eslintrc.json
{
  "extends": [
    "@angular-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@angular-eslint/component-selector": "error",
    "@angular-eslint/directive-selector": "error"
  }
}
```

### 2. Prettier
```json
// .prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true
}
```

### 3. Husky (Git Hooks)
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

## Estrutura de Dados

### 1. Conteúdo Markdown
```
assets/content/chapters/
├── 01-introducao/
│   ├── index.md
│   ├── 01-o-que-e-cannabis.md
│   ├── 02-historia.md
│   └── images/
├── 02-plantio/
│   ├── index.md
│   ├── 01-preparacao-solo.md
│   └── images/
└── 03-cultivo/
    ├── index.md
    └── images/
```

### 2. Metadados
```json
// assets/content/metadata.json
{
  "chapters": [
    {
      "id": "introducao",
      "title": "Introdução",
      "order": 1,
      "sections": [
        {
          "id": "o-que-e-cannabis",
          "title": "O que é Cannabis",
          "order": 1,
          "file": "01-o-que-e-cannabis.md"
        }
      ]
    }
  ]
}
```

## Considerações de Segurança

### 1. Sanitização de HTML
```typescript
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

sanitizeHtml(html: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(html);
}
```

### 2. Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';">
```

## Monitoramento e Analytics

### 1. Error Handling
```typescript
@Injectable()
export class ErrorHandlerService {
  handleError(error: any): void {
    console.error('Error:', error);
    // Enviar para serviço de monitoramento
  }
}
```

### 2. Performance Monitoring
```typescript
// app.config.ts
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
```
