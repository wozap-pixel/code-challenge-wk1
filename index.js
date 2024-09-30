// question 1 solution
  
let mark = 60

if (mark >= 79) {
  console.log('A')
}else if ( mark >= 60) {
  console.log('B')
}else if (mark >= 49){
  console.log('C')
}else if (mark >= 40){
  console.log('D')
}else{
  (console.log('E')
  )
}


/// Question2
function speedDetector(speed) {
  const speedLimit = 70;

  if (speed < speedLimit) {
      console.log("Ok");
  } else {
      // Calculate demerit points for every 5 km/h above the limit
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
console.log(`Points: ${demeritPoints}`);

      // Check if the license should be suspended
      if (demeritPoints > 12) {
          console.log("License suspended");
      }
  }
}

// Example usage:
const speed = prompt("Enter the speed of the car:");
speedDetector(Number(speed));
