import { AfterViewInit, Component, inject } from '@angular/core';
import { Header } from '../../components/header/header.component';
import { NgClass } from '@angular/common';
import { Calender } from '../../components/calender/calender.component';
import { BookingService } from '../../services/bookings.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserve-performance',
  imports: [Header, NgClass, Calender, ReactiveFormsModule],
  templateUrl: './reserve-performance.html',
  styleUrl: './reserve-performance.css',
})
export class ReservePerformance {
  currentStepNumber = 1;
  private bookingService = inject(BookingService)
  bookings: string[] = this.bookingService.getDates();
  reserveDate = '';
  reservationDetails = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("")
    }),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    alternatePhone: new FormControl(null, [Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.email]),
    typeOfEvent: new FormControl("", [Validators.required]),
    venueName: new FormControl("", [Validators.required]),
    expectedAudience: new FormControl(null),
    venueAddress: new FormControl("", [Validators.required]),
    venueAddressLink: new FormControl(""),
    message: new FormControl(""),
    budget: new FormControl(null)
  });

  onDateSelect(e: string) {
    this.reserveDate = e;
  }

  onProceed() {
    console.log(this.reservationDetails);
    console.log(this.reservationDetails.get('fullName')?.get('firstName')?.errors);
    this.currentStepNumber += 1;
  }

  onBack() {
    this.currentStepNumber -= 1;
  }

  handleLabelUp(e: Event) {
    let target = (e.target as HTMLInputElement);
    if (target.value !== '' && !target.parentElement?.classList.contains("input-label-up")) {
      target.parentElement!.classList.add('input-label-up');
    }
    if (target.value === '') {
      target.parentElement!.classList.remove('input-label-up');
    }
  }

  validForm() {
    return 
      this.reservationDetails.get('fullName')?.get('firstName')?.errors !== null
      && this.reservationDetails.get('phone')?.errors !== null
      && this.reservationDetails.get('alternatePhone')?.errors !== null
      && this.reservationDetails.get('email')?.errors !== null
      ;
  }
}
