import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageAndComponentLibraryComponent } from './page-and-component-library/page-and-component-library.component';

@NgModule({
    declarations: [AppComponent, PageAndComponentLibraryComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
