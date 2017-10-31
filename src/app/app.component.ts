import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`,
    
  })

  export class AppComponent {
    onSubmit(f:NgForm) {
      var options = f.value;
      var map = {optionA: 1, optionB: 2, optionC: 3, optionD: 4};
      var result = "selected options are : ";
      for( var prop in options) {
        if(options[prop] === true){
          result = result + map[prop] + "," ;
          // alert(map[prop] + " is selected");
        }
        // if(options[prop]){ }
      }

      alert(result);
      console.log(f.value);  
    }
  }
    
  
