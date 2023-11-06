import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from '../../model/ListItem.model';

@Component({
  selector: 'app-sernac-solicitud-dropdown-multiple',
  templateUrl: './dropdown-multiple.component.html',
  styleUrls: ['../../style/style.css']
})
export class DropDownMultipleComponent {

  @Input() name: string = "";
  get Name(): string { return this.name; }

  @Input() title: string = "";
  get Title(): string { return this.title; }

  @Input() placeholder: string = "";
  get Placeholder(): string { return this.placeholder; }

  @Input() data: ListItem[] = [];
  get Data(): ListItem[] { return this.data; }

  @Input() disabled: boolean = false;
  get Disabled(): boolean { return this.disabled; }

  @Input() error: boolean = true;
  get Error(): boolean { return this.error; }

  @Input() errorMessage: string = "";
  get ErrorMessage(): string { return this.errorMessage; }

  @Input() selection: ListItem[] = [];
  get Selection(): ListItem[] { return this.selection; }
  @Output() selectionChange = new EventEmitter<ListItem[]>();
  set Selection(value: ListItem[]) {
    this.selection = value;
    this.selectionChange.emit(this.selection);
  }

  get Empty(){ return this.Selection.length == 0 }

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

  public itemArribaClick(id: number) {
    this.itemClick(id);
  }

  public itemClick(id: number) {
    var itemEncontrado = this.Selection.find(item => item.value == id);
    if (itemEncontrado) {
      const indice = this.Selection.findIndex(item => item.value == id);
      if (indice != null) this.Selection.splice(indice, 1);
    } else {
      var item = this.data.find(item => item.value == id);
      if (item != null) {
        this.Selection.push(item);
        this.Selection.sort((a, b) => a.value - b.value);
      }
    }
    this.dropdownClick();
  }

  public textfieldStyle(): string {
    if (this.disabled){
      this.pristine = true;
      this.selection = [];
      this.open = false;
      return "disabled";
    }
    if(this.pristine) return "";
    if(this.Error) return "has-error margen";
    return "";
  }

  public multiSelectedStyle(): string {
    if (this.open) return "ss-open-below";
    return "";
  }

  public iconStyle(): string {
    if (this.open) return "ss-cross";
    return "";
  }

  public contentStyle(): string {
    if (this.open) return "ss-open";
    return "";
  }

  public optionStyle(id: number): string {
    if (this.Selection.find(item => item.value == id)) return "ss-option-selected";
    return "";
  }

}
