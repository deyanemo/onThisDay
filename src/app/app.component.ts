import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
deyanemo: string;
name: string;
last: string;
storageNameSpace = 'myNgApp';
data: any;
result: any;
status: string = 'Births';
constructor(private http:HttpClient) {}


ngOnInit(){
  // For offline Use Stopped for now
  // const save = localStorage.getItem(this.storageNameSpace);
  // const storage = (localStorage.getItem(this.storageNameSpace) !== null ? this.data = JSON.parse(save) : this.data = []);
  // API CALL 
  this.ApiCall();
}



ApiCall(){
    // API CALL
    this.http.get('http://history.muffinlabs.com/date').subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.data = data.data.Births;
      return this.result = data;
    });
}

birth() {
  this.status = 'Births';
  return this.data = this.result.data.Births;
}
death() {
  this.status = 'Deaths';
  return this.data = this.result.data.Deaths;
}
event() {
  this.status = 'Events';
  return this.data = this.result.data.Events;
}




addData(e){
  return this.data.push(e);
}
storeData() {
  return localStorage.setItem(this.storageNameSpace, JSON.stringify(this.data));
}

theMan(){
  if (this.name !== 'undefined' && this.last !== 'undefined') {
    this.addData({name: this.name , last: this.last});
    this.storeData();
  }

}
