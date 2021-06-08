//models/postModel.js

const db = require("../utils/coronavirusdb");


const DailyDataTest = class DailyDataTest {
  constructor(id, date, city, location, gender, locally, age) {
    this.id =id;
    this.date = date;
    this.city = city;
    this.location = location;
    this.gender = gender;
    this.locally = locally;
    this.age = age;
  }

  static fetchALL() {
    return db.execute("SELECT * FROM daily_data")
  }
};



//testing 
// const test = async function (req,res) {
//   await DailyDataTest.fetchALL().then(([rows]) =>{
//     console.log(JSON.stringify(rows));
//     console.log()
//   });
// };

// test();

module.exports = DailyDataTest;