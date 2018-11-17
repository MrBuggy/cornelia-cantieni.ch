import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponentLibraryComponent } from "./page-component-library/page-component-library.component";
import { TestCompComponent } from "./test-comp/test-comp.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
    }, {
        path: 'library',
        component: PageComponentLibraryComponent,
    }, {
        path: 'library/testcomp',
        component: TestCompComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
