# Requisitos da Aplicação - Guia Digital de Cultivo de Cannabis

## Visão Geral
Aplicação web para documentação/guia/livro digital sobre cultivo de cannabis, desenvolvida em Angular.

## Funcionalidades Principais

### 1. Multilíngue
- **Idiomas suportados**: Português (BR), Inglês, Espanhol
- **Tecnologia**: Angular i18n para internacionalização
- **Implementação**: Arquivos de tradução JSON para cada idioma

### 2. Suporte a Conteúdo Rico
- **Markdown**: Renderização completa de conteúdo markdown
- **Imagens**: Suporte a upload e exibição de imagens
- **GIFs**: Suporte a animações GIF
- **Figurinhas**: Suporte a stickers/emojis
- **Vídeos**: Embed de vídeos (YouTube, Vimeo, etc.)
- **Alinhamento**: Sistema flexível de alinhamento de componentes

### 3. Estrutura de Conteúdo
- **Capítulos**: Organização em capítulos temáticos
- **Seções**: Subdivisões dentro dos capítulos
- **Navegação**: Menu lateral com índice do livro
- **Busca**: Sistema de busca no conteúdo

### 4. Interface do Usuário
- **Design responsivo**: Adaptável a desktop, tablet e mobile
- **Tema**: Design moderno e limpo
- **Navegação**: Fácil navegação entre seções
- **Leitura**: Interface otimizada para leitura

## Tecnologias

### Frontend
- **Framework**: Angular 19
- **Estilização**: SCSS
- **Markdown**: ngx-markdown ou similar
- **Internacionalização**: Angular i18n
- **Ícones**: Angular Material Icons ou similar
- **Componentes**: Angular Material ou similar

### Bibliotecas Adicionais
- **Markdown**: ngx-markdown
- **Internacionalização**: @angular/localize
- **Ícones**: @angular/material
- **Utilitários**: lodash-es (se necessário)

## Estrutura de Arquivos

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/              # Páginas principais
│   ├── services/           # Serviços
│   ├── models/             # Interfaces e tipos
│   ├── pipes/              # Pipes customizados
│   └── guards/             # Guards de rota
├── assets/
│   ├── i18n/              # Arquivos de tradução
│   ├── images/            # Imagens do projeto
│   └── content/           # Conteúdo markdown
└── styles/                # Estilos globais
```

## Funcionalidades Técnicas

### 1. Roteamento
- Rotas para cada capítulo
- Rotas para seções específicas
- Rota de busca
- Rota de configurações

### 2. Estado da Aplicação
- Serviço para gerenciar idioma atual
- Serviço para gerenciar progresso de leitura
- Serviço para gerenciar favoritos

### 3. Performance
- Lazy loading de módulos
- Lazy loading de imagens
- Cache de conteúdo
- Otimização de bundle

## Requisitos Não Funcionais

### 1. Performance
- Carregamento inicial < 3 segundos
- Navegação entre páginas < 1 segundo
- Suporte a conteúdo pesado (vídeos, imagens)

### 2. Acessibilidade
- Suporte a leitores de tela
- Navegação por teclado
- Contraste adequado
- Texto redimensionável

### 3. Responsividade
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## Considerações de Desenvolvimento

### 1. Padrões
- TypeScript strict mode
- ESLint + Prettier
- Convenções de nomenclatura consistentes
- Componentes reutilizáveis

### 2. Testes
- Testes unitários para componentes
- Testes de integração para serviços
- Testes E2E para fluxos principais

### 3. Deploy
- Build otimizado para produção
- **PWA implementado** com service worker e manifest
- Configuração para diferentes ambientes
- Suporte completo a mobile com instalação como app
