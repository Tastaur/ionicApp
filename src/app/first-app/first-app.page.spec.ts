import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstAppPage } from './first-app.page';

describe('FirstAppPage', () => {
  let component: FirstAppPage;
  let fixture: ComponentFixture<FirstAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
