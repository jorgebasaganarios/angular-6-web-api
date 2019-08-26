import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app8-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date = this.getActualDate();

  private getActualDate(): string {
    const actualDate = new Date();
    let actualDay = actualDate.getDate().toString();
    if (actualDay.length < 2) { actualDay = '0' + actualDay; }
    let actualMonth = actualDate.getMonth().toString();
    if (actualMonth.length < 2) { actualMonth = '0' + actualMonth; }
    const actualYear = actualDate.getFullYear().toString();
    const finalDate = actualDay + '-' + actualMonth + '-' + actualYear;
    return finalDate;
  }

  constructor() { }

  ngOnInit() {
  }

}
