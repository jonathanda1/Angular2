import { Component } from '@angular/core';
// import the headercomponent
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';

@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  // add the directive
  directives: [HeaderComponent, RecipesComponent]
})
export class AppComponent {
  title = 'Recipe Book!';
}
