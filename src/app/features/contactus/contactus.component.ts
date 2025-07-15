import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  imports: [ FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent  {

  sendEmail(e: Event) {
    e.preventDefault(); // form reload na ho

    emailjs.sendForm(
      'service_ij63i7a',     // 🔁 EmailJS se copy karo
      'template_x83un3l',    // 🔁 EmailJS se copy karo
      e.target as HTMLFormElement,
      'Wn-AXhwukSinpZ7Sf'      // 🔁 EmailJS account se
    ).then(() => {
      alert('✅ Message sent successfully!');
      (e.target as HTMLFormElement).reset(); // Form reset
    }).catch((error) => {
      console.error('❌ Email send failed:', error);
      alert('Something went wrong. Please try again.');
    });
  }
}
