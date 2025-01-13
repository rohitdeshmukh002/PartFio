import { Component } from '@angular/core';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.css']
})
export class FounderComponent {

  activeIndex: number = 0; // Index of the active testimonial
  currentPageIndex: number = 0; // Index for the carousel pagination

  testimonials = [
    {
      company: 'Inspired Wellbeing Co.',
      quote: 'Integrating other services like Google Calendar and Asana was so simple from our mobile App.',
      ownerLabel: 'Owner',
      owner: 'Carmen Bliss',
      profileImage: 'https://www.platfio.com/wp-content/uploads/2023/05/Carmen-Bliss-1.webp',
    },
    {
      company: 'Tech Solutions Inc.',
      quote: 'The app streamlined our workflows and boosted our productivity significantly!',
      ownerLabel: 'CEO',
      owner: 'Alex Morgan',
      profileImage: 'https://www.platfio.com/wp-content/uploads/2023/05/Ross-Gerring-1.webp',
    },
    {
      company: 'NextGen Analytics',
      quote: 'The integration of analytics tools with our app helped us make better business decisions.',
      ownerLabel: 'CTO',
      owner: 'Emma Taylor',
      profileImage: 'https://www.platfio.com/wp-content/uploads/2023/05/Nikki-Everett-1.webp',
    },
  ];

  images = [
    { src: 'https://www.platfio.com/wp-content/uploads/2023/07/template-2-1.webp', alt: 'SM Movement App Screenshot' },
    { src: 'https://www.platfio.com/wp-content/uploads/2023/05/template-7.webp', alt: 'Royal Boxing App Screenshot' },
    { src: 'https://www.platfio.com/wp-content/uploads/2023/05/vita.webp', alt: 'Dwyer\'s Boxing App Screenshot' },
    { src: 'https://www.platfio.com/wp-content/uploads/2023/05/vita.webp', alt: 'Fourth App Screenshot' },
    { src: 'https://www.platfio.com/wp-content/uploads/2023/05/template-2.webp', alt: 'Fifth App Screenshot' },
    { src: 'https://www.platfio.com/wp-content/uploads/2023/07/template-3-1.webp', alt: 'Sixth App Screenshot' },
  ];

  itemsPerPage = 3;

  // Calculate total pages for the image carousel
  get totalPages() {
    return Array(Math.ceil(this.images.length / this.itemsPerPage)).fill(null);
  }

  // Get current set of images for the active carousel page
  get currentImages() {
    const start = this.currentPageIndex * this.itemsPerPage;
    return this.images.slice(start, start + this.itemsPerPage);
  }

  // Set active testimonial
  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  // Set active carousel page
  setImagePage(index: number) {
    this.currentPageIndex = index;
  }
}
