import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title }     from '@angular/platform-browser';

import {Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot}from '@angular/router';
import { HttpClient } from '@angular/common/http';	
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	showMsg:boolean= false;
	success:boolean= false;


    contactForm: FormGroup;
    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private  titleService: Title){
 	this.createForm();

  	}
  	createForm() {
    this.contactForm = this.fb.group({
    	name: ['',[Validators.required, Validators.minLength(6)]],
    	email: ['',[Validators.required, Validators.email]],
    	message: ['',[Validators.required, Validators.minLength(20)]],
	})
	}


onClickSubmit() {
     if (this.contactForm.invalid ) {
            this.showMsg = true;
            return;
        }

	    var data = new FormData();
	    data.append("name", this.contactForm.get('name').value);
	    data.append("email", this.contactForm.get('email').value);
	    data.append("message", this.contactForm.get('message').value);
	    console.log(data);
	    this.http.post('/sendmail', data).subscribe(
	      (response) => [console.log(response),this.success=true],
	      (error) => console.log(error)
	    )

	    
          setTimeout(() => {
           if (this.success ===true) {
              this.router.navigate(['/home']);
            }
      }, 5000);  //5s
      
	  

}

  ngOnInit() {
  	 this.titleService.setTitle( 'Contact us' );
  }

}
