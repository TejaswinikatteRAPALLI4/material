import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpractice';
  str=["java","dfg","java","python","c++"];
  vowels="aeiou";
  array=[10,20,10,40,50];
  arraydata:any[]=[];
 count: { [key: string]: number } = {};
  ngOnInit(){
 
for(let char of this.array){
 this.count[char] = (this.count[char] || 0) + 1;
}
console.log(this.count,"count");
for (let char of this.str) {
  this.arraydata.push(char);
  console.log(this.arraydata,"arraydata");
}
}

}