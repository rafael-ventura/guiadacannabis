import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importar componentes
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TeamPageComponent } from '../team-page/team-page.component';
import { ChaptersPageComponent } from '../chapters-page/chapters-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    TeamPageComponent,
    ChaptersPageComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
