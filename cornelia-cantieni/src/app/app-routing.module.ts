import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// components
import { PageComponentLibraryComponent } from "./page-component-library/page-component-library.component";

// views
import { ButtonViewComponent } from "./views/components/button-view/button-view.component";

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
        path: "library/page-home",
        component: PageHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
