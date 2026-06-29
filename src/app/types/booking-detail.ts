export interface Booking {
    id: number, 
    name: string, 
    phone: string, 
    alternatePhone: string, 
    email: string, 
    typeOfEvent: string, 
    venueName: string, 
    venueAddress: string,
    venueAddressLink: string,
    time: string, 
    date: string, 
    expectedAudience: number, 
    message: string,
    bookingAmount: number, 
    finalAmount: number
}