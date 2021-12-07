const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// step 1 loop over the employee array and do the following
  // use each employee object as the input to the function discribed below
  //console.log the results of each iteration

  for (let worker of employees) {
    console.log(worker);
    console.log(bonusCalc(worker));
  }


// step 2 write a declared function that takes in one Employye object (as an argument to the function),
// and returns a new object with the following properties
  // the name property should contain th employee's name
  // the bonusPercentage property should contain the bonus percentage the employee is to recieve. see below for calculation instructions
      // those who have a rating of a 2 or below should not receive a bonus
      // those who have a rating of 3 should receive a base bonus of 4% of their base anual income
      // those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
      // those who have a rating of a 5 should receive a base bonus of 10% of thir base annual income.
      // if their employee number is 4 digits long, this means they have been with the company for longer than 15 years and should receive an additional 5%
      // however, if their annual income is greater than 65,000, they should have their bonus adjusted down 1%
      // no bonus can be about 13% or below 0%
  // the totalCompensation property should be the adjusted annual compensation (based anualy + bonus)
  // the totalBonus should be the employee's total bonus rounded to the nearest dollar.


  /*
bonusPercentage ..... if rating is 2, % = 0
                      if rating is 3, % = 0.04
                      if rating is 4, % = 0.06
                      if rating is 5, % = 0.1

  employeeNumberCondition.... if emp number is 4 digit long, bonusPercentage += 0.05 

  if annualIncome > $6500 ..... bonuspercentage -= 0.01

  if bonusPercentage > 13% bonusPercentage should be 13%
  if bonusPercentage < 0$ bonusPercentage should be 0%

  create variable totalBonus ... annualIncome * (bonusPercentage)
  create variable totalCompensation... annualIncome + totalBonus

  create new object containing new values 
  */
  function bonusCalc(worker) {
    let bonusPercentage = 0;
    if(worker.reviewRating <= 2){
      bonusPercentage = 0;
    } else if (worker.reviewRating === 3) {
      bonusPercentage += 0.04;
    } else if (worker.reviewRating === 4) {
      bonusPercentage += 0.06;
    } else if (worker.reviewRating === 5) {
      bonusPercentage += 0.1;
    } //ending rating conditionals
    if (worker.employeeNumber.length >= 4) {
      bonusPercentage += .05;
    }
    if(worker.annualSalary >= 65000){
      bonusPercentage -= 0.01
    }
    if(bonusPercentage > .13){
      bonusPercentage = .13
    } else if(bonusPercentage < 0){
      bonusPercentage = 0
    }
     
     let totalBonus = Math.round(worker.annualSalary * bonusPercentage)
     let totalCompensation = Number(worker.annualSalary) + totalBonus

     return {name: worker.name, 'bonusPercentage' : bonusPercentage, totalCompensation: totalCompensation, totalBonus: totalBonus};
  }//endfunc

