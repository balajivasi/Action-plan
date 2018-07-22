import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SchoolReportsComponent } from './school-reports/school-reports.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { OffReportComponent } from './off-report/off-report.component';
import { OnReportComponent } from './on-report/on-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { MasterPageComponent } from './master-page/master-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SchoolReportsComponent,
    PageTitleComponent,
    OffReportComponent,
    OnReportComponent,
    ReportDetailsComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
