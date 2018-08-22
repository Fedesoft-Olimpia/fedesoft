import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { PortfolioComponent } from "src/app/pages/portfolio/portfolio.component";
import { AboutComponent } from "src/app/pages/about/about.component";
import { ItemComponent } from "src/app/pages/item/item.component";

const app_routes : Routes = [
    { path : '', component : PortfolioComponent},
    { path : 'about', component : AboutComponent},
    { path : 'item', component : ItemComponent},
    { path : '**', pathMatch : 'full', redirectTo :''}
    
];

@NgModule({
    imports : [RouterModule.forRoot(app_routes)]
})

export class TemplateRoutingModule {

}