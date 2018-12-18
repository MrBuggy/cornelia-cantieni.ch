import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// components
import { PageComponentLibraryComponent } from "./page-component-library/page-component-library.component";

// views
import { ButtonViewComponent } from "./views/components/button-view/button-view.component";
import { InputViewComponent } from "./views/components/input-view/input-view.component";
import { LinkViewComponent } from "./views/components/link-view/link-view.component";
import { HeaderViewComponent } from "./views/components/header-view/header-view.component";
import { QuoteViewComponent } from "./views/components/quote-view/quote-view.component";
import { LinkTilesViewComponent } from "./views/components/link-tiles-view/link-tiles-view.component";
import { HeadingViewComponent } from "./views/components/heading-view/heading-view.component";

// pages
import { PageHomeComponent } from "./views/pages/page-home/page-home.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/library",
        pathMatch: "full"
    },
    {
        path: "library",
        component: PageComponentLibraryComponent
    },
    {
        path: "library/button-view",
        component: ButtonViewComponent
    },
    {
        path: "library/input-view",
        component: InputViewComponent
    },
    {
        path: "library/link-view",
        component: LinkViewComponent
    },
    {
        path: "library/header-view",
        component: HeaderViewComponent
    },
    {
        path: "library/quote-view",
        component: QuoteViewComponent
    },
    {
        path: "library/link-tiles-view",
        component: LinkTilesViewComponent
    },
    {
        path: "library/heading-view",
        component: HeadingViewComponent
    },
    {
        path: "library/page-home",
        component: PageHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
