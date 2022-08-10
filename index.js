/*
Learning Goals
    Assign functions to a variable.
    Store functions in a data structure.
    Write functions that return other functions.
    Pass a function to another function.
    Call a function returned by another function.
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
*/

const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/*function createFareMultiplier(num) {
    return fareMultiplier(multiplier) {
        return (num) * (multiplier)   
    };
}; */

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    };
};

function fareDoubler(fare) {
    return fare * 2
};

function fareTripler(fare) {
    return fare * 3
};

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers)
};