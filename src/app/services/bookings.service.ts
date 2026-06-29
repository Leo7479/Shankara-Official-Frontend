import { Injectable } from "@angular/core";
import { Booking } from "../types/booking-detail";

@Injectable({
    providedIn: 'root'
})
export class BookingService{
    data: Booking[] = [
        {id: 1, date:'30-06-2026', alternatePhone: '', bookingAmount: 0, email: '', expectedAudience: 0, finalAmount: 0, message: '', name: '', phone: '', time: '', typeOfEvent: '', venueAddress: '', venueAddressLink: '', venueName: ''},
        {id: 2, date:'02-07-2026', alternatePhone: '', bookingAmount: 0, email: '', expectedAudience: 0, finalAmount: 0, message: '', name: '', phone: '', time: '', typeOfEvent: '', venueAddress: '', venueAddressLink: '', venueName: ''},
        {id: 3, date:'18-07-2026', alternatePhone: '', bookingAmount: 0, email: '', expectedAudience: 0, finalAmount: 0, message: '', name: '', phone: '', time: '', typeOfEvent: '', venueAddress: '', venueAddressLink: '', venueName: ''},
        {id: 4, date:'15-08-2026', alternatePhone: '', bookingAmount: 0, email: '', expectedAudience: 0, finalAmount: 0, message: '', name: '', phone: '', time: '', typeOfEvent: '', venueAddress: '', venueAddressLink: '', venueName: ''}
    ]

    getDates(){
        let dates = [];
        for(let i=0;i<this.data.length;i++){
            dates.push(this.data[i].date);
        }

        return dates;
    }
}