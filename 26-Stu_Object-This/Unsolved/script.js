
// describes the window and its properties.
console.log(this);

// describes the object window instead.
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

//Looks at the parent object and returns the age instead of having to declare
//that you're looking at the child object instead. Will log 20
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

//calls 5000 from the initialInvestment variable and multiplies it by 1.15 for a total of 5750.
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

helloThis()

child.ageTenYears();

investor.investment.investmentGrowth();