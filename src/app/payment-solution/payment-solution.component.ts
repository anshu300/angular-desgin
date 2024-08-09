import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-payment-solution',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './payment-solution.component.html',
  styleUrl: './payment-solution.component.css'
})
export class PaymentSolutionComponent {

}
