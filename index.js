// Your code here

function createEmployeeRecord(arr) {
    return {
        firstName : arr[0],
        familyName : arr[1],
        title : arr[2],
        payPerHour : arr[3],
        timeInEvents : [],
        timeOutEvents : []
    }
};

function createEmployeeRecords(arr) {
    const retArr = [];
    for (let i=0; i < arr.length; i++) {
        retArr.push(createEmployeeRecord(arr[i]));
    }
    return retArr;
};

function createTimeInEvent(employeeRecord,dateTimeString) {
    const arr = dateTimeString.split(' ');
    const obj = {
        type : 'TimeIn',
        hour : parseInt(arr[1]),
        date : arr[0]
    };
    employeeRecord.timeInEvents.push(obj);
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord,dateTimeString) {
    const arr = dateTimeString.split(' ');
    const obj = {
        type : 'TimeOut',
        hour : parseInt(arr[1]),
        date : arr[0]
    };
    employeeRecord.timeOutEvents.push(obj);
    return employeeRecord;
}

function hoursWorkedOnDate(eeRec,dateStr) {
    const allPunchIns = eeRec.timeInEvents;
    const allPunchOuts = eeRec.timeOutEvents;
    // In the real world there could be more than one punch in and out in a day,
    //   but not in this example.
    const datePunchIn = allPunchIns.filter(punch => punch.date === dateStr);
    const punchIn = datePunchIn[0].hour;
    const datePunchOut = allPunchOuts.filter(punch => punch.date === dateStr);
    const punchOut = datePunchOut[0].hour;
    return (punchOut - punchIn)/100;
}

function wagesEarnedOnDate(eeRec, dateStr) {
    const hours = hoursWorkedOnDate(eeRec,dateStr);
    const rate = eeRec.payPerHour;
    return rate * hours;
}

// The official solution should use out dates instead of in dates to avoid
//  a potential error caused by running the script on a day when employees
//  have clocked in but haven't clocked out yet.  Basing the calculation
//  on clock out dates avoids this potential issue.
function allWagesFor(eeRec) {
    const outs = eeRec.timeOutEvents;
    const pays = outs.map( out => wagesEarnedOnDate(eeRec,out.date) );
    const reducer = (acc, cur) => acc + cur;
    return pays.reduce(reducer);
} 

// The official solution heavily influenced this answer:
function calculatePayroll(ees) {
    return ees.reduce( (acc, cur) => acc + allWagesFor(cur), 0);
}

function findEmployeeByFirstName(ees, fn) {
    return ees.filter( ee => ee.firstName === fn )[0];  // Returns first result of the array returned by the filter
}

function vf_allWagesFor(eeRec) {    // Rewritten with a vanilla for loop
    const outs = eeRec.timeOutEvents;
    const days = outs.length;
    let wages = 0;
    for (let i = 0; i < days; i++) {
        let dateStr = outs[i].date;
        wages += wagesEarnedOnDate(eeRec, dateStr);
    }
    return wages;
}

function vf_calculatePayroll(ees) {    // Rewritten with a vanilla for loop
    let total = 0;
    for (let i=0; i<ees.length; i++) {
        total += allWagesFor(ees[i]);
    }
    return total;
}