import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ResultComponent } from './views/result/result.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegisterationComponent } from './views/registeration/registeration.component';
import { DataService } from './services/data.service';
import { CommonUtilService } from './services/common-util.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { QuizComponent } from './views/quiz/quiz.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent,
    RegisterationComponent,
    QuizComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,CommonUtilService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
