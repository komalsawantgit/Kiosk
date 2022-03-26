import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { GalleryComponent } from './gallery/gallery.component'

// Material Ui
import { MatExpansionModule } from '@angular/material/expansion';
import { CalenderComponent } from './calender/calender.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxContentComponent } from './dialog-box-content/dialog-box-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list'
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

// Material Ui end

// Calender
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { FormNewEventComponent } from './form-new-event/form-new-event.component';
// Calender End
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications/notifications.component';
import { TabsComponent } from './tabs/tabs.component';
import { AidComponent } from './tabs/aid/aid.component';
import { BussinessSolnComponent } from './tabs/bussiness-soln/bussiness-soln.component';
import { HrComponent } from './tabs/hr/hr.component';
import { SameaComponent } from './tabs/samea/samea.component';
import { LoginComponent } from './login/login.component';

import 'animate.css';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    CalenderComponent,
    AccordionComponent,
    DialogBoxContentComponent,
    GalleryImageComponent,
    AddEventFormComponent,
    FormNewEventComponent,
    NotificationsComponent,
    TabsComponent,
    AidComponent,
    BussinessSolnComponent,
    HrComponent,
    SameaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    CalendarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatListModule,
    ImageCropperModule,
    MatTooltipModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEventFormComponent],
})
export class AppModule { }
