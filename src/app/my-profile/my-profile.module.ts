import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { SplitPipe } from './split.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ExperianceComponent } from './experiance/experiance.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    MyProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SplitPipe,
    ExperianceComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class MyProfileModule { }
