import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "./angular-material.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomAddressFormComponent } from "./custom-address-form/custom-address-form.component";

@NgModule({
  declarations: [AppComponent, HelloComponent, CustomAddressFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
