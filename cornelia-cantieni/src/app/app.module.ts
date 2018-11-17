import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageComponentLibraryComponent } from './page-component-library/page-component-library.component';
import { TestCompComponent } from './test-comp/test-comp.component';

@NgModule({
    declarations: [AppComponent, PageComponentLibraryComponent, TestCompComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
