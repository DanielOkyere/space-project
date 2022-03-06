import { Component, OnInit } from '@angular/core';
import { PageInterface } from './page-interface';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
})
export class PageTemplateComponent implements OnInit {
  pageTitle: string = '01 Pick your destination';
  pageItemNavigation: string[] = ['moon', 'mars', 'europa', 'titan'];
  pageContent: Array<PageInterface> = [
    {
      imgString: './assets/destination/image-moon.png',
      title: 'Moon',
      distance: '384,400 km',
      time: '3 days',
      description: ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help
    regain perspective and come back refreshed. While you’re there, take in some history
    by visiting the Luna 2 and Apollo 11 landing sites.`,
    },
    {
      imgString: './assets/destination/image-mars.png',
      title: 'Mars',
      distance: '225 mil. km',
      time: '9 months',
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
      the tallest planetary mountain in our solar system. It’s two and a half times
      the size of Everest!`,
    },
    {
      imgString: './assets/destination/image-europa.png',
      title: 'Europa',
      distance: '628 mil. km',
      time: '3 years',
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a
      winter lover’s dream. With an icy surface, it’s perfect for a bit of
      ice skating, curling, hockey, or simple relaxation in your snug
      wintery cabin.`,
    },
    {
      imgString: './assets/destination/image-titan.png',
      title: 'Titan',
      distance: '1.6 bil. km',
      time: '7 years',
      description: `
      The only moon known to have a dense atmosphere other than Earth, Titan
      is a home away from home (just a few hundred degrees colder!). As a
      bonus, you get striking views of the Rings of Saturn.`
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
