import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './components/education/education.component';
import { NavArrowsComponent } from './components/nav-arrows/nav-arrows.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageIndicatorComponent } from './components/page-indicator/page-indicator.component';
import { WorkComponent } from './components/work/work.component';
import { MockComponent } from './components/mock/mock.component';
import { HairComponent } from './components/hair/hair.component';
import { MusicComponent } from './components/music/music.component';
import { MoodtrackerComponent } from './components/moodtracker/moodtracker.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EducationComponent,
    NavArrowsComponent,
    PageIndicatorComponent,
    WorkComponent,
    MockComponent,
    HairComponent,
    MusicComponent,
    MoodtrackerComponent
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
