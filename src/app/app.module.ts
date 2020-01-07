import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { LinksComponent } from './links/links.component';
import { LinkItemComponent } from './link-item/link-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillItemComponent,
    ProjectItemComponent,
    ExperienceItemComponent,
    LinksComponent,
    LinkItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
