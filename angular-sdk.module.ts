import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownMultipleComponent } from './components/dropdown-multiple/dropdown-multiple.component';
import { DropDownSimpleComponent } from './components/dropdown-simple/dropdown-simple.component';
import { InputComponent } from './components/input/input.component';
@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations: [
        DropDownSimpleComponent,
        DropDownMultipleComponent,
        InputComponent
    ],
    exports: [
        DropDownSimpleComponent, 
        DropDownMultipleComponent,
        InputComponent
    ]
})

export class WebSdkModule { }