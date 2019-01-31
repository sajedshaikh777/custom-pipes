import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Sajed Shaikh";
  amount = 1233232345.987655345;
  userDateOfBirth = "01/01/2000";
  value1 = 2;
  currency: number = 0;

  currencyCode: string = "CAD";

  string1: string = "sdfsfrtyty tyrtyt rtyrty";
  string2: string = "sdfsdf sdgfg sdfsf afsdf";

  creditCardNumber: string = ".... .... .... 5544";

  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };

  onChange(value: number) {
    this.currency = value;
  }
}
