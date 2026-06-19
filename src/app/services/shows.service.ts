import { Injectable } from "@angular/core";
import { ShowDetail } from "../types/show-detail";

@Injectable({
    providedIn: 'root'
})
export class ShowsService{
    private _data : ShowDetail[] = [
        {id: 1, date: "18 January 2025", name: "Raga Darbar — An Evening of Courts", location: "NCPA Tata Theatre, Mumbai", description: "A sold-out concert celebrating the royal ragas of the Mughal courts — Darbari Kanada, Bhairav, and Yaman Kalyan — performed in the correct time signatures from dusk to midnight. A three-hour journey that received three standing ovations.", link: "https://www.youtube.com", tags: ['hindustani', 'full concert', 'sold out', 'hindustani', 'full concert', 'sold out', 'hindustani', 'full concert', 'sold out']},
        {id: 2, date: "04 October 2025", name: "Sawai Gandharva Bhimsen Festival", location: "Pune, Maharashtra", description: "Invited to perform at India's most prestigious classical music festival. The ensemble opened with Bhairavi at dawn and closed with Bhimpalasi, leaving the Ganesh Kala Krida audience in collective reverence.", link: "https://www.youtube.com", tags: ['hindustani', 'full concert', 'sold out']},
        {id: 3, date: "22 March 2025", name: "Basant Bahar — Colours of Spring", location: "Indian Cultural Centre, London", description: "An international showcase commissioned by the Indian High Commission. Performed before an audience of 800 including members of the British Parliament, showcasing the Holi ragas: Kafi, Bhimpalasi, and Basant.", link: "https://www.youtube.com", tags: ['hindustani', 'full concert', 'sold out']},
        {id: 4, date: "12 December 2025", name: "Winter Ragas — Hemant Utsav", location: "Rabindra Sadan, Kolkata", description: "A homecoming performance at our beloved city's premier cultural hall. The concert wove together Bhairav, Lalit, and Todi in a programme that honoured the winter season's contemplative mood, drawing over 1,200 listeners", link: "https://www.youtube.com", tags: ['hindustani', 'full concert', 'sold out']},
    ];

    get data(){
        return this._data;
    }

    set data(showsData: ShowDetail[]){
        this._data = showsData;
    }
}