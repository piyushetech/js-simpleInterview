let aa = function (a, c, v) {
  console.log(this.a);
  console.log(a, c + 12, v);
 // data(a);

   function data(a) {
    console.log(a);
  }

  return data(a);
};

function ada(a) {
  console.log(a);
  console.log(this.a);
}
obj = { a: 10 };
aa.bind(obj, [120, 11], 'piyush', 'rana')();

var person = {
  firstName: 'Pradeep',
  lastName: 'Kumar',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
console.log("Normal function: "+person.fullName());

var numbers = [5, 6, 2, 3, 7];
    var max = Math.max.apply(null,numbers);
    console.log("Normal function: "+max);

    var person = {
      firstName: 'Pradeep',
      lastName: 'Kumar',
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    };
    var myObject = person.fullName;
    var getFullName = myObject.bind(person);

    console.info("Using bind(): "+getFullName());

    const value1 = 10;
const value2 = '20';

let sum = value1 + value2;

console.log(sum);