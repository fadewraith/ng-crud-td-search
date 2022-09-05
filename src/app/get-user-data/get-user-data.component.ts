import { Component, OnInit } from '@angular/core';
import { User } from '../model/td-form.model';


@Component({
  selector: 'app-get-user-data',
  templateUrl: './get-user-data.component.html',
  styleUrls: ['./get-user-data.component.css']
})
export class GetUserDataComponent implements OnInit {

  searchText: any;
  temporaryUser:any;
  constructor() { }

  userdata: User[]=[];
  ngOnInit(): void {
    // let savedData = localStorage.getItem('test');

    // if(savedData!=null) {
    //   let values = JSON.parse(savedData);
    //   this.userdata = values;
    //   console.warn("value",this.userdata);
    // }
    let myData:any =  localStorage.getItem('test');
    this.userdata = JSON.parse(myData);
    // console.log(this.userdata,"agar");
    
    this.temporaryUser = [...this.userdata];
    console.log(this.temporaryUser,"tempora");
    
    // console.log(this.temporaryUser);
  }
  

  deleteRow(index:number) {
    this.userdata.splice(index, 1);
    localStorage.setItem('test' , JSON.stringify(this.userdata));
    // this.userdata.forEach((value, index) => {
    //   if(value==element)
    //     this.userdata.splice(index, 1);
    // });
  }

  search(keyWord: string) {
    // console.log("hello");
    if(keyWord) {
    keyWord = keyWord.toLowerCase();
   const valuesOf = this.userdata.filter((arr:any) => {
    //  console.log(arr,"asasasas");
           
      return arr.fName.toLowerCase().includes(keyWord) || arr.lName.toLowerCase().includes(keyWord) || arr.eMail.toLowerCase().includes(keyWord) || arr.mobNum.toLowerCase().includes(keyWord);
    })
    this.userdata = valuesOf;
    // console.log(valuesOf,"world");
  } else {
    this.userdata = this.temporaryUser;
  }
    
  }

}
