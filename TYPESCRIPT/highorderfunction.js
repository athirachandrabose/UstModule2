var scores = [33, 21, 100, 34, 54, 67, 88, 99, 43, 23, 43, 65, 78, 90, 11, 3, 95];
var players = [
    { name: "Sunil Gavaskar", city: "Bombay", total_runs: 10260, wickets: 10, start: 1972, end: 1987 },
    { name: "Kapil Dev", city: "Chandigarh", total_runs: 4500, wickets: 320, start: 1974, end: 1987 },
    { name: "G Vishwanath", city: "Bangalore", total_runs: 6500, wickets: 4, start: 1969, end: 1983 },
    { name: "Sandeep Patil", city: "Bombay", total_runs: 5500, wickets: 70, start: 1979, end: 1985 },
    { name: "Sachin Tendulkar", city: "Bombay", total_runs: 150000, wickets: 100, start: 1989, end: 2012 },
    { name: "Azaruddin", city: "Hyderabad", total_runs: 9548, wickets: 80, start: 1984, end: 2003 },
    { name: "Saurav Ganguly", city: "Kolkata", total_runs: 12030, wickets: 70, start: 1993, end: 2011 },
    { name: "Rahul Dravid", city: "Bangalore", total_runs: 122350, wickets: 3, start: 1993, end: 2010 },
    { name: "Yuvrag Sing", city: "Chandigarh", total_runs: 3400, wickets: 103, start: 2002, end: 2011 },
    { name: "MS Dhoni", city: "Ranchi", total_runs: 10773, wickets: 1, start: 2004, end: 2020 }
];
console.log('hello');
// for(var i=0;i<scores.length;i++){
//     console.log(scores[i]);
// }
scores.forEach(function (score) {
    console.log(score);
});
