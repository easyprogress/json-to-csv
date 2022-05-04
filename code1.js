// Import csv-writer
const csvwriter =require( 'csv-writer')

var createCsvWriter = csvwriter.createObjectCsvWriter

// Passing the column names intp the module
const csvWriter = createCsvWriter({

// Output csv file name is geek_data
path: 'jsondata.csv',
header: [

	// Title of the columns (column_names)
	{id: 'userId', title: 'userID'},
	{id: 'firstName', title: 'firstName'},
	{id: 'lastName', title: 'lastname'},
    {id:'phoneNumber',title:'phoneNumber'},
    {id:'emailAddress',title:'emailAddress'}
]
});

// Values for each column through an array
const results = [
    
       
          {
            "userId": 1,
            "firstName": "Krish",
            "lastName": "Lee",
            "phoneNumber": "123456",
            "emailAddress": "krish.lee@learningcontainer.com"
          },
          {
            "userId": 2,
            "firstName": "racks",
            "lastName": "jacson",
            "phoneNumber": "123456",
            "emailAddress": "racks.jacson@learningcontainer.com"
          },
          {
            "userId": 3,
            "firstName": "denial",
            "lastName": "roast",
            "phoneNumber": "33333333",
            "emailAddress": "denial.roast@learningcontainer.com"
          },
          {
            "userId": 4,
            "firstName": "devid",
            "lastName": "neo",
            "phoneNumber": "222222222",
            "emailAddress": "devid.neo@learningcontainer.com"
          },
          {
            "userId": 5,
            "firstName": "jone",
            "lastName": "mac",
            "phoneNumber": "111111111",
            "emailAddress": "jone.mac@learningcontainer.com"
          }
        
      
];
// Writerecords function to add records
csvWriter
.writeRecords(results)
.then(()=> console.log('Data uploaded into csv successfully'));
