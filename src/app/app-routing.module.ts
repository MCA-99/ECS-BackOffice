import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetGeneratorComponent } from './pages/budget-generator/budget-generator.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportGeneratorComponent } from './pages/report-generator/report-generator.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'budget', component: BudgetGeneratorComponent },
  { path: 'report', component: ReportGeneratorComponent },
  { path: 'settings', component: SettingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
