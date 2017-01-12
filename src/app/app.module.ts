import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button.component';
import {UserComponent} from './user.component';
import {PlaygroundComponent} from './playground.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UserComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
