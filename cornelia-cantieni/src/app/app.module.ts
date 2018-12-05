import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageComponentLibraryComponent } from './page-component-library/page-component-library.component';
import { ButtonViewComponent } from './views/components/button-view/button-view.component';
import { CanButtonComponent } from './components/atoms/can-button/can-button.component';
import { PageHomeComponent } from './views/pages/page-home/page-home.component';
import { CanInputComponent } from './components/molecules/can-input/can-input.component';
import { InputViewComponent } from './views/components/input-view/input-view.component';
import { CanLinkComponent } from './components/atoms/can-link/can-link.component';
import { LinkViewComponent } from './views/components/link-view/link-view.component';
import { CanHeaderComponent } from './components/organisms/can-header/can-header.component';
import { HeaderViewComponent } from './views/components/header-view/header-view.component';

@NgModule({
    declarations: [AppComponent, PageComponentLibraryComponent, ButtonViewComponent, CanButtonComponent, PageHomeComponent, CanInputComponent, InputViewComponent, CanLinkComponent, LinkViewComponent, CanHeaderComponent, HeaderViewComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
