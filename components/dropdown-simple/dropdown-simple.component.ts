import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from '../../model/ListItem.model';

@Component({
  selector: 'app-sernac-solicitud-dropdown-simple',
  templateUrl: './dropdown-simple.component.html',
  styleUrls: ['../../style/style.css']
})
export class DropDownSimpleComponent {

  @Input() name: string = "";
  get Name(): string { return this.name; }

  @Input() title: string = "";
  get Title(): string { return this.title; }

  @Input() placeholder: string = "";
  get Placeholder(): string { return this.placeholder; }

  @Input() errorMessage: string = "";
  get ErrorMessage(): string { return this.errorMessage; }

  @Input() data: ListItem[] = [];
  get Data(): ListItem[] { return this.data; }

  @Input() disabled: boolean = false;
  get Disabled(): boolean { return this.disabled; }

  @Input() error: boolean = true;
  get Error(): boolean { return this.error; }

  @Input() value: number = 0;
  get Value(): number { return this.value; }

  @Output() valueChange = new EventEmitter<number>();
  set Value(value: number) {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  private open: boolean = false;
  private pristine: boolean = true;

  public dropdownClick() {
    if(this.disabled) return;
    this.open = !this.open;
    if(!this.open) this.pristine = false;
  }

  public dropdownBlur() {
    if(this.disabled) return;
    this.pristine = false;
    this.open = false;
  }

  public itemClick(id: number) {
    this.open = false;
    this.Value = id;    
  }

  get Selection(): string | undefined{
    return this.data.find(item => item.value == this.value)?.text;
  }

  public textfieldStyle(): string {
    if (this.disabled){
      this.pristine = true;
      this.value = 0;
      this.open = false;
      return "disabled";
    } 
    if(this.pristine) return "";
    if(this.Error) return "has-error margen";
    return "";
  }

  public singleSelectedStyle(): string {
    if (this.open) return "ss-open-below";
    return "";
  }

  public iconStyle(): string {
    if (this.open) return "arrow-up";
    return "arrow-down";
  }

  public contentStyle(): string {
    if (this.open) return "ss-open";
    return "";
  }

}
