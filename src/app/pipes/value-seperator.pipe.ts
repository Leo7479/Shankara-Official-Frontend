import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'seperate'
})
export class ValueSeperator implements PipeTransform{
    transform(value: string[]){
        return value.join(' · ');
    }
}