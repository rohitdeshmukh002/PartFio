import { Component } from '@angular/core';

@Component({
  selector: 'app-frequent',
  templateUrl: './frequent.component.html',
  styleUrls: ['./frequent.component.css']
})
export class FrequentComponent {
  faqs = [
    { question: 'How is My App Maintained and Updated Once it is Launched?', isOpen: false },
    { question: 'Should I Choose Platfio or a Traditional App Developer?', isOpen: false },
    { question: 'Is Platfio App Development a No code / Low code App Development Platform?', isOpen: false },
    { question: 'Will My App Have a Cookie-cutter User Interface (UI)?', isOpen: false },
    { question: 'Will My App be Capable of Implementing Useful and Powerful Functionality?', isOpen: false },
    { question: 'How Long Does it Take to Get My App to Customers?', isOpen: false },
    { question: 'How Does Platfio Provide Support Once My App is Completed?', isOpen: false },
    { question: 'Do I Need an Apple or Google Developer Account?', isOpen: false },
  ];

  // Toggle FAQ open/close
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
    // document.body.style.color = "#8c34ea";
  }



  // Form fields
  form = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    details: ''
  };

  // Handle form submission
  submitForm() {
    console.log('Form Submitted:', this.form);
    alert('Your enquiry has been submitted!');
  }
}

