import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importar componentes
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TeamPageComponent } from '../team-page/team-page.component';
import { ModernBookComponent } from '../../shared/modern-book/modern-book.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    TeamPageComponent,
    ModernBookComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  // Componente simplificado - sem dados de capítulos
}
