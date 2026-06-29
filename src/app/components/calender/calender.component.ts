import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-calender',
    standalone: true,
    imports: [NgClass],
    templateUrl: './calender.component.html',
    styleUrl: './calender.component.css'
})
export class Calender implements OnInit {
    days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    today = new Date();
    months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    years: number[] = [];
    currentMonth = this.today.getMonth() + 1;
    currentYear = this.today.getFullYear();
    dates: string[] = [];
    gaps: number[] = [];
    selectedDate = '';
    private maxBookingYears = 5;

    @Input() alreadySelectedDate !: string;
    @Input() bookings !: string[];
    @Output() dateSelect = new EventEmitter<string>();

    constructor() {
        this.years = [];
        for (let i = 0; i < this.maxBookingYears; i++) {
            this.years.push(this.today.getFullYear() + i);
        }
    }

    ngOnInit() {
        if (this.alreadySelectedDate !== '') {
            let month = parseInt(this.alreadySelectedDate.split("-")[1]) - 1;
            let year = parseInt(this.alreadySelectedDate.split("-")[2]);
            this.renderCalender(month, year);
            this.selectedDate = this.alreadySelectedDate;
            this.currentMonth = month + 1;
            this.currentYear = year;
        } else {
            let month = this.today.getMonth();
            let year = this.today.getFullYear();
            this.renderCalender(month, year);
        }
    }

    onDateClick(date: string) {
        if (this.isPast(date)) {
            return;
        }
        if(this.bookings.includes(date)){
            return;
        }
        this.selectedDate = date;
        this.dateSelect.emit(date);
    }

    renderCalender(month: number, year: number) {
        this.dates = [];
        this.gaps = [];
        let firstDayOfMonth = new Date(year, month, 1).getDay();
        let lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 0; i < firstDayOfMonth; i++) {
            this.gaps.push(i);
        }
        for (let i = 0; i < lastDateOfMonth; i++) {
            let currentDate = String(i + 1).padStart(2, '0');
            let currentMonth = String(month + 1).padStart(2, '0');
            this.dates.push(currentDate + '-' + currentMonth + '-' + year);
        }
    }

    onMonthYearChange(monthSelect: HTMLSelectElement, yearSelect: HTMLSelectElement) {
        this.renderCalender(parseInt(monthSelect.value, 10) - 1, parseInt(yearSelect.value, 10));
    }

    isPast(date: string): boolean {
        const [day, month, year] = date.split('-').map(Number);

        const current = new Date(year, month - 1, day);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        return current < today;
    }

    getDateStatus(date: string) {
        if (this.isPast(date)) {
            return "Past";
        }

        if (this.bookings.includes(date)) {
            return "Reserved";
        }

        if (!this.isPast(date) && !this.bookings.includes(date)) {
            return "Available";
        }

        return "";
    }
}