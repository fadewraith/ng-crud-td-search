import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/td-form.model';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent implements OnInit {

  user: User = new User();
  mobNum: any;
  tdForm: User[] = [];

  constructor(private route: Router, private router: ActivatedRoute) { }


  ngOnInit(): void {


    this.mobNum = this.router.snapshot.params['mobNum'];

    let storageValue = localStorage.getItem('test');
    if (storageValue != null) {
      this.tdForm = JSON.parse(storageValue);
    } else {
      this.tdForm = [];
    }

    this.tdForm.forEach((e: any) => {
      if (e.mobNum === this.mobNum) {
        this.user = e;
      }
    });

  }


  getData(tdForm: NgForm) {
    console.warn(tdForm);


    if (this.mobNum != null) { // edit operation

      this.tdForm.forEach((e: any) => {
        if (e.mobNum === this.mobNum) {
          e = this.user;
        }
      });

    } else { // save operation
      this.tdForm.push(this.user);
      console.warn(this.user);
    }

    localStorage.setItem('test', JSON.stringify(this.tdForm));

    this.route.navigateByUrl('/user');

  }

}
