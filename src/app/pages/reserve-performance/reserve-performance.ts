import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header.component';
import { NgClass } from '@angular/common';
import { Calender } from '../../components/calender/calender.component';
import { BookingService } from '../../services/bookings.service';

@Component({
  selector: 'app-reserve-performance',
  imports: [Header, NgClass, Calender],
  templateUrl: './reserve-performance.html',
  styleUrl: './reserve-performance.css',
})
export class ReservePerformance {
  currentStepNumber = 1;
  private bookingService = inject(BookingService)
  bookings: string[] = this.bookingService.getDates();
  reserveDate = '';

  onDateSelect(e: string){
    this.reserveDate = e;
  }

  onProceed(){
    this.currentStepNumber += 1;
  }
  
}
