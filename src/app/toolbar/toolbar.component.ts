import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  display:any
  name4:any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',

        items: [
          {
            label: 'ReactiveForms',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/formtrail',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Bindings',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/Bindings',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'component(service)',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/teacher',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Drop down ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/dd',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'observables ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/observables',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'subscription ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/subscription',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'subject ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/subject',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'GetData ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/service',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'post ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/post',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Rfarr ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/reactfarr',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Directives ',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/Directive',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'Pipes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/pipes'
          },
          {
            label: 'cppipes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/cppipes'
          },
          
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/templatedriven'
          }
        ]
      },

      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'ReactiveForms', icon: 'pi pi-fw pi-plus' },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link'
          },
          {
            label: 'Typescript',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/type'
          },
          {
            label: 'ArrayMethods',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/arrm'
          },
          {
            label: 'Subjct&obv',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/s&o'
          },
          {
            label: 'proxy',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/proxy'
          },
          {
            label: 'proxycrud',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/proxycrud'
          },
          {
            label: 'lazyload',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/lazy'
          },
          {
            label: 'Getjson',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/getjson'
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus' },
          { label: 'Actions', icon: 'pi pi-fw pi-cog' }
        ]
      }
    ];
  }

}
