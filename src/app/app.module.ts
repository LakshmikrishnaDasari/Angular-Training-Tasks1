import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {ChipsModule} from 'primeng/chips';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticespecComponent } from './practicespec/practicespec.component';
import { MyPipe } from './my.pipe';
import { LoginComponent } from './login/login.component';
import { Login1formockComponent } from './login1formock/login1formock.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PasswordModule} from 'primeng/password';
import { FormtrailComponent } from './formtrail/formtrail.component';
import {AccordionModule} from 'primeng/accordion';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HomeComponent } from './home/home.component';
import {DialogModule} from 'primeng/dialog';
import { ZipcodeDirective } from './zipcode.directive';
import { PasswordDirective } from './password.directive';
import { CpasswordDirective } from './cpassword.directive';
import { PasswordtrailDirective } from './passwordtrail.directive';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Child1Component } from './child1/child1.component';
import { Farr1Component } from './farr1/farr1.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ChildForOutputComponent } from './child-for-output/child-for-output.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactfarrComponent } from './reactfarr/reactfarr.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChainParameterpipesComponent } from './chain-parameterpipes/chain-parameterpipes.component';
import { ImpurepipePipe } from './pure/impurepipe.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { PostdataComponent } from './postdata/postdata.component';
import { TypeComponent } from './type/type.component';
import { FormimportComponent } from './formimport/formimport.component';
import { GetjsonComponent } from './getjson/getjson.component';
import { ArrmethodsComponent } from './arrmethods/arrmethods.component';
import { RxjsobvComponent } from './rxjsobv/rxjsobv.component';
import { SubscroptionComponent } from './subscroption/subscroption.component';
import { SubjectComponent } from './subject/subject.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';
import { ProxyComponent } from './proxy/proxy.component';
import { Url } from './get-service/url';
import { ProxyCrudComponent } from './proxy-crud/proxy-crud.component';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { MessageService } from 'primeng/api';











@NgModule({
  declarations: [
    AppComponent,
    PracticespecComponent,
    MyPipe,
    LoginComponent,
    Login1formockComponent,
    FormgroupComponent,
    FormtrailComponent,
    TemplatedrivenComponent,
    ToolbarComponent,
    HomeComponent,
    ZipcodeDirective,
    PasswordDirective,
    CpasswordDirective,
    PasswordtrailDirective,
    DataBindingComponent,
    Child1Component,
    Farr1Component,
    DropdownComponent,
    ChildForOutputComponent,
    GetServiceComponent,
    ReactfarrComponent,
    TeacherComponent,
    StudentComponent,
    DirectivesComponent,
    PipesComponent,
    ChainParameterpipesComponent,
    ImpurepipePipe,
    HighlighterDirective,
    PostdataComponent,
    TypeComponent,
    FormimportComponent,
    GetjsonComponent,
    ArrmethodsComponent,
    RxjsobvComponent,
    SubscroptionComponent,
    SubjectComponent,
    UsersComponent,
    UserComponent,
    UserformComponent,
    ProxyComponent,
    ProxyCrudComponent,
    LazyloadComponent,
 
   
   


   

  ],
  imports: [
    DialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    AutoCompleteModule,
    DropdownModule,
    ChipsModule,
    KeyFilterModule,
    InputTextareaModule,
    InputSwitchModule,
    ListboxModule,
    InputMaskModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    RatingModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    AccordionModule,
    PrimeNgModule,
    HttpClientModule
   
    

    
  ],
  providers: [Url, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
