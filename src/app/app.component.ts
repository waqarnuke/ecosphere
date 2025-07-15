import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms'; // ✅ import this


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,FormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'EcoSphereAI';
  constructor() {

  }

}
