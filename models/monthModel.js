//models/postModel.js

const db = require("../utils/coronavirusdb");

const DailyDataTest = class DailyDataTest {
    constructor(id, date, city, location, gender, locally, age) {
        this.id = id;
        this.date = date;
        this.city = city;
        this.location = location;
        this.gender = gender;
        this.locally = locally;
        this.age = age;
    }

    static fetchALL() {
        const sql = "SELECT date_format(date,'%Y') as years , count(id) as total FROM daily_data GROUP by years";
        return db.execute(sql);
    }

    static find() {
        const sql2 = "SELECT date_format(date,'%Y-%m') as months , count(id) as total FROM daily_data GROUP by months having months =2020"
        return db.execute(sql2);
    }

    static async fetchPage(pageNo) {
        const linePerPage = 6;    //設定每頁資料筆數
        const navSegments = 10;   //設定導覽列顯示分頁數
        const startPage = Math.floor((pageNo - 1) / navSegments) * navSegments + 1;  //計算導覽列的起始頁數

        var totalLine, totalPage;
        var lineData;
        var result = {};
        await db.query("SELECT date_format(date,'%Y') as years , count(id) as total FROM daily_data GROUP by years")
            .then(([rows]) => {
                totalLine = rows[1].years;
                totalPage = Math.ceil(totalLine / linePerPage);
                console.log(totalLine);
            }, (error) => {
                totalLine = 0;
                totalPage = 0;
            });

        await db.query("SELECT date_format(date,'%Y-%m') as months , count(id) as total FROM daily_data GROUP by months having months =2020")
            .then(([rows])  => {
                lineData = rows;
                //console.log(JSON.stringify(lineData));

            });


        await db.query("SELECT year(date) as year, date_format(date,'%Y-%m') as months , count(id) as total FROM daily_data GROUP by months having year =2020")
            .then(([rows]) => {
                result = { code: 0, data: rows, pageNo: totalLine, totalLine: totalLine, totalPage: totalPage, startPage: startPage, linePerPage: linePerPage, navSegments: navSegments };
            }, (error) => {
                result = { code: -1 };
            });

        return result;
    }

};


//testing 
// const test = async function (req,res) {
//   await DailyDataTest.find().then(([rows]) =>{
//     console.log(JSON.stringify(rows));
// });

// const test = function (req,res) {
//   DailyDataTest.fetchPage(pageNo).then(([rows]) => {
//   console.log(JSON.stringify(rows));
 //   });
// };

// test();

module.exports = DailyDataTest;