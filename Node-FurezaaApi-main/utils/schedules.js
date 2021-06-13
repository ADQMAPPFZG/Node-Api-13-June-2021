var schedule = require("node-schedule");
var mainCtrl = require('../controllers/mainCtrl.js');

exports.scheduleScripts = function(callback) {

  schedule.scheduleJob('*/5 * * * *', function() {
    //  console.log("schedule Every 5 minutes");
      //  Script for assert Status Checking           
     //mainCtrl.wakeupAlert_publish( function(err, results) {
        //  if(err) { console.log("err "+err); return; }
          
    //});

  });
}