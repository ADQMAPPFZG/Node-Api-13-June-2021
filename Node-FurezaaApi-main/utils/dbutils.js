// Standard Inclusions
// var log    = require(appRoot+'/utils/logmessages');
// var std    = require(appRoot+'/utils/standardMessages');
//var mysql           = require('mysql');
/**************************************************************************************
* Controller     : getModuleMetaData
* Parameters     : None
* Description    : Get Module Related Metadata and generates the  File Code
* Change History :
* 11/29/2016    - Sunil Mulagada - Initial Function
* 12/30/2016    - Sunil Mulagada - Added A condition if callback is not send. Then it returns a Promise
***************************************************************************************/
exports.execQuery = function (ConPool, Qry, cntxtDtls, callback) {
      //console.log('cntxtDtls');
      //var Qry=mysql.escape(Qry);
      //console.log("Harish KKK");
      // console.log(Qry);

      if (callback && typeof callback == "function") {

            ConPool.getConnection(function (err, connection) {    // get connection from Connection Pool 
                  if (err) { console.log(err); callback(err, null); return err; }

                  // Execute the query
                  connection.query(Qry, function (err, rows) {
                        connection.release();                  // Release connection back to Pool  
                        if (err) { console.log("error2"); callback(true, null); return; } // Handle Query Errors          
                        callback(false, rows);                 // Send the results back  
                        return;
                  });
            });

      } else {
            return new Promise(function (resolve, reject) {
                  ConPool.getConnection(function (err, connection) {    // get connection from Connection Pool 
                        if (err) {
                              // log.db.conError(cntxtDtls,Qry,err.code,err.fatal); 
                              reject({ "err_status": 500, "err_message": "internel server" });
                        } else {   // Execute the query

                              connection.query(Qry, function (err, rows) {
                                    console.log(rows);
                                    connection.release();                  // Release connection back to Pool  
                                    if (err) {
                                          // log.db.qryError(cntxtDtls,Qry,err.code,err.fatal); 
                                          reject({ "err_status": 500, "err_message": "internal server" });
                                    } // Handle Query Errors 
                                    else {
                                          resolve(rows);                 // Send the results back  
                                    }
                              }); // End of Qry Execuiton
                        }

                  }); // End of get Connection

            }); // End of Promise
      } // End of Else

};