import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule, MatButtonModule, MatIconModule, MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { PortfolioComponent } from "./portfolio.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { BiographyComponent } from "./components/biography/biography.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ConceptsComponent } from "./components/concepts/concepts.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class PortfolioMaterialModule {}

@NgModule({
  declarations: [
    PortfolioComponent,
    NavigationComponent,
    ContactComponent,
    HeroComponent,
    BiographyComponent,
    ExperienceComponent,
    ConceptsComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortfolioMaterialModule
  ],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
