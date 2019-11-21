import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './section/search/search.component';
import { AddCourseComponent } from './section/add-course/add-course.component';
import { CoursesListComponent } from './section/courses-list/courses-list.component';
import { CoursesListItemComponent } from './section/courses-list/courses-list-item/courses-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchComponent,
    AddCourseComponent,
    CoursesListComponent,
    CoursesListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
