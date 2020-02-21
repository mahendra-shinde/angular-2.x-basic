var emp1 = { firstName: 'Clark', lastName: 'Kent' };
var emp2 = { firstName: 'Gangadhar', lastName: 'Shastri' };
var emp3 = { firstName: 'Earth', hostStar: 'Sun', lastName: 'Solar' };
function printE(emp) {
    console.log("Employee Details : " + emp.firstName + " " + emp.lastName);
}
printE(emp1);
printE(emp2);
printE(emp3);
