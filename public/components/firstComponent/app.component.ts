import {Component} from '@angular/core';
import {secondComponent} from '../secondComponent/app.secondcomponent'

@Component({
  selector: 'my-app',
  directives: [secondComponent],
  templateUrl: 'components/firstComponent/firstComponent.html'
})
export class firstComponent { }
