import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FeedComponent } from './components/feed/feed.component';
import { EventShowcaseComponent } from './components/event-showcase/event-showcase.component';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedComponent,
    EventShowcaseComponent,
    EventPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
