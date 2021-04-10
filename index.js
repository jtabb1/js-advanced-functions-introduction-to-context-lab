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

function hoursWorkedOnDate(employeeRecord,dateString) {
    const punchIns = employeeRecord.timeInEvents;
    const punchOuts = employeeRecord.timeOutEvents;
    
}

// console.log(0 + parseInt('4') + 1);
// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
// let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400");
// let newEvent = updatedBpRecord.timeInEvents[0];

// console.log(updatedBpRecord);
// console.log(newEvent);

// const r = createEmployeeRecord('a','b','c',1);
// console.log(r);
// console.log(r.familyName);
