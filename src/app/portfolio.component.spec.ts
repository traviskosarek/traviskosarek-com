import { TestBed, async } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';
describe('PortfolioComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PortfolioComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'portfolio'`, async(() => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('portfolio');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
