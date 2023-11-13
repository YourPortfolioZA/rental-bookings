import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navbarOptions = [
    { name: 'Home' },
    { name: 'About Us' },
    { name: 'Services' },
    { name: 'Contact Us' },
  ];

  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  ngOnInit() {
    this.checkIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkIsMobile();
  }

  toggleMenu(): void {
    this.isMobile = !this.isMobile;
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMobile = false;
    this.isMenuOpen = false;
  }

  checkIsMobile(): void {
    this.isMobile = window.innerWidth <= 1023;
  }
}
