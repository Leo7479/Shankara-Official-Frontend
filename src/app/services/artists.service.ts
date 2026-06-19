import { Injectable } from "@angular/core";
import { ArtistDetail } from "../types/artist-detail";

@Injectable({
    providedIn: 'root'
})
export class ArtistsService{
    private _data : ArtistDetail[] = [
        {id: 1, name: "Ayush Lala", instrument: ["Santoor"], image: "Ayush-Lala.png"},
        {id: 2, name: "Apurba Sikdar", instrument: ["Keys"], image: "Apurba-Sikdar.png"},
        {id: 3, name: "Joydev Banerjee", instrument: ["Tabla"], image: "Joydev-Banerjee.png"},
        {id: 4, name: "Ravi Chakrabarty", instrument: ["Banshi", "Flute"], image: "Ravi-Chakrabarty.png"},
        {id: 5, name: "Shivam Nath", instrument: ["Violin"], image: "Shivam-Nath.png"},
        {id: 6, name: "Soumyadeep Das", instrument: ["Drums"], image: "Soumyadeep-Das.png"}
    ]

    get data(){
        return this._data;
    }

    set data(artistsList: ArtistDetail[]){
        this._data = artistsList;
    }
}