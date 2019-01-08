import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import {SideNavbarComponent} from './Components/side-navbar/side-navbar.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MainComponent } from './Components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatButtonModule, MatFormFieldModule, MatInputModule,MatIconModule, MatDialogModule, MatDatepickerModule,MatNativeDateModule ,
  MatSidenavModule,MatToolbarModule,  MatListModule, MatTableModule, MatTabsModule, MatChipsModule} from '@angular/material';
import { RouterModule,  } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MeetingViewComponent } from './Components/meeting-view/meeting-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SideNavbarComponent,
    DashboardComponent,
    MainComponent,
    MeetingViewComponent,
  
    
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,  MatListModule,
    NgxDatatableModule,MatDatepickerModule,MatNativeDateModule,
    MatTableModule,MatFormFieldModule,
    MatTabsModule, MatDialogModule ,MatInputModule,MatChipsModule
  ],
  providers: [ MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[MeetingViewComponent,]
})
export class AppModule { }
