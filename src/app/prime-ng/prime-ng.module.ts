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
import {InputSwitchModule} from 'primeng/inputswitch';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {GrowlModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {CaptchaModule} from 'primeng/captcha';
const PrimeNg = [
  ToastModule,
  FileUploadModule,
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
  MessageModule ,
  SidebarModule,
  PanelMenuModule,
  ToolbarModule,
  GrowlModule,
  ToggleButtonModule,
  ColorPickerModule,
  HttpClientModule,
  CaptchaModule
  

];

@NgModule({
  imports: [PrimeNg],
  exports: [PrimeNg]
})
export class PrimeNgModule { }
