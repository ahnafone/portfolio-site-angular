import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './components/education/education.component';
import { NavArrowsComponent } from './components/nav-arrows/nav-arrows.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PageIndicatorComponent } from './components/page-indicator/page-indicator.component';
import { WorkComponent } from './components/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EducationComponent,
    NavArrowsComponent,
    PageIndicatorComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
