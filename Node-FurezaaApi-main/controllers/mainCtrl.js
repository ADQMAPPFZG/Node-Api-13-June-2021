/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// var moment = require('moment');
// var request = require('request');
// var querystring = require('querystring');
// var jwt = require('jsonwebtoken');
// var crypto = require('crypto');
// var http = require("https");

// process.env.SECRET_KEY = "thisismysecretkey";
// var appmdl = require('../models/mainModel');
// var AWS = require('aws-sdk');
// var awsS3 = 'config/aws.config.json';

process.env.SECRET_KEY = "thisismysecretkey";
var appmdl = require('../models/mainModel');
var fs = require('fs');
var request = require('request');
var nodemailer = require('nodemailer');
var unirest = require("unirest");


//secure start
exports.getoldmobilesdtlsCtrl = function (req, res) {
    appmdl.getoldmobilesdtlsMdl(function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

exports.getkadapadaCtrl = function (req, res) {
    appmdl.getkadapadasdfMdl( function (err, resul) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        if(resul){
            var cnt = 0;
            var ind=0;
            for (var i = 0; i < resul[ind].cnt; i++) {
                (function (j) {
                    setTimeout(function () {
                        // if(data.totalFiles[j]!=undefined){
                            appmdl.getkadapadaMdl( function (err, results) {
                                // console.log(results);
                                
                                if (err) {
                                    res.send({ "status": 500, "msg": 'Data Submitted Failed' });
                                    return;
                                }
                                console.log(results.length);
                                
                               if(results.length>0){
                                appmdl.getkadapadabyidMdl(results[0], function (err, results1) {
                                    if (err) {
                                        res.send({ "status": 500, "msg": 'Data Submitted Failed' });
                                        return;
                                    }
                                        appmdl.getkadapadaloopMdl(results[0],results1[0], function (err, results3) {
                                            if (err) {
                                                res.send({ "status": 500, "msg": 'Data Submitted Failed' });
                                                return;
                                            }
                                       
                                        appmdl.updategetkadapadaloopMdl(results[0], function (err, results2) {
                                            if (err) {
                                                res.send({ "status": 500, "msg": 'Data Submitted Failed' });
                                                return;
                                            }
                                            cnt++;
                                            // console.log(cnt);
                                            
                                            if (cnt == resul[ind].cnt) {

                                                console.log("If case");
                                                
                                              
                                                // console.log(cnt, resul[ind].cnt);
                                                // console.log("im 319");
                                                res.send({ "status": 200, "data": results, "msg": "submited" });
                                                return;
                    
                                            }
                                           
                                        });

                                    });
                                      
                                });
                               }
                               else{

                                cnt++;
                                // console.log(cnt);
                                
                                if (cnt == resul[ind].cnt) {
                                    console.log("else case")
                                    // console.log(cnt, resul[ind].cnt);
                                    // console.log("im 319");
                                    res.send({ "status": 200, "data": results, "msg": "submited" });
                                    return;
        
                                }
                                  
                                console.log("completed")
                                // break;
                                // res.send({ "status": 200, "data": results, "msg": "submited" });
                              
                                // return;
                                
                               }
                            });
                      
                    }, (j % resul[ind].cnt) * 100);
                })(i)
            }
  
}
});

}




exports.getdataCtrl = function (req, res) {
    appmdl.getdataMdl( function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}


exports.getTesttblCtrl = function (req,res) {
    appmdl.getComData( function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });
   

}


exports.uploadstaffdataCtrl = function (req, res) {
    var data = req.body;
    var id= req.params.id;  
    // console.log(data.data);
                    var cnt = 0;
                    for (var i = 0; i < data.data.length; i++) {
                        (function (j) {
                            setTimeout(function () {
                                // if(data.totalFiles[j]!=undefined){
                                appmdl.uploadstaffdataMdl(data.data[j],id, function (err, finalResults) {
                                    if (err) {
                                        res.send(500, "Server Error");
                                        return;
                                    }
                                    // if (finalResults) {
                                    //     appmdl.PostoptionsMdl(finalResults.insertId,data.data[j],id, function (err, Itemresults) {
                                    //         if (err) {
                                    //             res.send(500, "Server Error");
                                    //             return;
                                    //         }
                                           
                                    //     });
                                    // }

                                });
                                console.log(cnt, data.data.length);
                                cnt++;
                                if (cnt == data.data.length) {
                                    console.log(cnt, data.data.length);
                                    console.log("im in");
                                    res.send({ "status": 200, "data": "success", 'msg': '' });

                                }
                            }, (j % data.data.length) * 200);
                        })(i)
                    }


}



exports.getstaffdataCtrl = function (req, res) {
    
    var id= req.params.id; 
    appmdl.getstaffdataMdl(id, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

exports.uploadmandaldataCtrl = function (req, res) {
    var data = req.body;
    var id= req.params.id;  
    console.log(data.data);
                    var cnt = 0;
                    for (var i = 0; i < data.data.length; i++) {
                        (function (j) {
                            setTimeout(function () {
                                // if(data.totalFiles[j]!=undefined){
                                appmdl.uploadmandaldataMdl(data.data[j],id, function (err, finalResults) {
                                    if (err) {
                                        res.send(500, "Server Error");
                                        return;
                                    }
                                });
                                console.log(cnt, data.data.length);
                                cnt++;
                                if (cnt == data.data.length) {
                                    console.log(cnt, data.data.length);
                                    console.log("im in");
                                    res.send({ "status": 200, "data": "success", 'msg': '' });

                                }
                            }, (j % data.data.length) * 100);
                        })(i)
                    }


}
exports.getnewmobilesdtlsCtrl = function (req, res) {
    var data = req.body;

    appmdl.getnewmobilesdtlsMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.getaccessoridtlsCtrl = function (req, res) {
    appmdl.getaccessoridtlsMdl(function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

// get product dtls start
exports.getitemsbyallidsCtrl = function (req, res) {
    var product_id = req.params.product_id;
    var tbl_id = req.params.tbl_id
    appmdl.getitemsbyallidsMdl(product_id, tbl_id, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

// get product dtls End 
//get brand models data start
exports.getbrandmodelsdataCtrl = function (req, res) {
    appmdl.getbrandmodelsdataMdl(function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//get brand models data end
//submit signup data start
exports.submitsignupdataCtrl = function (req, res) {
    var signupdata = req.body;
    var checksignupdata = req.body;
    appmdl.Signupdatachk(checksignupdata, function (err, results) {

        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        if (results.length > 0) {
            res.send({ "status": 600, 'msg': 'already registered' });
        } else {
            appmdl.submitsignupdataMdl(signupdata, function (err, results) {
                if (err) {

                    res.send(500, "Server Error");
                    return;
                }
                res.send({ "status": 200, "data": results });
            });
        }
    });

}
//submit signup data end
//submit login data start
exports.submitlogindataCtrl = function (req, res) {
    var logindata = req.body;
    appmdl.submitlogindataMdl(logindata, function (err, results) {

        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//submit login data End
//submit address data start
exports.submitaddressdataCtrl = function (req, res) {
    var addressdata = req.body;
    appmdl.submitaddressdataMdl(addressdata, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        } if (results) {
            appmdl.udateaddressindcator(addressdata, function (err, upresults) {
                if (err) {

                    res.send(500, "Server Error");
                    return;
                }
                res.send({ "status": 200, "data": upresults });
            });
        }

    });

}
//submit address data End

//get checkout address dtls start
exports.getcheckoutaddressCtrl = function (req, res) {
    var customer_id = req.params.customer_id;
    appmdl.getcheckoutaddressMdl(customer_id, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//get checkout address dtls End
//submit Post PaymentDtls start
exports.PostPaymentorderCtrl = function (req, res) {
    var orderdata = req.body;
    var cart = orderdata.cart_items;
    var customer_id = orderdata.customer_id;
    appmdl.getLatestOrderRecord(function (err, getorderresults) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        var orderincId = 0;
        if (getorderresults.length == 0) {
            orderincId = 1;
        } else {
            orderincId = getorderresults[0].id
        }
        var random_number = Math.floor(Math.random() * 5664365850) + 1 + "" + orderincId;
        appmdl.PostPaymentorderMdl(orderdata, random_number, function (err, results) {
            if (err) {
                res.send(500, "Server Error");
                return;
            }
            if (results) {
                appmdl.PostPaymentorderItemsMdl(results.insertId, cart, customer_id, function (err, Itemresults) {
                    if (err) {
                        res.send(500, "Server Error");
                        return;
                    }

                    res.send({ "status": 200, "data": Itemresults, "msg": "submited" });
                });
            }
        });
    });

}
//submit Post PaymentDtls end
//get Profile reportdtls strat
exports.getProfilereportCtrl = function (req, res) {
    var customer_id = req.params.customer_id;
    appmdl.getProfilereportmdl(customer_id, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//get Profile reportdtls End
//remove Address data start
exports.removeAddressdataCtrl = function (req, res) {
    var id = req.params.id;
    appmdl.removeAddressdataMdl(id, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//remove Address data End
//submit update profiledata start
exports.submitupdateprofileCtrl = function (req, res) {
    var updateprofile = req.body;
    appmdl.submitupdateprofileMdl(updateprofile, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//submit update profiledata End
//submit update addressdata start
exports.submitupdateaddressCtrl = function (req, res) {
    var updateaddress = req.body;
    appmdl.submitupdateaddressMdl(updateaddress, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//submit update addressdata End
//get orders data start
exports.getordersdataCtrl = function (req, res) {
    var customer_id = req.params.customer_id;
    appmdl.getordersdataMdl(customer_id, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//get orders data End
//get view oders data start
exports.getviewodersdataCtrl = function (req, res) {
    var data = req.body;
    appmdl.getviewodersdataMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
  //get view oders data End
//get latest products start
exports.getlatestproductsCtrl = function (req, res) {
    // var data = req.body;
    appmdl.getlatestproductsMdl( function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//get latest products End
//get banners data start
exports.getbannersdataCtrl = function (req, res) {
    appmdl.getbannersdataMdl( function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//get banners data end


exports.sendemailCtrl = function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        host: "my.smtp.host",
  port: 465,
        auth: {
          user: 'sales@velumurivistas.com',
          pass: 'vistas@2020'
        //   accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
        },
        tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
      });
    
      var mailOptions = {
        from: 'sales@velumurivistas.com',
        to: 'gorlajawahar@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            console.log(info);
          console.log('Email sent: ' + info.response);
        }
      });
}




//////////////////////Fahasraa start ///////////////////////////////////////////







exports.postsignupdetailsAppCtrl = function (req, res) {
    var data = req.body;
    var usr_phone = req.body.usr_phone;
console.log(data)
    appmdl.UserSignupchk(usr_phone, function (err, results) {
        console.log(results.length);
        if (err) {
 res.send({"msg":'failed'});              return;
        }
         if(results.length==0|| results.length==''){
                         console.log("Not Exists")

            appmdl.postsignupdetailsMdl(data, function (err, resultss) {
                         if (err) {
 res.send({"msg":'failed'});                             return;
                         }
 res.send({"msg":'success'});                     });
           
            
        }else{
            console.log("Already")
              res.send({"msg":'already'});
        }
         
    });
}



//login
exports.LoginAppCtrl = function (req, res) {
    var data = req.body;
    appmdl.LoginAppCtrlMdl(data, function (err, results) {
        if (err) {

            res.send({ "msg": "failed" });
            return;
        }
        console.log(results.length>0)
        if(results.length>0){
                    res.send({"msg":'success',"data":results});

        }
        else{
            res.send({"msg":'invalid'});
        }
    });
}


//prev

exports.getfamilydetailsCtrl = function (req, res) {
    var data = req.body;
    ///console.log(data);
    appmdl.getfamilydetailsMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getdirectorydetailsCtrl = function (req, res) {
    var data = req.body;
    ///console.log(data);
    appmdl.getdirectorydetailsMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getvistordetailsCtrl = function (req, res) {
    var data = req.body;
    appmdl.getvistordetailsMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getvehicledetailsCtrl = function (req, res) {
     var data = req.body;
    appmdl.getvehicledetailsMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.gethelperdetailsCtrl = function (req, res) { 
    var data = req.body;
    appmdl.gethelperdetailsMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.sahasrapostfamilydetailsCtrl = function (req, res) {
    console.log(data);
    var image_url = req.body.Photo;
    var data = req.body;
        appmdl.sahasrapostfamilydetailschekcingmdl(data, function (err, result) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
    if(result.length==0){
    appmdl.sahasrapostfamilydetailsmdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.updatefamilyimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 
    }
        
        
    });
    }else{
 res.send({ 'status': 800, 'data': result }); 
}
});
}


/////////////////venkatesh code starts///////////////////////

exports.postvisitorfamilydetailsCtrl = function (req, res) {
    
    var image_url = req.body.image_url;
    var data = req.body;
    appmdl.postvisitorfamilydetailsMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.postvisitorfamilydetailsimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 


       
    }
        
        
    });
}

exports.posthelperfamilydetailsCtrl = function (req, res) {
    
    var image_url = req.body.image_url;
    var data = req.body;
    appmdl.posthelperfamilydetailsMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.posthelperfamilydetailsimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 


       
    }
        
        
    });
}
exports.postvehiclefamilydetailsCtrl = function (req, res) {
    
    var image_url = req.body.image_url;
    var data = req.body;
       appmdl.checkvehicleparkingMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        console.log(results.length);
        
        if(results.length!=0){
             res.send({ "status": 600, 'msg': 'already registered' });
}else{
    appmdl.postvehiclefamilydetailsMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.postvehiclefamilydetailsimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            res.send({ 'status': 200, 'data': results }); 
    }
        
        
    });
}
});
}

 exports.postgatepassdetailsCtrl = function (req, res) { 
     var data = req.body;
     appmdl.postgatepassdetailsMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.postaddexitpassdetailsCtrl = function (req, res) { 
    var data = req.body;
    appmdl.postaddexitpassdetailsMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
}
// exports.postaddvisitorpassdetailsCtrl = function (req, res) { 
//     var data = req.body;
// //     if(data.indicator==2){
// //           appmdl.checkhelperdtls(data, function (err, results) {
// //         if (err) {
// //             res.send({ "status": 500, "msg": "Server Error" });
// //             return;
// //         }
// //         if (results.length > 0) {
// //             res.send({ "status": 600, 'msg': 'already registered' });
// //         } else {
// //              appmdl.postaddvisitorpassdetailsMdl(data,function (err, results) {
// //       if (err) {
// //           res.send(500, "Server Error");
// //           return;
// //       }
// //       res.send({ 'status': 200, 'data': results });
// //   });
// //         }
// //     });
        
  
// //     }else{
//          appmdl.postaddvisitorpassdetailsMdl(data,function (err, results) {
//       if (err) {
//           res.send(500, "Server Error");
//           return;
//       }
//       res.send({ 'status': 200, 'data': results });
//   }); 
//     // }
// }

exports.postaddvisitorpassdetailsCtrl = function (req, res) { 
    var data = req.body;
    console.log(data);
    if(data.ChkId!='1'){
    
    appmdl.postaddvisitorpassdetailsMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send({ 'status': 200, 'data': results });
   });
    }else{
        appmdl.ChkMblNoMdl(data, function (err, results3) {
            if (err) {
                res.send(500, "Server Error");
                return;
            }
            console.log(results3.length);
            
            if (results3.length>0) {
                 console.log("else");
                
                res.send({ 'status': 600, 'data': 'Already registered' });
               
            }else{
                 console.log("in");
                
                appmdl.postaddvisitorpassdetailsMdl(data,function (err, results) {
                    if (err) {
                        res.send(500, "Server Error");
                        return;
                    }
                    res.send({ 'status': 200, 'data': results });
                });
               
            }
        })


    }
}
 exports.getgatepassdetailsCtrl = function (req, res) { 
         var data = req.body;
     appmdl.getgatepassdetailsMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


/////////////////venkatesh code starts///////////////////////


exports.postvehicledetails = function (req, res) {
    
    var image_url = req.body.image_url;
    var data = req.body;
    appmdl.postvehicledetailsmdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.updatevehicleimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 


       
    }
        
        
    });
}
exports.postregularvisitorsdetailsCtrl = function (req, res) {
    
    var image_url = req.body.image_url;
    var data = req.body;
    appmdl.postregularvisitorsdetailsmdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.updateregularvisitorsimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 


       
    }
        
        
    });
}



exports.addhelperdetailsCtrl = function (req, res) {
    
    var image_url = req.body.image_url;
    var data = req.body;
    appmdl.addhelperdetailsmdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        
            if(results) {
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".jpg";
            appmdl.updatehelperimageMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 


       
    }
        
        
    });
}
 exports.getApprovalsdataCtrl = function (req, res) {
     var data = req.body;
     appmdl.getApprovalsdataMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send(results);
    });
}
 exports.getsocietydataCtrl = function (req, res) {
     var data = req.body;
  //   return "hello";
     appmdl.getsocietydataMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send(results);
    });
}
/// fahassara Admin Bhargav Start
 exports.getUserForApprovalCtrl = function (req, res) { 
     appmdl.getUserForApprovalCtrlMdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send(results);
    });
}

exports.postApprovalCtrl = function (req, res) {
    var data = req.body;
    // var data = req.body;
    console.log(data);
    console.log(data.allotedparking.length);
    

    appmdl.postApprovalMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        if (results && data.indicator == 5) {
            appmdl.postuserApprovalMdl(data, function (err, results1) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
                if (results1) {
                    appmdl.postremainingflatsMdl(data, function (err, results2) {
                        if (err) {
                            res.send(500, "Server Error");
                            return;
                        }
                        if (results2 && data.allotedparking.length>0) {
                            appmdl.postparkingslotMdl(data, function (err, results3) {
                                if (err) {
                                    res.send(500, "Server Error");
                                    return;
                                }
                                if (results3) {
                                    appmdl.updateparkingslotMdl(data, function (err, results4) {
                                        if (err) {
                                            res.send(500, "Server Error");
                                            return;
                                        }
                                        if (results4) {
                                    appmdl.postremainingintercomsMdl(data, function (err, results) {
                                        if (err) {
                                            res.send(500, "Server Error");
                                            return;
                                        }
                                        console.log("hitted");
                                        res.send({ status: 'Ok' });
                                    })
                                }
                                    })
                                }
                            })
                        }else{
                           res.send({ status: 'Ok' }); 
                        }
                    })
                }
            })
        } else {
            res.send({ status: 'Ok' });
        }

    });
}


exports.CancelApprovalCtrl = function (req, res) { 
    var data = req.body;
    appmdl.CancelApprovalMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({status:'Ok'});
    });
}


exports.AdminloginwithotppassCtrl = function (req, res) {
   console.log("ADMIN")
    var data = req.body;
  
        appmdl.AdminloginwithotppassCtrlMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}



exports.AdminpostsignupdetailsCtrl = function (req, res) {
    var data = req.body;
    var usr_phone = req.body.usr_phone;

    appmdl.AdminUserSignupchk(usr_phone, function (err, results) {
      //  console.log(results.length);
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        if(results.length>0){
            
            res.send({ "status": 601, "data": results });
            
        }
         if (results == '') {
        //     res.send({ "status": 601, "msg": "Not Registered!!!" });
        // }
        // else { 
            var OTP = Math.floor(100000 + Math.random() * 900000);           
             var msg_title = 'iTEK';
             var msg_txt = `YOUR ONE TIME PASSWORD IS ${OTP} `;
             var destination = usr_phone;
             var message = msg_txt;
              request(`http://sms.sunstechit.com/app/smsapi/index.php?key=55C4941BC46BE5&campaign=0&routeid=13&type=text&contacts=${destination}&senderid=EVBTEC&msg=${message}`, function (error, response, body) {
          
                 var msgData = { "messageId": body, "statusCode": response.statusCode, "smsDtls": data };
                 
                 if (response.statusCode == '200') {                                        
                     appmdl.AdminpostsignupdetailsMdl(data,OTP, function (err, results) {
                         if (err) {
                             res.send({ "status": 500, "msg": "Server Error" });
                             return;
                         }
                         res.send({ "status": 200, "data": results });
                     });
                 }else{
                    res.send({ "status": 500, "msg": "Server Error" });
                 }
             });
       }
        // } else {
        //         var OTP = Math.floor(100000 + Math.random() * 900000);               
        //          var msg_title = 'iTEK';
        //          var msg_txt = `YOUR ONE TIME PASSWORD IS ${OTP} `;
        //          var destination = phone;
        //         // console.log(destination)
        //          var message = msg_txt;
        //           request(`http://sms.sunstechit.com/app/smsapi/index.php?key=55C4941BC46BE5&campaign=0&routeid=13&type=text&contacts=${destination}&senderid=DMOSMS&msg=${message}`, function (error, response, body) {
              
        //              var msgData = { "messageId": body, "statusCode": response.statusCode, "smsDtls": data };                    
        //              if (response.statusCode == '200') {
        //                  appmdl.insertmobileMdl(OTP,phone, function (err, results) {
        //                      if (err) {
        //                          res.send({ "status": 500, "msg": "Server Error" });
        //                          return;
        //                      }
        //                      res.send({ "status": 200, "data": results });
        //                  });
        //              }
        //              else{
        //                 res.send({ "status": 500, "msg": "Server Error" });
        //              }
        //          });
        // }
    });
}
/// fahassara Admin Bhargav End

 

exports.adminAcceptFamilyMembersCtrl = function (req, res) {
     appmdl.adminAcceptFamilyMembersMdl( function (err, results) {
        if (err) {
            res.send({ 'status': 400 });
            return;
        }
        res.send( results );
    });
}




exports.postApprovalFamilyCtrl = function (req, res) { 
    var data = req.body;
    appmdl.postApprovalFamilyMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({status:'Ok'});
    });
}


exports.CancelApprovalFamilyCtrl = function (req, res) { 
    var data = req.body;
    appmdl.CancelApprovalFamilyMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({status:'Ok'});
    });
}
//remove person data start

exports.removepersondataCtrl = function (req, res) {
    var data = req.body;
        appmdl.removepersondataMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.removegatepassdataCtrl = function (req, res) {
    var data = req.body;
        appmdl.removegatepassdataMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}

//remove person data End
//get person data start
exports.getmemberdeatilsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getmemberdeatilsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
//get person data End

exports.getpassdetailsbyidCtrl = function (req, res) {
    var data = req.body;
        appmdl.getpassdetailsbyidMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}


exports.updatedaypassdetailsCtrl = function (req, res) {
    var data = req.body;
        appmdl.updatedaypassdetailsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.updatesuggestionsCtrl = function (req, res) {
    var data = req.body;
        appmdl.updatesuggestionsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}


exports.adminsuggestionsCtrl = function (req, res) {
    var data = req.body;
        appmdl.adminsuggestionsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.suggestiondatabyidCtrl = function (req, res) {
    var data = req.body;
        appmdl.suggestiondatabyidMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
//Update person data start
exports.updatememberdetailsCtrl = function (req, res) {
    var data = req.body;
        appmdl.updatememberdetailsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.updatevehiclefamilydetailsCtrl = function (req, res) {
    var data = req.body;
        appmdl.updatevehiclefamilydetailsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}

//Update person data End




//Fahasraa end //////////////////////Fahasraa  End ///////////////////////////////////////////
//sahasra new app start ///////////////////////////////////////////




exports.newLoginAppCtrl = function (req, res) {
    var data = req.body;
    appmdl.newLoginAppCtrlMdl(data, function (err, results) {
        if (err) {

            res.send({ "msg": "failed" });
            return;
        }
        console.log(results.length>0)
        if(results.length>0){
                    res.send({"msg":'success',"data":results});

        }
        else{
            res.send({"msg":'invalid'});
        }
    });
}

exports.getremainingflatsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getremainingflatsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}



exports.postaddrequestformCtrl = function (req, res) {
    var data = req.body;
        appmdl.postaddrequestformMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.getrequestformdataCtrl = function (req, res) {
    var data = req.body;
        appmdl.getrequestformdataMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}

// exports.postuploadntfcnCtrl = function (req, res) {
//     var data = req.body;
//         appmdl.postuploadntfcnMdl(data, function (err, cres) {
//         if (err) {
//             res.send({ "status": 500, "msg": "Server Error" });
//             return;
//         }
//         res.send({ "status": 200, "data": cres, "msg": '' });
        
//         return;

//     })
// }

exports.postuploadntfcnCtrl = function (req, res) {
    
   
    var data = req.body;
    console.log(data);
    console.log(data.document);
    appmdl.postuploadntfcnMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        //res.send({ 'status': 200, 'data': results });
        // console.log(req.body.document.value);
            if(results) {
                console.log("in");
                if(data.document=='' || data.document==null || data.document=='null')  {
                     console.log("if");
                   res.send({ 'status': 200, 'data': results });  
                }
      else {    
           console.log("else");
           var image_url = req.body.document.value;
        var imgcnt = 0;
      
            var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = array;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".pdf", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".pdf";
            appmdl.postuploadntfcnimgMdl(imageupload,imgcnt,results.insertId,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
               
            });
            imgcnt++;
            // if(reviewImgArr.length==imgcnt) {
            //     res.send(results);
            // } 
            res.send({ 'status': 200, 'data': results }); 


      }
    }
        
        
    });
}





exports.getchangestatusCtrl = function (req, res) {
    var data = req.body;
        appmdl.getchangestatusMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.postgatepasschangestatusCtrl = function (req, res) {
    var data = req.body;
        appmdl.postgatepasschangestatusMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.getparkingslotsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getparkingslotsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });
        res.send(  cres );
        return;

    })
}

exports.addstaffdetailsCtrl = function (req, res) {
    var data = req.body;
        appmdl.addstaffdetailsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.addshifttimingsCtrl = function (req, res) {
    var data = req.body;
        appmdl.addshifttimingsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        
        return;

    })
}
exports.getshifttimingsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getshifttimingsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });
         res.send(  cres );
        
        return;

    })
}
exports.getstaffdirectorydtlsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getstaffdirectorydtlsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });
         res.send(  cres );
        
        return;

    })
}

exports.postimpcontactCtrl = function (req, res) {
    
    var image_url = req.body.value;
    var data = req.body;
 console.log(data);
        var imgcnt = 0;
      
            // var array = image_url.split(',');
            var datetimestamp = Date.now();
            var random_number = Math.floor(100000 + Math.random() * 900000);
            var unicnumber = random_number + '' + datetimestamp;
            var base64Data = image_url;
    
            // fs.writeFile("../public_html/uploads/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
            fs.writeFile("..//public_html/uploads/" + unicnumber + ".pdf", base64Data, 'base64', function (err) {
                console.log(err);
                
            });
            imageupload = "http://www.velumurivistas.com/uploads/" + unicnumber  + ".pdf";
            console.log(imageupload);
            appmdl.postimpcontactMdl(imageupload,imgcnt,data,function (err, results) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
                res.send({ 'status': 200}); 
            });
            imgcnt++;
          
        
 
}



exports.getstaffdrctyCtrl = function (req, res) {
    var data = req.body;
        appmdl.getstaffdrctyMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });
         res.send(  cres );
        
        return;

    })
}
exports.getsurveyquestionsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getsurveyquestionsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });
        res.send({  cres });
        
        return;

    })
}



exports.AddSurveyPostCtrl = function (req, res) {
  var data = req.body;
  console.log(data);
    appmdl.AddSurveyPostMdl(data, function (err, results) {
         if (results) {
            //  console.log(results);
            appmdl.AddSurveyoptionPostMdl(results.insertId,data, function (err, results) {
                // console.log(JSON.parse(results));
                if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": results });
            });
        }
    });

}
exports.addsuggestionsCtrl = function (req, res) {
    var data = req.body;
        appmdl.addsuggestionsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        // res.send({  cres });
        
        return;

    })
}


exports.getsugestionsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getsugestionsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        // res.send({  cres });
        
        return;

    })
}

exports.uploadexceldataCtrl = function (req, res) {
    var data = req.body;
    var id= req.params.id;  
    // console.log(data.data);
                    var cnt = 0;
                    for (var i = 0; i < data.data.length; i++) {
                        (function (j) {
                            setTimeout(function () {
                                // if(data.totalFiles[j]!=undefined){
                                appmdl.uploadexceldataMdl(data.data[j],id, function (err, finalResults) {
                                    if (err) {
                                        res.send(500, "Server Error");
                                        return;
                                    }
                                    if (finalResults) {
                                        appmdl.PostoptionsMdl(finalResults.insertId,data.data[j],id, function (err, Itemresults) {
                                            if (err) {
                                                res.send(500, "Server Error");
                                                return;
                                            }
                                           
                                        });
                                    }

                                });
                                console.log(cnt, data.data.length);
                                cnt++;
                                if (cnt == data.data.length) {
                                    console.log(cnt, data.data.length);
                                    console.log("im in");
                                    res.send({ "status": 200, "data": "success", 'msg': '' });

                                }
                            }, (j % data.data.length) * 1200);
                        })(i)
                    }


}

exports.uploainvoicedataCtrl = function (req, res) {
    var data = req.body;
    var id= req.params.id;  
    console.log(data.data);
                    var cnt = 0;
                    for (var i = 0; i < data.data.length; i++) {
                        (function (j) {
                            setTimeout(function () {
                                // if(data.totalFiles[j]!=undefined){
                                appmdl.uploainvoicedataMdl(data.data[j],id, function (err, finalResults) {
                                    if (err) {
                                        res.send(500, "Server Error");
                                        return;
                                    }
                                });
                                console.log(cnt, data.data.length);
                                cnt++;
                                if (cnt == data.data.length) {
                                    console.log(cnt, data.data.length);
                                    console.log("im in");
                                    res.send({ "status": 200, "data": "success", 'msg': '' });

                                }
                            }, (j % data.data.length) * 600);
                        })(i)
                    }


}
exports.getinvoicedataCtrl = function (req, res) {
    var data = req.body;
        appmdl.getinvoicedataMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });
        res.send({  cres });
        
        return;

    })
}


exports.AddSurveyanswersPostCtrl = function (req, res) {
    var data = req.body;
    console.log(data);
      appmdl.AddSurveyanswersPostMdl(data, function (err, results) {
           if (results) {
            //    console.log(results);
              appmdl.addsrvyatemptMdl(data, function (err, cres) {
                  // console.log(JSON.parse(results));
                  if (err) {
              res.send({ "status": 500, "msg": "Server Error" });
              return;
          }
          res.send({ "status": 200, "data": cres });
              });
          }
      });
  
  }

exports.addnoticeCtrl = function (req, res) {
    var data = req.body;
        appmdl.addnoticeMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}

exports.getnoticedataCtrl = function (req, res) {
    var data = req.body;
        appmdl.getnoticedataMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.removestaffdirCtrl = function (req, res) {
    var data = req.body;
        appmdl.removestaffdirMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.getassignedflatsCtrl = function (req, res) {
    var data = req.body;
        appmdl.getassignedflatsMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
//edit
exports.editinvoicdtlsCtrl = function (req, res) {
    var rcpt = req.body;
    //console.log(rcpt);
    appmdl.editinvoicdtlsMdl(rcpt, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}


exports.getsurveyeditbyidCtrl = function (req, res) {
    var id = req.params.id;
    console.log(id);
    appmdl.getsurveyeditbyidMdl

        (id, function (err, results) {
            if (err) {
                res.send({ "status": 500, "msg": 'Data Submitted Failed' });
                return;
            }
            res.send({ 'status': 200, 'data': results });
        });
}


exports.getsurvyanswdtlsCtrl = function (req, res) {
    var id = req.params.id;
    console.log(id);
    appmdl.getsurvyanswdtlsMdl

        (id, function (err, results) {
            if (err) {
                res.send({ "status": 500, "msg": 'Data Submitted Failed' });
                return;
            }
            res.send({ 'status': 200, 'data': results });
        });
}

exports.updateanswrrsdataCtrl = function (req, res) {
    var data = req.body;
    appmdl.updateanswrrsdataMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.updatequestionsdataCtrl = function (req, res) {
    var data = req.body;
    appmdl.updatequestionsdataMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.uploadeditinvoicdtCtrl = function (req, res) {
    var data = req.body;
    console.log(data.data);
    appmdl.uploadeditinvoicdtMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.itemiconsendCtrl = function (req, res) {
    var evidenceData = req.body;  
    var imageupload = '';
 
    appmdl.itemiconsendCtrlMdl(evidenceData, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        if (results) {
            console.log('results')
            console.log(results)
            var imgcnt = 0;

            //start
                var array = evidenceData.uploadfile.split(',');            
                var datetimestamp = Date.now();
                var random_number = Math.floor(100000 + Math.random() * 900000);
                var unicnumber = random_number + '' + datetimestamp;
                var base64Data = array[1];

                fs.writeFile("..//public_html/gallery/" + unicnumber + "."+evidenceData.filetype, base64Data, 'base64', function (err) {
                    console.log(err);
                });
                imageupload = "http://www.velumurivistas.com/gallery/" + unicnumber + "."+evidenceData.filetype;
                
         
            //end

                appmdl.itemiconupdateImagesMdl(imageupload, imgcnt, results.insertId, function (err, results) {
                    if (err) {
                        res.send(500, "Server Error");
                        return;
                    }
                    res.send({ "status": 200, "data": results, "msg": "submited" });
                });
            //Get product Ratings...
        }
    });
}

exports.getimgsdtlsCtrl = function (req, res) {
    appmdl.getimgsdtlsMdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.deletgalryimgsCtrl = function (req, res) {
    var icons=req.params;
    appmdl.deletgalryimgsMdl(icons,function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results ,"msg":"submited"});
       });
     
}

exports.getqtnanswsdataCtrl = function (req, res) {
    var data = req.body;
    console.log(data);
    appmdl.getqtnanswsdataMdl(data, function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}




exports.getflatnumbersCtrl = function (req, res) {
    var data = req.body;
    //console.log(rcpt);
    appmdl.getflatnumbersMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

exports.getsurveycntsCtrl = function (req, res) {
    var data = req.body;
    //console.log(rcpt);
    appmdl.getsurveycntsMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.postsrvytousersCtrl = function (req, res) {
    var data = req.body;
    //console.log(rcpt);
    appmdl.postsrvytousersMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

exports.postsrvytousersCtrl = function (req, res) {
    var data = req.body;
    console.log(data);
      appmdl.getnotassignedusersMdl(data, function (err, results) {
           if (results) {
            //    console.log(results);
              appmdl.postsrvytousersMdl(results,data, function (err, results) {
                  // console.log(JSON.parse(results));
                  if (err) {
              res.send({ "status": 500, "msg": "Server Error" });
              return;
          }
          res.send({ "status": 200, "data": results });
              });
          }
      });
  
  }

  
  exports.getsurveycntbyuserCtrl = function (req, res) {
    var data = req.body;
    appmdl.getsurveycntbyuserMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.getresultbyuserCtrl = function (req, res) {
    var data = req.body;
    appmdl.getresultbyuserMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.addhelperdtlsCtrl = function (req, res) {
    var data = req.body;
    appmdl.addhelperdtlsMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

exports.gethelperdtlsCtrl = function (req, res) {
    var data = req.body;
    appmdl.gethelperdtlsMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.getinvoicestatusCtrl = function (req, res) {
    var data = req.body;
    appmdl.getinvoicestatusMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
//helpers start
exports.gethelperVisitortCtrl = function (req, res) {
    var data = req.body;    
        appmdl.gethelperVisitortMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}
//helpers end

exports.getresidentsflatsCtrl = function (req, res) {
    var data = req.body;
    appmdl.getresidentsflatsMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.uploadnoticentfcnCtrl = function (req, res) {
    var data = req.body;
    appmdl.uploadnoticentfcnMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}
exports.residentnoticeCtrl = function (req, res) {
    var data = req.body;
    appmdl.residentnoticeMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send(results);
    });

}
exports.getassignedparkingslotsCtrl = function (req, res) {
    var data = req.body;
    appmdl.getassignedparkingslotsMdl(data, function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": 'Data Submitted Failed' });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": "submited" });
    });

}

exports.removefaqCtrl = function (req, res) {
    var data = req.body;
        appmdl.removefaqMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}

exports.removereqcntrCtrl = function (req, res) {
    var data = req.body;
        appmdl.removereqcntrMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.updatereqformCtrl = function (req, res) {
    var data = req.body;
        appmdl.updatereqformMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}
exports.submitownerCtrl = function (req, res) {
    var data = req.body;
        appmdl.getownerMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        console.log(cres);
          appmdl.submitownerMdl(data,cres[0], function (err, results) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": results, "msg": '' });
        
        return;

    })

    })
}


exports.getreqcntrdtlsbyIdCtrl = function (req, res) {
    var data = req.body;
        appmdl.getreqcntrdtlsbyIdMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        }
        res.send({ "status": 200, "data": cres, "msg": '' });
        
        return;

    })
}





// kiran code satrt
exports.getrandruserloginCtrl = function (req, res) {
    var data = req.body;
    
        appmdl.getrandruserloginMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}


exports.gettotalvalunteerjoblistCtrl = function (req, res) {
    var data = req.body;
    
        appmdl.gettotalvalunteerjoblistMdl(data, function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}

exports.gatcastlistCtrl = function (req, res) {
        appmdl.gatcastlistMdl(function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}

exports.getrelationshipCtrl = function (req, res) {
        appmdl.getrelationshipMdl(function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}
exports.getbanklistCtrl = function (req, res) {
        appmdl.getbanklistMdl(function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}
exports.geteducationqualificationCtrl = function (req, res) {
        appmdl.geteducationqualificationMdl(function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}
exports.getoccupationCtrl = function (req, res) {
        appmdl.getoccupationMdl(function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}
exports.getcattlelistCtrl = function (req, res) {
        appmdl.getcattlelistMdl(function (err, cres) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else if (cres.length==0) {
            res.send({ "status": 300, "msg": 'Data Empty' });
            return;
        } else {
            res.send({ "status": 200, "data": cres, "msg": "submited" });
            return;
        }
        // res.send({ "status": 200, "data": cres, "msg": '' });   

    })
}


exports.postfamilydetailsCtrl = function (req, res) {
    var rawdata = req.body;
    
    appmdl.postfamilydetailsMdl(rawdata, function (err, familyresult) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else {
            res.send({ "status": 200, "data": familyresult, "msg": "submited" });
            return;
            
        }
    })
}
    
    exports.postnewfamilydetailsCtrl = function (req, res) {
    var rawdata = req.body;
    
    appmdl.postnewfamilydetailsMdl(rawdata, function (err, familyresult) {
        if (err) {
            res.send({ "status": 500, "msg": "Server Error" });
            return;
        } else {
            res.send({ "status": 200, "data": familyresult, "msg": "submited" });
            return;
            
        }
    })
    
    //Kiran Code end
    
    
    
    
    // var familydetails = rawdata.familydetails;
    // var documents = rawdata.documents
    // // console.log(rawdata);
    // console.log(familydetails);
    // appmdl.postfamilydetailsMdl(familydetails, function (err, familyresult) {
    //     if (err) {
    //         res.send({ "status": 500, "msg": "Server Error" });
    //         return;
    //     } else if (familyresult.length == 0) {
    //         res.send({ "status": 300, "msg": 'Data Empty' });
    //         return;
    //     } else {
    //         console.log(documents);
    //         appmdl.postdocumentdata(familyresult.insertId, documents, function (err, cres) {
    //             if (err) {
    //                 res.send({ "status": 500, "msg": "Server Error" });
    //                 return;
    //             }
    //             var imgCnt = 0;
    //             for (var i = 0; i < documents.length; i++) {
    //                 var aadharimage = documents[i].aadharimage;
    //                 // var marriagecirtificateimg = documents[i].marriagecirtificateimg;
    //                 // var passportfile = documents[i].passportfile;
    //                 // var voteridfile = documents[i].voteridfile;
    //                 // var drivinglicencefile = documents[i].drivinglicencefile;
    //                 // var schooltcfile = documents[i].schooltcfile;
    //                 // var persondesibilityfile = documents[i].persondesibilityfile;
    //                 // var pancardfile = documents[i].pancardfile;


    //                 var datetimestamp = Date.now();
    //                 var random_number = Math.floor(100000 + Math.random() * 900000);
    //                 var unicnumber = random_number + '' + datetimestamp;
    //                 // require("fs").writeFile("out.jpg", base64Data, 'base64', function(err,result) {
    //                 fs.writeFile(".././public_html/offlineuploads/" + unicnumber + ".jpg", aadharimage, 'base64', function (err) {
    //                     //console.log(err);
    //                 });

    //                 // var imgurl = 'http://velumuriinfra.com/proof_images/"+unicnumber+".jpg';
    //                 var imageupload = "http://velumuriinfra.com/offlineuploads/" + unicnumber + ".jpg";
    //                 //  console.log(imageupload, results.insertId, i);
    //                 // appmdl.updatedocuments(imageupload, results.insertId, i, function (err, upresults) {
    //                 //     if (err) {
    //                 //         res.status(500).send("Server Error");
    //                 //         return;
    //                 //     }
    //                 //     imgCnt++;

    //                 //     if (documents.length == imgCnt) {
    //                 //         // res.send({ 'status': 200, 'data': results });
    //                 //     }

    //                 // });
    //             }
    //             res.send({ "status": 200, "data": cres, "msg": "submited" });
    //             return;
    //         })
    //     }
    // })
}


// exports.posthouseleveldataCtrl = function (req, res) {
//     var rawdata = req.body;
//     var houseleveldata = rawdata.houseleveldata;
//     var documents = rawdata.documents
//     console.log(rawdata);
//     appmdl.posthouseleveldataMdl(houseleveldata, function (err, cres) {
//         if (err) {
//             res.send({ "status": 500, "msg": "Server Error" });
//             return;
//         } else if (cres.length == 0) {

//             var imgCnt = 0;
//             for (var i = 0; i < documents.length; i++) {
//                 var base64Data = documents[i].img_url;
//                 var datetimestamp = Date.now();
//                 var random_number = Math.floor(100000 + Math.random() * 900000);
//                 var unicnumber = random_number + '' + datetimestamp;
//                 // require("fs").writeFile("out.jpg", base64Data, 'base64', function(err,result) {
//                 fs.writeFile(".././public_html/proof_images/" + unicnumber + ".jpg", base64Data, 'base64', function (err) {
//                     //console.log(err);
//                 });

//                 // var imgurl = 'http://velumuriinfra.com/proof_images/"+unicnumber+".jpg';
//                 var imageupload = "http://velumuriinfra.com/proof_images/" + unicnumber + ".jpg";
//                 //  console.log(imageupload, results.insertId, i);
//                 appmdl.updateguestformImagesMdl(imageupload, results.insertId, i, function (err, upresults) {
//                     if (err) {
//                         // res.send(500, "Server Error");
//                         res.status(500).send("Server Error");
//                         return;
//                     }
//                     imgCnt++;

//                     if (documents.length == imgCnt) {
//                         res.send({ 'status': 200, 'data': results });
//                     }


//                 });


//             }



//             res.send({ "status": 300, "msg": 'Data Empty' });
//             return;
//         } else {
//             res.send({ "status": 200, "data": cres, "msg": "submited" });
//             return;
//         }
//         // res.send({ "status": 200, "data": cres, "msg": '' });   

//     })
// }

// kiran code end



exports.getplvmCtrl = function (req, res) {
    console.log("hitted");
var req = unirest("POST", "https://prdcfms.apcfss.in:44301/RESTAdapter/Polavaram/BillUpdate");

req.headers({
  "postman-token": "54894276-666a-a8d8-31f4-c1ccdce0684f",
  "cache-control": "no-cache",
  "authorization": "Basic ZXhwY21hcHA6YXAmZXhwYmlsbEAxOA==",
  "content-type": "application/json"
});

req.type("json");
req.send({
  "ROW": {
    "DDO": "03142302001",
    "HOA": "4700011201249500502VN"
  }
});

req.end(function (ress) {
    console.log(ress.body.HEADER.length);
  if (ress.error) throw new Error(ress.error);
//   if(ress.body.HEADER.length>0){
//      appmdl.postcfmsMdl(ress.body.HEADER, function (err, familyresult) {
//         if (err) {
//             res.send({ "status": 500, "msg": "Server Error" });
//             return;
//         } else {
//             res.send({ "status": 200, "data": familyresult, "msg": "submited" });
//             return;
            
//         }
//     })
//   }else{
//      res.send({ "status": 200, "data": ress.body, "msg": '' }); 
//   }

  res.send({ "status": 200, "data": ress.body, "msg": '' }); 
});
}

exports.getfacilitytimingsCtrl = function (req, res) {
    var data = req.body;
    appmdl.getfacilitytimingsMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send(results);
   });
}


    
exports.postcreatingfacilityCtrl = function (req, res) {
    var data = req.body;
    appmdl.postcreatingfacilityMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send({ "status": 200, "data": results, "msg": '' }); 
   });
}


exports.getfacilityclassesCtrl = function (req, res) {
    var data = req.body;
    appmdl.getfacilityclassesMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send(results);
   });
}

exports.postusrbookingfacilityCtrl = function (req, res) {
    var data = req.body;
    appmdl.CheckusrbookingfacilityMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       if(results.length==0){
           console.log("In");
           
       appmdl.checkusrbookingfacilityCountsMdl(data,function (err, results1) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        console.log(results1.length);
        
       if(results1.length!=0){
           
        appmdl.postusrbookingfacilityMdl(data,function (err, results2) {
            if (err) {
                res.send(500, "Server Error");
                return;
            }
            appmdl.postusrbookingfacilityCountsMdl(data,results1[0].booked_count,function (err, results2) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
                res.send({ "status": 200, "data": results2, "msg": '' }); 
            });
        });
       }else{
        res.send({ "status": 800, "data": results1, "msg": '' }); 
       }
    });
}else{
console.log("else");

    res.send({ "status": 600, "data": results, "msg": '' });  
}
   });
}



exports.postusrcancelfacilityCtrl = function (req, res) {
    var data = req.body;
    console.log(data);
    
    appmdl.getbookingcountsMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       console.log(results[0].booked_count);
       appmdl.Chkcancellationtimings(data,function (err, timeresults) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }

        if(timeresults[0].timediff < "01:00:00"){
            console.log(timeresults[0].timediff < "01:00:00");
            
            appmdl.postusrcancelfacilityMdl(data,function (err, cancelresults) {
                if (err) {
                    res.send(500, "Server Error");
                    return;
                }
                appmdl.postusrcancelfacilityCountsMdl(data,results[0].booked_count,function (err, updateresults) {
                    if (err) {
                        res.send(500, "Server Error");
                        return;
                    }
                    res.send({ "status": 200, "data": updateresults, "msg": '' }); 
            
                });
        
            });
        }else{
            res.send({ "status": 500, "data": timeresults, "msg": '' }); 
        }
    });
       
   });
}

exports.splittimingsCtrl = function (req, res) {
    var data = req.body;
    appmdl.splittimingsMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send(results);
   });
}

exports.postfacilitytimingCtrl = function (req, res) {
    var data = req.body;
    appmdl.postfacilitytimingMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send({ "status": 200, "data": results, "msg": '' }); 
   });
}

exports.getselecteddatetimeCtrl = function (req, res) {
    var data = req.body;
    appmdl.getselecteddatetimeMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send({ "status": 200, "data": results, "msg": '' }); 
   });
}

exports.bookusrfacilityCtrl = function (req, res) {
    var data = req.body;
    var total=data.postuserbookingArr[0].person_count;
    console.log(data);
    
    appmdl.CheckusrbookingfacilityMdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       if(results.length==0){
           console.log("In");
           
       appmdl.checkusrbookingfacilityCountsMdl(data,function (err, results1) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        console.log(results1[0].cnt);
        var curent_person_count=results1[0].cnt;
        console.log(total,curent_person_count);
        
       if(total-results1[0].cnt!=0){
           
        appmdl.postusrbookingfacilityMdl(data,function (err, results2) {
            if (err) {
                res.send(500, "Server Error");
                return;
            }
            res.send({ "status": 200, "data": results2, "msg": '' }); 
        });
       }else{
        res.send({ "status": 800, "data": results1, "msg": '' }); 
       }
    });
}else{
console.log("else");

    res.send({ "status": 600, "data": results, "msg": '' });  
}
   });
}

exports.postusrcancelfacilitybyidCtrl = function (req, res) {
    var data = req.body;
//     appmdl.postusrcancelfacilitybyidMdl(data,function (err, results) {
//        if (err) {
//            res.send(500, "Server Error");
//            return;
//        }
//        res.send({ "status": 200, "data": results, "msg": '' }); 
//    });
appmdl.Chkcancellationtimings(data,function (err, timeresults) {
    if (err) {
        res.send(500, "Server Error");
        return;
    }

    if(timeresults[0].timediff < "01:00:00"){
        console.log(timeresults[0].timediff < "01:00:00");
        
        appmdl.postusrcancelfacilitybyidMdl(data,function (err, cancelresults) {
            if (err) {
                res.send(500, "Server Error");
                return;
            }
            res.send({ "status": 200, "data": cancelresults, "msg": '' }); 
        });
    }else{
        res.send({ "status": 500, "data": timeresults, "msg": '' }); 
    }
});
}

exports.getbookedfacilitybyidCtrl = function (req, res) {
    var data = req.body;
    appmdl.getbookedfacilitybyidmdl(data,function (err, results) {
       if (err) {
           res.send(500, "Server Error");
           return;
       }
       res.send( results ); 
   });
}

exports.postusrrebookingfacilityCtrl = function (req, res) {
    var data = req.body;    
    console.log(data);
    
var total=data.postuserbookingArr[0].person_count; 
appmdl.checkusrbookingfacilityCountsMdl(data,function (err, results1) {
    if (err) {
        res.send(500, "Server Error");
        return;
    }
    console.log(results1[0].cnt);
    var curent_person_count=results1[0].cnt;
    console.log(total,curent_person_count);
    
   if(total-results1[0].cnt!=0){
       
    appmdl.postusreditbookingfacilityMdl(data,function (err, results2) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ "status": 200, "data": results2, "msg": '' }); 
    });
   }else{
    res.send({ "status": 800, "data": results1, "msg": '' }); 
   }
});
}



exports.getallotedtimeCtrl = function (req, res) {
    var data = req.body;
    appmdl.getallotedtimeMdl(data,function (err, results) {
      if (err) {
          res.send(500, "Server Error");
          return;
      }
      res.send( results ); 
  });
}
exports.getrelationsCtrl = function (req, res) {
    var data = req.body;
    appmdl.getrelationsMdl(data,function (err, results) {
      if (err) {
          res.send(500, "Server Error");
          return;
      }
      res.send( results ); 
  });
}



exports.postimagesdataCtrl = function (req, res) {    

    var imgCnt = 0;
    var aadharimage = "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KaWGU5pwKdGEt0itA+UdTBOulFJKDac04VKiCW+RWgfKO9hMmfDLL7+8OfbYY5sjjjiiectb3tKcddZZzb333jsWOn3auXNnYqZ09dVXN5/5zGdmtAxKKaUU0oRLiSa8RWodKO9gM2HCb7jhhmTAf/aznzX33Xdfc9NNNzUf+chHmosuumgsxvTplFNOab797W+nz2eeeWbzxS9+MX3ulTThSiml+kWacCnRhLdIrQPlHWwmTDij4B//+McnGFEM+fnnnz+21RtpwpVSSg2zNOFSoglvkVoHyjvYTJjw22+/vTn++OObU089tbnjjjvG9t4vDPk73/nO5sUvfnHz4Q9/OI2co9tuu6056aSTmpe+9KXNG97whuYHP/hBGkn/6U9/OsFMh7nG6H76059Ox7z1rW9NBpiwCGcqDJx44onpAYC/YY7PO++85uSTT54wRYa8GK1/29velsp2wgknNLfeemsK4y/HR9nOPffcFB8oJ/te9apXpTif+tSnUj4RxnQcjqOc1FEppZTqhTThUqIJb5FaB8o72EyYcIT5/upXv9q87nWva4477rjmsssuS6b0+uuvT+YW4832hRdemMzp3XffneJ/5StfSZ9vvPHG5oMf/GBz5ZVXdjXhmN7TTz993EyHCY/PcRwm+v3vf38y6sQlz3J6zHXXXde8973vbX7xi1+ksp1xxhnJqN91111pdDvyoezU6eKLL07le/e73z1+DOY+/hfg5z//efPJT34yPZRw3Pe+973mm9/85lhuSiml1PRKEy4lmvAWqXWgvIPNlAkPYT4vvfTSZG4x0z/60Y/GR6iDY445JplzRsWvuuqqsSObZH7vueeeriYcc4yxDnUy4RhkTD4j2MxRJy/+5sJAf+ELX0hxEWW/8847kznngSBGxRFp88BQHpNPR2FuelnXj33sY+khQymllJpuacKlRBPeIrUOlHewmTDhtfnfYYgxrZ/73OeSwc2F2cWgTpcJR4xMM32Fsn3pS18aN84hHhD2xoTneeQm/Gtf+9r4S6JKKaVUr6UJlxJNeIvUOlDewWbChGN2jz766PEpGkzHwGCfdtppydAyfQNjTRij0VdccUUyvPl0lJtvvjmNVvOSJ+l96EMfSulgbjG9UzXhuanGUDM9hPnq5F+qnI5yzjnnpAcGjiOfmI7CVJmYjkLejOTXpqPwPwBHHXVU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g4kmXEREZJbDiLgMPrVzK4OLJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMJFRERERHqMJlxEREREpMdowkVEREREeowmXERERESkx2jCRURERER6jCZcRERERKTHaMIzHvawh4mIiIjMCmpeR/oHTfgYtYtXREREZJCpeR7pDzThY9QuXBEREZFBpuZ5pD/QhI9Ru3BFREREBpma55H+QBM+Ru3CFRERERlkap5H+gNN+Bi1C1dERERkkKl5HukPNOFj1C5cERERkUGm5nmkP9CEj1G7cEVEREQGmZrnkf5AEz5G7cIVERERGWRqnkf6A034GLULV0RERGSQqXke6Q804WPULlwRERGRQabmeaQ/0ISPUbtwRURERAaZmueR/kATPkbtwhUREREZZGqeR/oDTfgYtQtXREREZJCpeR7pDzThY9QuXBEREZFBpuZ5pD/QhI9Ru3BFREREBpma55H+QBM+Ru3CFRERERlkap5H+gNN+Bi1C1cGj9NOO625+OKLq2EzzUte8pLmhhtuaN797ndXw6VOm+1GWrfddlvz8Y9/vBou3fmP//iPRC2sG5w72n2mr33y37lzZ4O8BmRYqHke6Q804WPULtzp4j3veU9z1113NR/96Eer4cPKX/7lXzZXXXVVMtK18KmgCZ997Em7cf5z3Xfffc1NN93UfPCDH2we/vCH96UJ7xeDOhUuvPDC5uc//3nzZ3/2Z9XwTuxJHdv4HuhErRx//ud/3px33nnNPffck66ZW265pfn0pz+drpeIU15X9957b3P55Zc3b3zjG8fj5Dz2sY9tvv3tb48bftL8yEc+Mh7O9ZeL+8E555yTypKnQ/pXX311uo7h2muvbd75znemsGinXGU6ZT4hjvvMZz4zXr6apqP9ZWaoeR7pDzThY9Qu3OniggsuSF+Wl1xySfPoRz+6GmcY0YRLjT014VxDXEts8/fUU09N/e24447ThM8Qe1LHXprwpz71qc1ll102fn1xfXzxi19M18vnP//58ePy6wpz/i//8i/NT3/60/SA98IXvnA8XvDVr341hWGi/+iP/iildeutt46bdq4/ykF+GPa3ve1tydRfeeWVzd/+7d+mOC972ctSGt///vebI444Yvxavv3225MRL9uJdI466qhk+HmooJx5PlG2Gv3YL6Q9ap5H+oM5tZ3DSO3CnQ7++Z//ubnuuuvSl/SNN97YvOY1r5kQjoE899xzk0Fn5OOOO+5oTjzxxAlx8rj5jSq/wfClyo3l61//evoiJy1GVPhij/h8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";
    var datetimestamp = Date.now();
    var random_number = Math.floor(100000 + Math.random() * 900000);
    var unicnumber = random_number + '' + datetimestamp;
    // require("fs").writeFile("out.jpg", base64Data, 'base64', function(err,result) {
    fs.writeFile(".././public_html/offlineuploads/" + unicnumber + ".jpg", aadharimage, 'base64', function (err) {
        //console.log(err);
    });

    var imageupload = "http://velumurivistas.com/offlineuploads/" + unicnumber + ".jpg";
    console.log(imageupload);
    res.send({ "status": 200, "data": "", "msg": "submited" });
    return;  
}

