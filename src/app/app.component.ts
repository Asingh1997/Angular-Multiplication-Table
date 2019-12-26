import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-form';
disabledAgreement: boolean = true;
box1:string;
box2:string;
valLength = this.box1

 isDisabled = true;
    
disable(event){
if (this.box1 != null ) 
{
	if (this.box2 !=null )
	{
		this.isDisabled = false;
        return;
	}
	else
	{
		alert('Password is empty');
	}
    
}
else{
 alert('Email  is empty');
}
}


  changeCheck(event){
    this.disabledAgreement =false;
  }
}
