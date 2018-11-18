import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponentLibraryComponent } from "./page-component-library/page-component-library.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
    }, {
        path: 'library',
        component: PageComponentLibraryComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}