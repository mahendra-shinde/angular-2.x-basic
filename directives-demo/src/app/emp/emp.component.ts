import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'emp-list',
    templateUrl: './emp.component.html',
})
export class EmpListComponent {
    isEmpty:boolean = false;

    deleteEmp(): void {

        let e = this.empList.pop();
        alert("Just removed "+e.firstName);

        this.isEmpty = (this.empList.length==0)? true : false ;
    }

    empList: Employee[] = [
        {
            firstName: "Donald",
            lastName: "Trump",
            age: 64
        },
        {
            firstName: "Vladmir",
            lastName: "Putin",
            age: 61
        },
        {
            firstName: "Mahendra",
            lastName: "Shinde",
            age: 36
        },
    ]
    emp: Employee = {firstName: "", lastName: "", age:0};

    save(empForm:NgForm):void {
        console.log("Adding new employee!!");
        this.empList.push(this.emp);
    }

}

export class Employee {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
