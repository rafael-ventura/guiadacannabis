import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.themeService.isDarkMode$.subscribe(isDark => {
        this.isDarkMode = isDark;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  startReading(): void {
    this.router.navigate(['/chapters']);
  }

  scrollToContent(): void {
    const contentElement = document.querySelector('.main-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
