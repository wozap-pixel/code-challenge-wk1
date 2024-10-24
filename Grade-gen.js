function gradeGenerator() {
  let input = prompt("Enter the student's marks (0-100):");
  
  
  let marks = parseFloat(input);
  
  
  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      let grade;
      if (marks >= 80) {
          grade = 'A';
      } else if (marks >= 60) {
          grade = 'B';
      } else if (marks >= 50) {
          grade = 'C';
      } else if (marks >= 40) {
          grade = 'D';
      } else {
          grade = 'E';
      }
      
      alert(`The grade for ${marks} marks is ${grade}.`);
  } else {
      alert("Invalid input. Marks should be a number between 0 and 100.");
  }
}


