import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  //private date = new Date();
  public ampm!: any;
  public hours!: any;
  public minutes!: any;
  public seconds!: any;
  public fullHour!: string;
  public fullDate!: string;
  public currentDay!: any;
  public currentMonth!: any;
  public currentYear!: any;
  private days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  private months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
  public stateOfDay!: string;

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateClock(date);
      this.updateDate(date);
      this.updatePeriodIcon(date);
    }, 1000);
  }

  private updateDate(date: Date){
    // Date config
    this.currentDay = `${this.days[date.getDay()]}, ${date.getDate()}`; // ej: Martes, 26
    this.currentMonth = this.months[date.getMonth()];
    this.currentYear = date.getFullYear();

    this.fullDate = `${this.currentDay} de ${this.currentMonth} de ${this.currentYear}`;
  }

  private updateClock(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Hours config
    this.hours = hours % 12;
    this.ampm = this.hours >= 12 ? 'AM' : 'PM';
    this.hours = this.hours ? this.hours : 12;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours.toString();
    this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
    this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();

    this.fullHour = `${ this.hours }:${ this.minutes }:${ this.seconds }`;
  }

  private updatePeriodIcon(date: Date){
    const hours = date.getHours();

    const morningIcon: string = '../../../assets/images/amanecer.svg';
    const afternoonIcon: string = '../../../assets/images/dia.svg';
    const eveningIcon: string = '../../../assets/images/anochecer.svg';
    const nightIcon: string = '../../../assets/images/noche.svg';

    if ( hours >= 7 && hours <= 12 ){
      this.stateOfDay = morningIcon;
    } else if ( hours > 12 && hours <= 19 ){
      this.stateOfDay = afternoonIcon;
    } else if ( hours > 19 && hours <= 22 ) {
      this.stateOfDay = eveningIcon;
    } else {
      this.stateOfDay = nightIcon;
    }
  }

}
