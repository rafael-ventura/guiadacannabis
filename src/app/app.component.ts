import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Importar componentes compartilhados
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Importar serviços
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Manual Digital de Cultivo de Cannabis';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Inicializar o tema baseado na preferência do usuário
    this.themeService.getCurrentTheme();
  }
}
