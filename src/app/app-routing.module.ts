import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormtrailComponent } from './formtrail/formtrail.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Farr1Component } from './farr1/farr1.component';
import { Child1Component } from './child1/child1.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { ReactfarrComponent } from './reactfarr/reactfarr.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChainParameterpipesComponent } from './chain-parameterpipes/chain-parameterpipes.component';
import { PostdataComponent } from './postdata/postdata.component';
import { TypeComponent } from './type/type.component';
import { GetjsonComponent } from './getjson/getjson.component';
import { ArrmethodsComponent } from './arrmethods/arrmethods.component';
import { RxjsobvComponent } from './rxjsobv/rxjsobv.component';
import { SubscroptionComponent } from './subscroption/subscroption.component';
import { SubjectComponent } from './subject/subject.component';
import { UsersComponent } from './users/users.component';
import { ProxyComponent } from './proxy/proxy.component';
import { ProxyCrudComponent } from './proxy-crud/proxy-crud.component';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { Lazy1listComponent } from './lazy1/lazy1list/lazy1list.component';
import { Lazy2Module } from './lazy2/lazy2.module';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'formtrail', component:FormtrailComponent},
  {path:'templatedriven', component:TemplatedrivenComponent},
  {path:'Bindings', component:DataBindingComponent},
  {path:'array', component:Farr1Component},
  {path:'dd', component:DropdownComponent},
  {path:'service', component:GetServiceComponent, children: [
    {
    path:  'post',
    component:  PostdataComponent
    }]
  },
  {path:'reactfarr', component:ReactfarrComponent},
  {path:'teacher', component:TeacherComponent},
  {path:'Directive', component:DirectivesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'cppipes', component:ChainParameterpipesComponent},
  {path :'post', component:PostdataComponent},
{path :'type', component:TypeComponent},
{path :'arrm', component:ArrmethodsComponent},
{path :'getjson', component:GetjsonComponent},
{path :'observables', component:RxjsobvComponent},
{path :'subscription', component:SubscroptionComponent},
{path :'subject', component:SubjectComponent},
{path: 's&o', component:UsersComponent},
{path: 'proxy', component:ProxyComponent},
{path: 'proxycrud', component:ProxyCrudComponent},
{path: 'lazy', component: LazyloadComponent},
{path: 'lazy1',loadChildren:()=>import('./lazy1/lazy1.module').then(l=>l.Lazy1Module)},
{path: 'lazy2',loadChildren: './lazy2/lazy2.module#Lazy2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
