# Design System - Guia Digital de Cultivo de Cannabis

## Paleta de Cores

### Cores Primárias
```scss
// Verde Cannabis (Principal)
$primary-green: #2E7D32;        // Verde escuro
$primary-green-light: #4CAF50;  // Verde médio
$primary-green-lighter: #81C784; // Verde claro
$primary-green-lightest: #C8E6C9; // Verde muito claro

// Verde Complementar
$accent-green: #1B5E20;         // Verde muito escuro
$accent-green-light: #388E3C;   // Verde escuro médio
```

### Cores Secundárias
```scss
// Tons de Terra (Terra, Solo)
$earth-brown: #8D6E63;          // Marrom terra
$earth-brown-light: #A1887F;    // Marrom claro
$earth-brown-lighter: #D7CCC8;  // Marrom muito claro

// Tons de Folha
$leaf-green: #689F38;           // Verde folha
$leaf-green-light: #8BC34A;     // Verde folha claro
$leaf-green-lighter: #AED581;   // Verde folha muito claro

// Tons de Cannabis (Roxo Rosado - Manchas Arroxeadas)
$cannabis-purple: #9C27B0;      // Roxo cannabis
$cannabis-purple-light: #BA68C8; // Roxo claro
$cannabis-purple-lighter: #E1BEE7; // Roxo muito claro
$cannabis-purple-pink: #E91E63;  // Roxo rosado
$cannabis-purple-pink-light: #F06292; // Roxo rosado claro
$cannabis-purple-pink-lighter: #F8BBD9; // Roxo rosado muito claro
```

### Cores Neutras
```scss
// Cinzas
$gray-900: #212121;             // Preto suave
$gray-800: #424242;             // Cinza escuro
$gray-700: #616161;             // Cinza médio escuro
$gray-600: #757575;             // Cinza médio
$gray-500: #9E9E9E;             // Cinza médio claro
$gray-400: #BDBDBD;             // Cinza claro
$gray-300: #E0E0E0;             // Cinza muito claro
$gray-200: #EEEEEE;             // Cinza quase branco
$gray-100: #F5F5F5;             // Cinza branco sujo
$white: #FFFFFF;                // Branco puro
```

### Cores de Status
```scss
// Sucesso (Crescimento, Progresso)
$success: #4CAF50;              // Verde sucesso
$success-light: #81C784;        // Verde sucesso claro
$success-dark: #388E3C;         // Verde sucesso escuro

// Aviso (Atenção, Cuidados)
$warning: #FF9800;              // Laranja aviso
$warning-light: #FFB74D;        // Laranja aviso claro
$warning-dark: #F57C00;         // Laranja aviso escuro

// Erro (Problemas, Doenças)
$error: #F44336;                // Vermelho erro
$error-light: #EF5350;          // Vermelho erro claro
$error-dark: #D32F2F;           // Vermelho erro escuro

// Informação (Dicas, Notas)
$info: #2196F3;                 // Azul informação
$info-light: #64B5F6;           // Azul informação claro
$info-dark: #1976D2;            // Azul informação escuro
```

## Tipografia

### Fontes
```scss
// Fonte Principal (Títulos e Texto)
$font-primary: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

// Fonte Secundária (Código, Monospace)
$font-mono: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;

// Fonte Display (Títulos Grandes)
$font-display: 'Poppins', 'Inter', sans-serif;
```

### Tamanhos de Fonte
```scss
// Títulos
$font-size-h1: 2.5rem;         // 40px
$font-size-h2: 2rem;           // 32px
$font-size-h3: 1.75rem;        // 28px
$font-size-h4: 1.5rem;         // 24px
$font-size-h5: 1.25rem;        // 20px
$font-size-h6: 1.125rem;       // 18px

// Texto
$font-size-large: 1.125rem;     // 18px
$font-size-base: 1rem;         // 16px
$font-size-small: 0.875rem;    // 14px
$font-size-xs: 0.75rem;        // 12px

// Line Heights
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;
```

### Pesos de Fonte
```scss
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;
```

## Espaçamento

### Sistema de Espaçamento (8px base)
```scss
$spacing-xs: 0.25rem;          // 4px
$spacing-sm: 0.5rem;           // 8px
$spacing-md: 1rem;             // 16px
$spacing-lg: 1.5rem;           // 24px
$spacing-xl: 2rem;             // 32px
$spacing-2xl: 3rem;            // 48px
$spacing-3xl: 4rem;            // 64px
$spacing-4xl: 6rem;            // 96px
```

## Bordas e Raios

### Raios de Borda
```scss
$border-radius-sm: 0.25rem;    // 4px
$border-radius-md: 0.5rem;     // 8px
$border-radius-lg: 1rem;       // 16px
$border-radius-xl: 1.5rem;     // 24px
$border-radius-full: 50%;      // Círculo
```

### Espessuras de Borda
```scss
$border-width-thin: 1px;
$border-width-medium: 2px;
$border-width-thick: 4px;
```

## Sombras

### Elevação
```scss
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
$shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

## Breakpoints

### Responsividade
```scss
$breakpoint-xs: 320px;         // Mobile pequeno
$breakpoint-sm: 640px;         // Mobile grande
$breakpoint-md: 768px;         // Tablet
$breakpoint-lg: 1024px;        // Desktop pequeno
$breakpoint-xl: 1280px;        // Desktop grande
$breakpoint-2xl: 1536px;       // Desktop extra grande
```

## Componentes Base

### Botões
```scss
// Botão Primário
.btn-primary {
  background-color: $primary-green;
  color: $white;
  border: none;
  border-radius: $border-radius-md;
  padding: $spacing-sm $spacing-lg;
  font-weight: $font-weight-medium;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $accent-green;
    transform: translateY(-1px);
    box-shadow: $shadow-md;
  }
}

// Botão Secundário
.btn-secondary {
  background-color: transparent;
  color: $primary-green;
  border: 2px solid $primary-green;
  border-radius: $border-radius-md;
  padding: $spacing-sm $spacing-lg;
  font-weight: $font-weight-medium;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $primary-green;
    color: $white;
  }
}
```

### Cards
```scss
.card {
  background-color: $white;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  padding: $spacing-lg;
  border: 1px solid $gray-200;
  
  &:hover {
    box-shadow: $shadow-lg;
    transform: translateY(-2px);
    transition: all 0.2s ease;
  }
}
```

## Variáveis SCSS Globais

```scss
// Cores
:root {
  --primary-green: #{$primary-green};
  --primary-green-light: #{$primary-green-light};
  --accent-green: #{$accent-green};
  --earth-brown: #{$earth-brown};
  --leaf-green: #{$leaf-green};
  --cannabis-purple: #{$cannabis-purple};
  --cannabis-purple-light: #{$cannabis-purple-light};
  --cannabis-purple-lighter: #{$cannabis-purple-lighter};
  --cannabis-purple-pink: #{$cannabis-purple-pink};
  --cannabis-purple-pink-light: #{$cannabis-purple-pink-light};
  --cannabis-purple-pink-lighter: #{$cannabis-purple-pink-lighter};
  
  // Neutras
  --gray-900: #{$gray-900};
  --gray-800: #{$gray-800};
  --gray-700: #{$gray-700};
  --gray-600: #{$gray-600};
  --gray-500: #{$gray-500};
  --gray-400: #{$gray-400};
  --gray-300: #{$gray-300};
  --gray-200: #{$gray-200};
  --gray-100: #{$gray-100};
  --white: #{$white};
  
  // Status
  --success: #{$success};
  --warning: #{$warning};
  --error: #{$error};
  --info: #{$info};
  
  // Espaçamento
  --spacing-xs: #{$spacing-xs};
  --spacing-sm: #{$spacing-sm};
  --spacing-md: #{$spacing-md};
  --spacing-lg: #{$spacing-lg};
  --spacing-xl: #{$spacing-xl};
  --spacing-2xl: #{$spacing-2xl};
  
  // Tipografia
  --font-primary: #{$font-primary};
  --font-mono: #{$font-mono};
  --font-display: #{$font-display};
  
  // Raios
  --border-radius-sm: #{$border-radius-sm};
  --border-radius-md: #{$border-radius-md};
  --border-radius-lg: #{$border-radius-lg};
  --border-radius-xl: #{$border-radius-xl};
}
```

## Tema Escuro (Futuro)

```scss
[data-theme="dark"] {
  --primary-green: #{$primary-green-light};
  --accent-green: #{$primary-green};
  --background: #{$gray-900};
  --surface: #{$gray-800};
  --text-primary: #{$white};
  --text-secondary: #{$gray-300};
  --border: #{$gray-700};
}
```
