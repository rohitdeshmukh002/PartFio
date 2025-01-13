import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('dynamicTextAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('1.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  menuOpen = false; // Toggle for the mobile menu
  dropdownOpen: string | null = null; // Tracks which dropdown is open

  dynamicText = 'no code!';

  constructor() {
    this.swapText();
  }

  swapText() {
    setInterval(() => {
      this.dynamicText = this.dynamicText === 'no code!' ? 'launcher!' : 'no code!';
    }, 3000); // Swaps every 3 seconds
  }

  // Toggle menu visibility
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Toggle dropdown visibility based on the clicked menu
  toggleDropdown(menu: string) {
    if (this.dropdownOpen === menu) {
      this.dropdownOpen = null; // Close if the same menu is clicked
    } else {
      this.dropdownOpen = menu; // Open the clicked menu
    }
  }
  
}
