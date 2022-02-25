
///////////// Data Sets
let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3]
]

let dataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300],
  ["Byron", "Poodle", "Mascot", 3],
  ["Julius", "Caesar", "General", 27],
  ["Rafiki", "", "Aide", 10],
  ["Simba", "", "King", 100]
]
//////////Create an employee record ///////////////// 
function createEmployeeRecord(array){
   const employee = {
     firstName: array[0],
     familyName: array[1],
     title: array[2],
     payPerHour: array[3],
     timeInEvents: [],
     timeOutEvents: []
   }
   return employee;
}
  //createEmployeeRecord(["Gray", "Worm", "Security", 1])


  //////////Create employee records///////////////// 
  function createEmployeeRecords(arrays){
    let employeeRecords  = []
    for (let employeeRecordsArray of arrays){
      const newEmployee = createEmployeeRecord(employeeRecordsArray)
      employeeRecords.push(newEmployee);
      
    }
    return employeeRecords;
  }
  
  //createEmployeeRecords(twoRows);
  //createEmployeeRecords(dataEmployees)


  //////////Calculate time in ///////////////// 
  function createTimeInEvent( record, dateStamp){
    const [date, hour] = dateStamp.split(' ')

    const inEvent = {
      'type': 'TimeIn',
      'hour': parseInt(hour),
      'date': date,
    };
    record.timeInEvents.push(inEvent)
    //console.log( updatedRecords)
    return record;
  }

  //createTimeInEvent( ["Byron", "Poodle", "Mascot", 3],'2014-02-28 1400')


  //////////Calculate time out ///////////////// 
  function createTimeOutEvent(record, dateStamp){
    const [date, hour] = dateStamp.split(' ')

    const inEvent = {
      'type': 'TimeOut',
      'hour': parseInt(hour),
      'date': date,
    };
    record.timeOutEvents.push(inEvent)
    //console.log( updatedRecords)
    return record;
  }
  //createTimeOutEvent(["Byron", "Poodle", "Mascot", 3],'2014-02-28 1700')

  //debugger


  //////////Calculate hours worked on a date ///////////////// 
  function hoursWorkedOnDate(record, date){
//debugger
      const inEvent = record.timeInEvents.find((event) => {
          return event.date === date
      })
      const outEvent = record.timeOutEvents.find((event) =>{
          return event.date === date
      })
      return (outEvent.hour - inEvent.hour)/100;
  }
  
  const cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
  dayOne = createTimeInEvent(cRecord, "0044-03-15 0900")
  dayOne = createTimeOutEvent(cRecord, "0044-03-15 1100")

hoursWorkedOnDate(dayOne, "0044-03-15")


//////////Calculate wages earned on a date///////////////// 
function wagesEarnedOnDate(record, date){
const hoursWorked = hoursWorkedOnDate(record,date)
const wage = record.payPerHour;
return hoursWorked * wage;
}

wagesEarnedOnDate,(dayOne, "0044-03-15")


//////////Calculate all wages///////////////// 
function allWagesFor (record){
  const newArray =[];
    //debugger
  const wagesEanred = record.timeInEvents.map((e) => {
    return e.date
    //debugger
  })
    
  wagesEanred.forEach((e) => {
      newArray.push(wagesEarnedOnDate(record, e))
  })

  return newArray.reduce((p,c) => p + c) 

   
    
    //debugger;
}

const jRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
dayOne = createTimeInEvent(cRecord, "0044-03-14 0900")
dayOne = createTimeOutEvent(dayOne, "0044-03-14 2100")

allWagesFor(dayOne)


//////////Calculate final payroll///////////////// 
function calculatePayroll(array){
//debugger;
const newArray = [];

array.forEach((e) => newArray.push(allWagesFor(e)))
//debugger
return newArray.reduce((p,c) => p + c)
//debugger
}



/*let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

let sTimeData = [
  ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
  ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
]

let rTimeData = [
  ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
  ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
]

sTimeData.forEach(function (d) {
  let [dIn, dOut] = d
  sRecord = createTimeInEvent(sRecord, dIn)
  sRecord = createTimeOutEvent(sRecord, dOut)
})

rTimeData.forEach(function (d, i) {
  let [dIn, dOut] = d
  rRecord = createTimeInEvent(rRecord, dIn)
  rRecord = createTimeOutEvent(rRecord, dOut)
})

let employees = [sRecord, rRecord]
let grandTotalOwed = employees.reduce((m, e) => m + allWagesFor(e), 0)

const csvDataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300]
]

const csvTimesIn = [
  ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
  ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
  ["Natalia", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1300"]],
  ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
  ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
  ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
]

const csvTimesOut = [
  ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Natalia", ["2018-01-01 2300", "2018-01-02 2300", "2018-01-03 2300"]],
  ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
  ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
]

let allemployeeRecords = createEmployeeRecords(csvDataEmployees)
            allemployeeRecords.forEach(function (rec) {
              let timesInRecordRow = csvTimesIn.find(function (row) {
                return rec.firstName === row[0]
              })

              let timesOutRecordRow = csvTimesOut.find(function (row) {
                return rec.firstName === row[0]
              })

              timesInRecordRow[1].forEach(function(timeInStamp){
                createTimeInEvent(rec, timeInStamp)
              })

              timesOutRecordRow[1].forEach(function(timeOutStamp){
                createTimeOutEvent(rec, timeOutStamp)
              })
            })*/



//calculatePayroll(employees);
//calculatePayroll(allemployeeRecords)
//# sourceURL=snippet:///Intro Context