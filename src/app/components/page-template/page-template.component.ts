import { Component, OnInit } from '@angular/core';
import { PageInterface } from './page-interface';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {
  pageTitle: string = '02 Pick your destination';
  pageItemNavigation: string[] = [
    'moon',
    'mars',
    'europa',
    'titan'
  ]
  pageContent: Array<PageInterface>=[
    {imgString: './assets/destination/image-moon.png', title: 'Moon', distance: '384,400 km', time: '3 days', description:` See our planet as you’ve never seen it before. A perfect relaxing trip away to help
    regain perspective and come back refreshed. While you’re there, take in some history
    by visiting the Luna 2 and Apollo 11 landing sites.`},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
