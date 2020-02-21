// Any object who has properties 'firstName' and 'lastName' should be considered of type
// 'Employee'
interface Employee{
    firstName: string;
    lastName: string;
}

let emp1 = {firstName: 'Clark', lastName:'Kent'};
let emp2 = {firstName: 'Gangadhar', lastName: 'Shastri'};
let emp3 = {firstName: 'Earth', hostStar: 'Sun' , lastName: 'Solar'};

function printE(emp:Employee){
    console.log("Employee Details : "+emp.firstName +" "+emp.lastName);
}

printE(emp1);
printE(emp2);
printE(emp3);