import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './admin/layout/root/root.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, RootComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
