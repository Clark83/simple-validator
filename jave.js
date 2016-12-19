//phone
var phone = function(word) {
	alert(phone_number[3] === "-" && phone_number[7] === "-" && phone_number.length === 12);
};

var phone_number = prompt("Enter your phone number with dashes (XXX-XXX-XXXX)");
phone(phone_number);

//birthday
var birthday = function(word) {
  alert(Birth_date[2]==="/" && Birth_date[5]==="/");
};
var Birth_date = prompt("Enter your Birth_date (xx/xx/xx)");
birthday(Birth_date);


//postal_code
var zip_code = function(word) {
	alert((postal_code.length === 5) || (postal_code[5] === "-") && (postal_code.length === 10));
};

var postal_code = prompt("Enter your postal code (xxxxx or xxxxx-xxxx)");
zip_code(postal_code);

//State
var Resident_State =function(word) {
  alert(state.length === [2] && state === state.toUpperCase());
};

var state = prompt("Enter your State, (Two Charectars, Capitolized) ");
Resident_State(state);

//Married
var You_Married = function(stuff) {
  alert(married.toLowerCase ()=== "yes" || married.toLowerCase == "no");
  };

var married = prompt('Are you married? ("yes or no")');
You_Married(married)
