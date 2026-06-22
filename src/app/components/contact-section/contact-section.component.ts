import { AfterViewInit, Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.css'
})
export class ContactSection implements AfterViewInit{
    formData = new FormGroup(
        {
            name: new FormGroup({
                firstName: new FormControl("", [Validators.required]),
                lastName: new FormControl("")
            }),
            email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(2)]),
            phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
            natureOfQuery: new FormControl("", [Validators.required]),
            message: new FormControl("", [Validators.required])
        },
        {
            validators: [anyEmailOrPhoneValidator()]
        }
    );

    ngAfterViewInit(): void {
        let inputContainerDivs  = document.getElementById("contact-section")?.getElementsByClassName("form-input-container");
        if(inputContainerDivs){
            for(let i of inputContainerDivs){
                let input = (i as HTMLDivElement).children.item(1) as HTMLInputElement;
                input?.addEventListener('input', this.handleLabelUp);
            }
        }
    }

    handleLabelUp(e: Event){
        let target = (e.target as HTMLInputElement);
        if(target.value!=='' && !target.parentElement?.classList.contains("input-label-up")){
            target.parentElement!.classList.add('input-label-up');
        }
        if(target.value===''){
            target.parentElement!.classList.remove('input-label-up');
        }
    }

    onFormSubmit(){
        console.log(this.formData.value);
        console.log(this.formData);
        let inputContainerDivs  = document.getElementById("contact-section")?.getElementsByClassName("form-input-container");
        
    }



}

function anyEmailOrPhoneValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
        let emailValue = form.get("email")?.value?.trim();
        let phoneValue = form.get("phone")?.value;
        return (emailValue || phoneValue)? null: { emailOrPhoneError: true };
    }
}