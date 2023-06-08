import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent {

  driverName!: string;
  driverExperience!: number;
  hiredDriver: any;

  Driver() {
    // Logic to hire the driver
    // This is just an example, you should replace it with your actual implementation
    this.hiredDriver = {
      name: this.driverName,
      experience: this.driverExperience
    };
  }

}
