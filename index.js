// Your code here

function createEmployeeRecord([firstname, familyname, title, payperhour]) {

    const employeeRecord = {
        firstName: '',
        familyName: '',
        title: '',
        PayPerHour: '',
        timeInEvents: [],
        timeOutEvents: []
    }

    employeeRecord.firstName = firstname;
    employeeRecord.familyName = familyname;
    employeeRecord.title = title;
    employeeRecord.payPerHour = payperhour;

    return employeeRecord
}


function createEmployeeRecords(array) {

    const employeeRecords = []
    array.forEach(nestedArray => {

        employeeRecords.push(createEmployeeRecord(nestedArray))


    })
    return employeeRecords
}

function createTimeInEvent(employeeObj, dateStamp) {

    const timeObj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10)
    }

    employeeObj.timeInEvents.push(timeObj)

    return employeeObj

}


function createTimeOutEvent(employeeObj, dateStamp) {

    const timeObj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10)
    }

    employeeObj.timeOutEvents.push(timeObj)

    return employeeObj

}

function hoursWorkedOnDate(employeeObj, date) {

    const employeeInOnDate = employeeObj.timeInEvents.find(specifiedDate => {

        specifiedDate === date
        return employeeObj.timeInEvents
    }
    )
    const employeeOutOnDate = employeeObj.timeOutEvents.find(specifiedDate => {

        specifiedDate === date
        return employeeObj.timeOutEvents
    }
    )

    return (employeeOutOnDate.hour - employeeInOnDate.hour)/100



}

function wagesEarnedOnDate(employeeObj, date){

    return (hoursWorkedOnDate(employeeObj, date) * employeeObj.payPerHour)

}


function allWagesFor(employeeObj){

    let dates = employeeObj.timeInEvents.map(element => element.date)
    console.log(dates[0]);
    console.log(wagesEarnedOnDate(employeeObj, dates[0]));
    console.log(wagesEarnedOnDate(employeeObj, dates[1]));

    let paymentTotal = dates.reduce(function(accu, d){
        return accu + wagesEarnedOnDate(employeeObj, d)
    }, 0)

    return paymentTotal
}


















// Calculate number of days between two dates

function hourDiff(firstDate, SecondDate) {
    return Math.round((SecondDate - firstDate) / (1000 * 60 * 60))
}

function parseDate(dateAsString) {
    const date = dateAsString.split('/');
    return new Date(date[2], date[0] - 1, date[1]);
}

// return hourDiff(parseDate(employeeObj.timeInEvents.date), parseDate(employeeObj.timeOutEvents.date))