# Instruções Gerais para Prompts - Guia Digital de Cultivo de Cannabis

## Padrões do Projeto

### 1. Nomenclatura de Arquivos e Pastas
- **Arquivos**: kebab-case (ex: `content-service.ts`, `chapter-component.html`)
- **Pastas**: kebab-case (ex: `content-pages/`, `shared-components/`)
- **Componentes**: PascalCase (ex: `ChapterComponent`, `ContentService`)
- **Variáveis e funções**: camelCase (ex: `currentChapter`, `getChapterById`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_CONTENT_LENGTH`, `DEFAULT_LANGUAGE`)

### 2. Estrutura de Componentes
```typescript
// Sempre seguir esta estrutura:
@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNameComponent implements OnInit, OnDestroy {
  // 1. Propriedades públicas
  // 2. Propriedades privadas
  // 3. Constructor
  // 4. Lifecycle hooks
  // 5. Métodos públicos
  // 6. Métodos privados
}
```

### 3. Estrutura de Serviços
```typescript
@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {
  // 1. Propriedades privadas
  // 2. Constructor
  // 3. Métodos públicos
  // 4. Métodos privados
}
```

### 4. Estrutura de Interfaces
```typescript
export interface InterfaceName {
  // Propriedades obrigatórias primeiro
  id: string;
  name: string;
  
  // Propriedades opcionais depois
  description?: string;
  createdAt?: Date;
}
```

## Convenções de Código

### 1. TypeScript
- **Sempre usar TypeScript strict mode**
- **Sempre tipar variáveis, parâmetros e retornos**
- **Usar interfaces ao invés de any**
- **Preferir readonly quando possível**
- **Usar enums para valores constantes**

### 2. Angular
- **Sempre usar OnPush change detection**
- **Usar trackBy em *ngFor**
- **Implementar OnDestroy em componentes com subscriptions**
- **Usar async pipe quando possível**
- **Preferir reactive forms**

### 3. SCSS
- **Usar variáveis do design system**
- **Seguir metodologia BEM para classes**
- **Usar mixins para código repetitivo**
- **Organizar imports no topo do arquivo**
- **Usar nesting máximo de 3 níveis**

### 4. HTML
- **Usar semantic HTML**
- **Sempre incluir alt em imagens**
- **Usar aria-labels quando necessário**
- **Estruturar com landmarks (header, main, aside, footer)**

## Padrões de Arquitetura

### 1. Separação de Responsabilidades
- **Components**: Apenas lógica de apresentação
- **Services**: Lógica de negócio e comunicação com APIs
- **Models**: Definição de estruturas de dados
- **Pipes**: Transformação de dados para apresentação
- **Guards**: Lógica de proteção de rotas

### 2. Injeção de Dependência
- **Sempre usar constructor injection**
- **Preferir providedIn: 'root' para serviços**
- **Usar interfaces para abstração**

### 3. Gerenciamento de Estado
- **Usar BehaviorSubject para estado reativo**
- **Centralizar estado em serviços**
- **Usar async pipe para subscrições**

## Comandos Proibidos

### ❌ NÃO EXECUTAR SEM PERMISSÃO
```bash
# Comandos de build e deploy
ng build
ng build --prod
ng build --configuration=production
npm run build
npm run build:prod

# Comandos de servidor
ng serve
npm start
npm run dev
npm run serve

# Comandos de teste
ng test
npm test
npm run test
npm run test:ci

# Comandos de linting
ng lint
npm run lint
npm run lint:fix

# Comandos de instalação de dependências
npm install
npm install --save
npm install --save-dev
npm ci
yarn install

# Comandos de atualização
ng update
npm update
npm outdated
```

### ✅ COMANDOS PERMITIDOS
```bash
# Comandos de verificação
ng version
npm --version
node --version

# Comandos de listagem
ls
dir
pwd
cd

# Comandos de criação de arquivos/pastas
mkdir
touch
echo

# Comandos de leitura
cat
type
head
tail
```

## Diretrizes de Desenvolvimento

### 1. Antes de Criar Qualquer Arquivo
- **Verificar se já existe similar**
- **Consultar arquitetura.md para estrutura**
- **Seguir padrões de nomenclatura**
- **Incluir comentários explicativos**

### 2. Antes de Modificar Arquivos Existentes
- **Ler o arquivo completamente**
- **Entender a estrutura atual**
- **Manter consistência com o código existente**
- **Preservar funcionalidades existentes**

### 3. Ao Criar Componentes
- **Sempre criar arquivos .spec.ts**
- **Incluir documentação JSDoc**
- **Usar OnPush change detection**
- **Implementar interfaces apropriadas**

### 4. Ao Criar Serviços
- **Usar providedIn: 'root'**
- **Incluir tratamento de erro**
- **Usar observables para operações assíncronas**
- **Documentar métodos públicos**

## Padrões de Documentação

### 1. Comentários JSDoc
```typescript
/**
 * Serviço responsável pelo gerenciamento de conteúdo do guia
 * @description Fornece métodos para buscar, filtrar e gerenciar capítulos e seções
 * @author Guia Cannabis Team
 * @since 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  /**
   * Busca um capítulo pelo ID
   * @param id - ID único do capítulo
   * @returns Observable com os dados do capítulo
   * @throws Error se o capítulo não for encontrado
   */
  getChapter(id: string): Observable<Chapter> {
    // implementação
  }
}
```

### 2. Comentários de Código
```typescript
// Buscar capítulo do localStorage primeiro para performance
const cachedChapter = this.storageService.getItem(`chapter_${id}`);
if (cachedChapter) {
  return of(cachedChapter);
}

// Se não estiver em cache, buscar da API
return this.http.get<Chapter>(`/api/chapters/${id}`)
  .pipe(
    tap(chapter => this.storageService.setItem(`chapter_${id}`, chapter)),
    catchError(this.handleError)
  );
```

## Estrutura de Commits

### 1. Formato
```
tipo(escopo): descrição breve

Descrição mais detalhada se necessário

- Item 1
- Item 2
- Item 3
```

### 2. Tipos
- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, sem mudança de código
- **refactor**: Refatoração de código
- **test**: Adição ou correção de testes
- **chore**: Mudanças em build, dependências, etc.

### 3. Exemplos
```
feat(content): adicionar suporte a markdown

- Implementar parser de markdown
- Adicionar suporte a imagens
- Incluir syntax highlighting para código

fix(layout): corrigir responsividade do sidebar

- Ajustar breakpoints para mobile
- Corrigir overflow em telas pequenas

docs(api): atualizar documentação dos serviços

- Adicionar exemplos de uso
- Documentar parâmetros obrigatórios
```

## Padrões de Testes

### 1. Estrutura de Testes
```typescript
describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentName],
      imports: [/* imports necessários */],
      providers: [/* providers necessários */]
    });
    fixture = TestBed.createComponent(ComponentName);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('método específico', () => {
    it('deve fazer algo específico', () => {
      // arrange
      // act
      // assert
    });
  });
});
```

### 2. Nomenclatura de Testes
- **describe**: Nome do componente/serviço
- **it**: "deve [comportamento esperado]"
- **beforeEach**: Configuração comum
- **afterEach**: Limpeza se necessário

## Considerações de Performance

### 1. Lazy Loading
- **Sempre usar lazy loading para módulos**
- **Implementar lazy loading para imagens**
- **Usar OnPush change detection**

### 2. Otimizações
- **Usar trackBy em *ngFor**
- **Implementar virtual scrolling para listas grandes**
- **Usar async pipe para subscrições**
- **Evitar subscrições manuais quando possível**

### 3. Bundle Size
- **Importar apenas o necessário**
- **Usar tree-shaking**
- **Evitar importações desnecessárias**

## Padrões de Acessibilidade

### 1. HTML Semântico
- **Usar elementos semânticos apropriados**
- **Incluir landmarks (header, main, aside, footer)**
- **Usar headings hierárquicos (h1, h2, h3)**

### 2. ARIA
- **Incluir aria-labels quando necessário**
- **Usar aria-expanded para elementos expansíveis**
- **Implementar aria-live para conteúdo dinâmico**

### 3. Navegação
- **Suporte a navegação por teclado**
- **Indicadores visuais de foco**
- **Skip links para conteúdo principal**

## Considerações de Segurança

### 1. Sanitização
- **Sempre sanitizar HTML dinâmico**
- **Usar DomSanitizer para conteúdo não confiável**
- **Validar inputs do usuário**

### 2. XSS Prevention
- **Evitar innerHTML com conteúdo não confiável**
- **Usar textContent quando possível**
- **Implementar Content Security Policy**

## Lembrete Final

**SEMPRE CONSULTAR ESTE ARQUIVO ANTES DE FAZER QUALQUER ALTERAÇÃO NO PROJETO**

- Respeitar os padrões estabelecidos
- Manter consistência com o código existente
- Documentar adequadamente
- Testar antes de finalizar
- Não executar comandos de build/serve sem permissão
