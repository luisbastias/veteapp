import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private launchNavigator: LaunchNavigator) {}
goto(){
  let options: LaunchNavigatorOptions = {
		app: this.launchNavigator.APP.GOOGLE_MAPS,
            
			};
  this.launchNavigator.navigate("Veterinaria El Prado, Guaymallén, Mendoza",options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
}
face(){
  window.open("https://www.facebook.com/veterinariaelprado/")
}
}
