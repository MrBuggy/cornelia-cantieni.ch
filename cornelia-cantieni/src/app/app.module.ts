import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageComponentLibraryComponent } from './page-component-library/page-component-library.component';
import { ButtonViewComponent } from './views/components/button-view/button-view.component';
import { CanButtonComponent } from './components/atoms/can-button/can-button.component';
import { PageHomeComponent } from './views/pages/page-home/page-home.component';
import { CanIconComponent } from './components/atoms/can-icon/can-icon.component';

@NgModule({
    declarations: [AppComponent, PageComponentLibraryComponent, ButtonViewComponent, CanButtonComponent, PageHomeComponent, CanIconComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
