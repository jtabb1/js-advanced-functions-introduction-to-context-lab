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
    // In the real world there could be more than one punch in and out in a day
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

function allWagesFor(eeRec) {
    const outs = eeRec.timeOutEvents;
    const days = outs.length;
    let wages = 0;
    for (let i = 0; i < days; i++) {
        let dateStr = outs[i].date;
        wages += wagesEarnedOnDate(eeRec, dateStr);
    }
    return wages;
}

function calculatePayroll(ees) {
    let total = 0;
    for (let i=0; i<ees.length; i++) {
        total += allWagesFor(ees[i]);
    }
    return total;
}

function findEmployeeByFirstName(ees, fn) {
    const eesFd = ees.filter( ee => {
        console.log(ee);
        return (ee.firstName === fn);
     } );
    console.log(ees);
    console.log(eesFd);
    return eesFd[0];
}

// let src = [
// ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
// ["Natalia", "Romanov", "CEO", 150]
// ]
// let emps = createEmployeeRecords(src)

// console.log(emps);
// // console.log(findEmployeeByFirstName(emps, "Loki"));
// findEmployeeByFirstName(emps, "Loki");

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900");
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100");

// console.log()

// function filterByDate(punchIns, dateStr) {
//     if (punchIns) {}
// }

const eeRec01 = {
    firstName : 'a1',
    familyName : 'a2',
    title : 'at',
    payPerHour : 1,
    timeInEvents : [
        {type : 'TimeIn', hour : 730, date : '2021-04-12'},
        {type : 'TimeIn', hour : 730, date : '2021-04-13'},
        {type : 'TimeIn', hour : 730, date : '2021-04-14'},
        {type : 'TimeIn', hour : 730, date : '2021-04-15'},
        {type : 'TimeIn', hour : 730, date : '2021-04-16'}
    ],
    timeOutEvents : [
        {type : 'TimeOut', hour : 1730, date : '2021-04-12'},
        {type : 'TimeOut', hour : 1830, date : '2021-04-13'},
        {type : 'TimeOut', hour : 1930, date : '2021-04-14'},
        {type : 'TimeOut', hour : 2030, date : '2021-04-15'},
        {type : 'TimeOut', hour : 2130, date : '2021-04-16'}
    ]
}

const users = [
    { firstName: "Niky", lastName: "Morgan", favoriteColor: "Blue", favoriteAnimal: "Jaguar" },
    { firstName: "Tracy", lastName: "Lum", favoriteColor: "Yellow", favoriteAnimal: "Penguin" },
    { firstName: "Josh", lastName: "Rowley", favoriteColor: "Blue", favoriteAnimal: "Penguin" },
    { firstName: "Kate", lastName: "Travers", favoriteColor: "Red", favoriteAnimal: "Jaguar" },
    { firstName: "Avidor", lastName: "Turkewitz", favoriteColor: "Blue", favoriteAnimal: "Penguin" },
    { firstName: "Drew", lastName: "Price", favoriteColor: "Yellow", favoriteAnimal: "Elephant" },
];

// function filter(collection, cb) {
//     const newCollection = [];

//     for (const user of collection) {
//         if (cb(user)) {
//             newCollection.push(user);
//         }
//     }

//     return newCollection;
// }



// console.log(0 + parseInt('4') + 1);
// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
// let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400");
// let newEvent = updatedBpRecord.timeInEvents[0];

// console.log(updatedBpRecord);
// console.log(newEvent);

// const r = createEmployeeRecord('a','b','c',1);
// console.log(r);
// console.log(r.familyName);
