let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]

// Section-1: Print All Students
console.log("Task 1: All Students");

students.forEach(s => {

  console.log(s.id, s.name, s.mark, s.course);

});   
//Output is 1.'Naveen' 85 'MERN',2.'John' 45 'Python', 3.'Priya' 72 'Java', 4.'Arun' 95 'React'


// Section-2: Pass / Fail

console.log("\nTask 2: Pass/Fail");

students.forEach(s => {

  let result = s.mark >= 50 ? "Pass" : "Fail";

  console.log(`${s.name} - ${result}`);

});
// Output:1.Naveen - Pass 2.John - Fail 3.Priya - Pass 4.Arun - Pass


//Section-3:  Grade System

console.log("\nTask 3: Grades");

students.forEach(s => {

  let grade;

  if (s.mark >= 90) grade = "A Grade";

  else if (s.mark >= 75) grade = "B Grade";

  else if (s.mark >= 50) grade = "C Grade";

  else grade = "Fail";

  console.log(`${s.name} - ${grade}`);

});
//Output: 1.Naveen - B Grade 2.John - Fail 3.Priya - C Grade 4.Arun - A Grade


//Section-4: Topper Student

let topper = students[0];

students.forEach(s => {

  if (s.mark > topper.mark) {

    topper = s;

  }

});

console.log(`\nTask 4: Topper is ${topper.name} - ${topper.mark}`);
//Output: Topper is Arun - 95

//Section-5:  Course Search (React)

console.log("\nTask 5: React Students");

students.forEach(s => {

  if (s.course === "React") {

    console.log(s);

  }

});
//Output: {id: 4, name: 'Arun', mark: 95, course: 'React'}

//Section-6: Add New Student

students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

console.log("\nTask 6: After Adding New Student");

students.forEach(s => {

  console.log(s);
  });
//Output: 1.{id: 1, name: 'Naveen', mark: 85, course: 'MERN'} 2.{id: 2, name: 'John', mark: 45, course: 'Python'} 3.{id: 3, name: 'Priya', mark: 72, course: 'Java'} 4.{id: 4, name: 'Arun', mark: 95, course: 'React'} 
//5.{id: 5, name: 'Rahul', mark: 88, course: 'Node JS'}

//Section-7: Attendance System

let status = "present";

console.log("\nTask 7: Attendance");

switch(status) {

  case "present":

    console.log("Welcome");

    break;

  case "absent":

    console.log("Mark Absent");

    break;

  case "leave":

    console.log("Approved Leave");

    break;

  default:

    console.log("Invalid Status");

}
//Output: for status="present" is Welcome

//Section-8: Login System

console.log("\nTask 8: Login");
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {

  console.log("Login Success");

} else {

  console.log("Invalid User");
} 

// Output: Login Success
