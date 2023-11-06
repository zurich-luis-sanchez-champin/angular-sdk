import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sernac-solicitud-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../style/style.css']
})
export class InputComponent {

  @Input() id: string = "";
  get Id(): string { return this.id; }

  @Input() name: string = "";
  get Name(): string { return this.name; }

  @Input() title: string = "";
  get Title(): string { return this.title; }

  @Input() errorMessage: string = "";
  get ErrorMessage(): string { return this.errorMessage; }

  @Input() type: string = "text";
  get Type(): string { return this.type; }

  @Input() placeHolder: string = "";
  get PlaceHolder(): string { return this.placeHolder; }

  @Input() maxLength: number = 1000;
  get MaxLength(): number { return this.maxLength; }

  @Input() disabled: boolean = false;
  get Disabled(): boolean { return this.disabled; }

  @Input() error: boolean = true;
  get Error(): boolean { return this.error; }

  @Input() value: string = "";
  get Value(): string { return this.value; }
  @Output() valueChange = new EventEmitter<string>();
  set Value(value: string) {
    this.pristine = false;
    this.value = value;
    this.valueChange.emit(this.value);
  }

  private pristine = true;

  get InputStyle(){ return this.Value.length > 0 ? "is-not-empty" : ""; }
  get Style(){
    if (this.disabled){
      this.pristine = true;
      this.value = "";
      return "disabled";
    } 
    if(this.pristine) return "";
    if(this.Error) return "has-error margen";
    else return "";
  }

}
