import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    console.log('Welcome Component Initiated');
  }
}
