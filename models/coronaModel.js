//models/postModel.js

const db = require("../utils/coronavirusdb");


const DailyData = class DailyData {
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

module.exports = DailyData;