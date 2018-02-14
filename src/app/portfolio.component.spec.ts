import { TestBed, async } from "@angular/core/testing";
import { MatMenuModule, MatIconModule, MatToolbarModule } from "@angular/material";

import { PortfolioComponent } from "./portfolio.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroComponent } from "./components/hero/hero.component";
import { BiographyComponent } from "./components/biography/biography.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ConceptsComponent } from "./components/concepts/concepts.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

describe("PortfolioComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        MatMenuModule,
        MatIconModule,
        MatToolbarModule
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title "portfolio"`, async(() => {
  //   const fixture = TestBed.createComponent(PortfolioComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual("portfolio");
  // }));

  // it("should render title in a h1 tag", async(() => {
  //   const fixture = TestBed.createComponent(PortfolioComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("h1").textContent).toContain("Welcome to app!");
  // }));
});
