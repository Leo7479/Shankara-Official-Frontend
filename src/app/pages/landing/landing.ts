import { Component } from '@angular/core';
import { Header } from '../../components/header/header.component';
import { Footer } from '../../components/footer/footer.component';
import { HeroSection } from '../../components/hero-section/hero-section.component';
import { AboutSection } from '../../components/about-section/about-section.component';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, HeroSection, AboutSection],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
