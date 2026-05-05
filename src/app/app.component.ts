import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  icon: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpractice';
  selectedValue!: string;
  selectedDate!: Date;
  data1: any;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
   str=["java","dfg","java","python","c++"];
  vowels = "aeiou";
  array = [10, 20, 10, 40, 50];
  arraydata: any[] = [];
  count: { [key: string]: number } = {};
  displayedColumns: string[] = ['id', 'name', 'email', "icon"];
  maxDate: Date = new Date(2024, 11, 31);
  minDate: Date = new Date(2000, 0, 1);
  dataSource: UserData[] = [
    { id: 1, name: 'John', email: 'john@gmail.com', icon: 'delete' },
    { id: 2, name: 'Sara', email: 'sara@gmail.com', icon: 'delete' },
    { id: 3, name: 'Mike', email: 'mike@gmail.com', icon: 'delete' }
  ];
  ngOnInit() {

    for (let char of this.array) {
      this.count[char] = (this.count[char] || 0) + 1;
    }
    console.log(this.count, "count");
    for (let char of this.str) {
      this.arraydata.push(char);
      console.log(this.arraydata,"arraydata");
    }
  }
  deleteRow(index: number) {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource];
    console.log(this.dataSource, "datasource");
  }
}