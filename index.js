// Code your solution in this file!

//use an anonymous function to slice first 2 drivers from and array
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

//use an anonymous function to slice last 2 drivers from array
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
//make an array that contains two previous functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ];


// create Higher order function for multiplying fares
  const createFareMultiplier = function(multiply){
    return function(value){
        return multiply * value;
    };
  };
//doubles fare
const fareDoubler = createFareMultiplier(2);

//triples fare
const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers,driversToReturn) {
    return driversToReturn(drivers);
}