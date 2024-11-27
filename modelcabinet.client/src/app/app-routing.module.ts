import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectListPageComponent } from './projects/project-list-page/project-list-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ChangelogComponent } from './changelog/changelog.component'
import { HelpProjectComponent } from './Help-Page/Help-Page.component';
import { AssetListComponent } from './asset/asset-list/asset-list.component';
import { AssetDetailComponent } from './asset/asset-detail/asset-detail.component';

// TODO: Change Names to actual Module Names
const routes: Routes = [
  { path: '', pathMatch: "full", component: LandingPageComponent },
  { path: 'LandingPage', redirectTo: '' },
  { path: 'Projects', component: ProjectListPageComponent },
  { path: 'Projects/:id', component: ProjectPageComponent },
  { path: 'about-project', component: AboutProjectComponent },
  { path: 'changelog', component: ChangelogComponent},
  { path: 'Help', component: HelpProjectComponent },
  { path: 'Assets', component: AssetListComponent },
  { path: 'Assets/:id', component: AssetDetailComponent}
  /* { path: 'User', component: UserPageComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
