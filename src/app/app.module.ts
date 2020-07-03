import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentToChildParentComponent } from './1-parent-to-child-parent/parent-to-child-parent.component';
import { ParentToChildChildComponent } from './2-parent-to-child-child/parent-to-child-child.component';
import { SetterParentComponent } from './3-setter-parent/setter-parent.component';
import { SetterChildComponent } from './4-setter-child/setter-child.component';
import { OnchangeParentComponent } from './5-onchange-parent/onchange-parent.component';
import { OnchangeChildComponent } from './6-onchange-child/onchange-child.component';
import { ChildToParentParentComponent } from './7-child-to-parent-parent/child-to-parent-parent.component';
import { ChildToParentChildComponent } from './8-child-to-parent-child/child-to-parent-child.component';
import { ParentToChildLocalParentComponent } from './9-parent-to-child-local-parent/parent-to-child-local-parent.component';
import { ParentToChildLocalChildComponent } from './10-parent-to-child-local-child/parent-to-child-local-child.component';
import { ViewchildParentComponent } from './11-viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './12-viewchild-child/viewchild-child.component';
import { ServiceParentComponent } from './13-service-parent/service-parent.component';
import { ServiceChildComponent } from './14-service-child/service-child.component';


@NgModule({
  declarations: [
    AppComponent,
    SetterParentComponent,
    SetterChildComponent,
    OnchangeParentComponent,
    OnchangeChildComponent,
    ChildToParentParentComponent,
    ChildToParentChildComponent,
    ParentToChildLocalParentComponent,
    ParentToChildLocalChildComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
    ServiceParentComponent,
    ServiceChildComponent,
    ParentToChildParentComponent,
    ParentToChildChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
