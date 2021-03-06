import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{HttpModule}from'@angular/http';
import{HttpClientModule}from'@angular/common/http';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { Contacts} from '@ionic-native/contacts';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
  MyApp,
  ],
  imports: [
  BrowserModule,
  HttpModule,
  HttpClientModule,
  IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  ],
  providers: [
  StatusBar,
  SplashScreen,
  { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Contacts,
    SocialSharing,
  ]
})
export class AppModule { }
