import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-personal-loan',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './personal-loan.component.html',
  styleUrl: './personal-loan.component.css'
})
export class PersonalLoanComponent {

}
