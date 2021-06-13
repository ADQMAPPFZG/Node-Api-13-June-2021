var sqldb = require('../config/dbconnect');
//var dbConn = require('../config/dbconfig');

var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');



exports.getkadapadasdfMdl = function (callback) {
	var cntxtDtls = "in getkadapadasdfMdl";
	var QRY_TO_EXEC = `SELECT count(*) as cnt from kadapa_dtl_t `;
    //  console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// ORDER BY RAND() limit 1
exports.getkadapadaMdl = function (callback) {
	var cntxtDtls = "in getkadapadaMdl";
	var QRY_TO_EXEC = `SELECT id,mandal_name,total from mandal_dtl_t where d_in=0 and total!=0 ORDER BY RAND() limit 1`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getkadapadabyidMdl = function (data,callback) {
	// console.log(data);
	
	var cntxtDtls = "in getkadapadabyidMdl";
	var QRY_TO_EXEC = `select * from kadapa_dtl_t where  working_id!='${data.id}' and  residence_id!='${data.id}'  and allot_in=0 ORDER BY RAND() LIMIT 1`;
   
	// var QRY_TO_EXEC = `update kadapa_dtl_t set post_mandal='${data.mandal_name}', allot_in=1 where  indicator=1 and  residence_id!='${data.id}'  and allot_in=0 LIMIT 1`;
    //  console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getkadapadaloopMdl = function (data,data1,callback) {
	// console.log(data);
	
	var cntxtDtls = "in getkadapadaloopMdl";
	// var QRY_TO_EXEC = `update kadapa_dtl_t set post_mandal='${data.mandal_name}', allot_in=1 where  working_id!='${data.id}' and  residence_id!='${data.id}'  and allot_in=0 order by indicator asc LIMIT 1`;
	var QRY_TO_EXEC = `update kadapa_dtl_t set post_mandal='${data.mandal_name}', allot_in=1 where  emp_id='${data1.emp_id}'`;
	// var QRY_TO_EXEC = `update kadapa_dtl_t set post_mandal='${data.mandal_name}', allot_in=1 where  indicator=1 and  residence_id!='${data.id}'  and allot_in=0 LIMIT 1`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.updategetkadapadaloopMdl = function (data,callback) {
	var count= data.total;
	
	
	var quantity=count-1;
	// console.log(count,"+",quantity);
	
	var cntxtDtls = "in updategetkadapadaloopMdl";
	var QRY_TO_EXEC = `update mandal_dtl_t set total='${quantity}' where id='${data.id}'`;
    //  console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getdataMdl = function (callback) {
	
	var cntxtDtls = "in getdataMdl";
	var QRY_TO_EXEC = `select * from kadapa_dtl_t where allot_in!=0`;
    //  console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.uploadstaffdataMdl = function (data,id,callback) {
    console.log(data)
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in uploadstaffdataMdl";

if  (data.s_no){ var s_no= data.s_no.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var s_no= data.s_no;}
if  (data.election_id){ var election_id= data.election_id.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var election_id= data.election_id;}
if  (data.emp_cd){ var emp_cd= data.emp_cd.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var emp_cd= data.emp_cd;}
if  (data.name){ var name= data.name.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var name= data.name;}
if  (data.desgntn){ var desgntn= data.desgntn.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var desgntn= data.desgntn;}
if  (data.sex){ var sex= data.sex.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var sex= data.sex;}
if  (data.dob){ var dob= data.dob.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var dob= data.dob;}
if  (data.age){ var age= data.age.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var age= data.age;}
if  (data.sector){ var sector= data.sector.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var sector= data.sector;}
if  (data.scale){ var scale= data.scale.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var scale= data.scale;}
if  (data.basic){ var basic= data.basic.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var basic= data.basic;}
if  (data.dept_nm){ var dept_nm= data.dept_nm.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var dept_nm= data.dept_nm;}
if  (data.add_of_ofc){ var add_of_ofc= data.add_of_ofc.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var add_of_ofc= data.add_of_ofc;}
if  (data.g_ng){ var g_ng= data.g_ng.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var g_ng= data.g_ng;}
if  (data.dt_of_rtmt){ var dt_of_rtmt= data.dt_of_rtmt.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var dt_of_rtmt= data.dt_of_rtmt;}
if  (data.voter_id){ var voter_id= data.voter_id.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var voter_id= data.voter_id;}
if  (data.residential_add){ var residential_add= data.residential_add.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var residential_add= data.residential_add;}
if  (data.residence_mandal){ var residence_mandal= data.residence_mandal.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var residence_mandal= data.residence_mandal;}
if  (data.working_mandal){ var working_mandal= data.working_mandal.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var working_mandal= data.working_mandal;}
if  (data.native_mandal){ var native_mandal= data.native_mandal.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var native_mandal= data.native_mandal;}
if  (data.previous_work){ var previous_work= data.previous_work.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var previous_work= data.previous_work;}
if  (data.mobile_no){ var mobile_no= data.mobile_no.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var mobile_no= data.mobile_no;}
if  (data.last_4_years){ var last_4_years= data.last_4_years.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var last_4_years= data.last_4_years;}
if  (data.differntly_abled_persons){ var differntly_abled_persons= data.differntly_abled_persons.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var differntly_abled_persons= data.differntly_abled_persons;}
if  (data.criminal_cases){ var criminal_cases= data.criminal_cases.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var criminal_cases= data.criminal_cases;}
if  (data.excedd_years){ var excedd_years= data.excedd_years.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var excedd_years= data.excedd_years;}
if  (data.remarks){ var remarks= data.remarks.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var remarks= data.remarks;}
if  (data.post_mandal){ var post_mandal= data.post_mandal.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var post_mandal= data.post_mandal;}
if  (data.randomised_sl_no){ var randomised_sl_no= data.randomised_sl_no.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");} else{ var randomised_sl_no= data.randomised_sl_no;}

    
    
	var QRY_TO_EXEC = `INSERT INTO  kadapa_dtl_t(s_no,election_id,emp_cd,name,desgntn,sex,dob,age,sector,scale,basic,dept_nm,add_of_ofc,g_ng,dt_of_rtmt,voter_id,residential_add,residence_mandal,working_mandal,native_mandal,previous_work,mobile_no,last_4_years,differntly_abled_persons,criminal_cases,excedd_years,remarks,randomised_sl_no,allot_in) 
	values('${s_no}','${election_id}','${emp_cd}','${name}','${desgntn}','${sex}','${dob}','${age}','${sector}','${scale}','${basic}','${dept_nm}','${add_of_ofc}','${g_ng}','${dt_of_rtmt}','${voter_id}','${residential_add}','${residence_mandal}','${working_mandal}','${native_mandal}','${previous_work}','${mobile_no}','${last_4_years}','${differntly_abled_persons}','${criminal_cases}','${excedd_years}','${remarks}','${randomised_sl_no}',0); `;
console.log(QRY_TO_EXEC)
if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.getstaffdataMdl = function (id,callback) {
	
	var cntxtDtls = "in getstaffdataMdl";
	if(id==1){
		var QRY_TO_EXEC = `select * from kadapa_dtl_t `;
	}else if(id==2){
		var QRY_TO_EXEC = `select * from mandal_dtl_t `;
	}else if(id==3){
	    var QRY_TO_EXEC = `update kadapa_dtl_t k
JOIN mandal_dtl_t m on m.mandal_name=k.residence_mandal 
SET residence_id=m.id where m.mandal_name=k.residence_mandal; `;
	}else if(id==4){
	    var QRY_TO_EXEC = `update kadapa_dtl_t k
JOIN mandal_dtl_t m on m.mandal_name=k.working_mandal 
SET working_id=m.id where m.mandal_name=k.working_mandal; `;
	}
	
    //  console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.uploadmandaldataMdl = function (data,id,callback) {
    // console.log(data);console.log(id);
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in uploadmandaldataMdl";
		if (data.id) {
        var id = data.id.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {	
        var id = data.id;
    }
	if (data.phase) {
        var phase = data.phase.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {	
        var phase = data.phase;
    }
if (data.division) {
        var division = data.division.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {	
        var division = data.division;
    }
  
    if (data.mandal_name) {
        var mandal_name = data.mandal_name.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var mandal_name = data.mandal_name;
    }
    if (data.no_of_gps) {
        var no_of_gps = data.no_of_gps.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var no_of_gps = data.no_of_gps;
    }
    if (data.sensitive_loc) {
        var sensitive_loc = data.sensitive_loc.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var sensitive_loc = data.sensitive_loc;
    }
    if (data.hyper_sensitive_loc) {
        var hyper_sensitive_loc = data.hyper_sensitive_loc.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var hyper_sensitive_loc = data.hyper_sensitive_loc;
    } if (data.required) {
        var required = data.required.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var required = data.required;
    } if (data.reserved) {
        var reserved = data.reserved.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var reserved = data.reserved;
	}if (data.total) {
        var total = data.total.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var total = data.total;
	}
	
    
    
// 	var QRY_TO_EXEC = `INSERT INTO  mandal_dtl_t(phase,division,mandal_name,no_of_gps,sensitive_loc,hyper_sensitive_loc,required,reserved,total,d_in) 
// 	values('${phase}','${division}','${mandal_name}','${no_of_gps}','${sensitive_loc}','${hyper_sensitive_loc}','${required}','${reserved}','${total}',0); `;
var QRY_TO_EXEC = `update  mandal_dtl_t set  phase='${phase}',division='${division}',mandal_name='${mandal_name}',no_of_gps='${no_of_gps}',sensitive_loc='${sensitive_loc}',hyper_sensitive_loc='${hyper_sensitive_loc}',required='${required}',reserved='${reserved}',total='${total}',d_in=0 where id='${id}';`;
// 	values('${phase}','${division}','${mandal_name}','${no_of_gps}','${sensitive_loc}','${hyper_sensitive_loc}','${required}','${reserved}','${total}',0); `;

console.log(QRY_TO_EXEC)
if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getoldmobilesdtlsMdl = function (callback) {
    var cntxtDtls = "getoldmobilesdtlsMdl";
    var QRY_TO_EXEC = `select * from add_old_products where d_in='0' `;

    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getnewmobilesdtlsMdl = function (data, callback) {
    var cntxtDtls = "getnewmobilesdtlsMdl";
    // SELECT * FROM add_new_products order BY price desc
    if (data.brand == undefined && data.sort == undefined) {
        var QRY_TO_EXEC = `select * from add_new_products`;
    }
    if (data.brand != undefined && data.sort == undefined) {
        var QRY_TO_EXEC = `select * from add_new_products  where brandname='${data.brand}'`;
    }
    if (data.brand == undefined && data.sort == 1) {
        var QRY_TO_EXEC = `SELECT * FROM add_new_products order BY price ASC`;
    }
    if (data.brand == undefined && data.sort == 2) {
        var QRY_TO_EXEC = `SELECT * FROM add_new_products order BY price desc`;
    }
    if (data.brand != undefined && data.sort == 1) {
        var QRY_TO_EXEC = `select * from add_new_products  where brandname='${data.brand}'  order BY price ASC`;
    }
    if (data.brand != undefined && data.sort == 2) {
        var QRY_TO_EXEC = `select * from add_new_products  where brandname='${data.brand}'  order BY price desc`;
    }
    
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getaccessoridtlsMdl = function (callback) {
    var cntxtDtls = "getaccessoridtlsMdl";
    var QRY_TO_EXEC = `select * from accessories where d_in='0' `;

    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// get product dtls start
exports.getitemsbyallidsMdl = function (product_id, tbl_id, callback) {
    var cntxtDtls = "getitemsbyallidsMdl";
    if (tbl_id == 1) {
        var QRY_TO_EXEC = `SELECT * FROM add_new_products where product_id='${product_id}';`;
    }
    if (tbl_id == 2) {
        var QRY_TO_EXEC = `SELECT * FROM add_old_products where product_id='${product_id}';`;
    }
    if (tbl_id == 3) {
        var QRY_TO_EXEC = `SELECT * FROM accessories where product_id='${product_id}';`;
    }


    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// get product dtls End
//get brand models data start
exports.getbrandmodelsdataMdl = function (callback) {
    var cntxtDtls = "getbrandmodelsdataMdl";
    var QRY_TO_EXEC = `SELECT * FROM branddetails where d_in='0';`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//get brand models data End

//submit signup data start
exports.Signupdatachk = function (checksignupdata, callback) {
    var cntxtDtls = "Signupdatachk";
    var QRY_TO_EXEC = `SELECT * FROM tr_users_t where user_mail='${checksignupdata.user_mail}' and user_ph='${checksignupdata.user_ph}';`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.submitsignupdataMdl = function (signupdata, callback) {
    var cntxtDtls = "submitsignupdataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `insert into  tr_users_t (user_nm,user_ph,user_mail ,user_password,i_ts )  values('${signupdata.user_nm}','${signupdata.user_ph}','${signupdata.user_mail}','${signupdata.user_password}','${date}');`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//submit signup data end
//submit login data start
exports.submitlogindataMdl = function (logindata, callback) {
    var cntxtDtls = "submitlogindataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `SELECT * FROM tr_users_t where user_mail='${logindata.user_mail}' and user_password='${logindata.user_password}';`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//submit login data End
//submit address data start
exports.submitaddressdataMdl = function (addressdata, callback) {
    var cntxtDtls = "submitaddressdataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `insert into  users_address_t (customer_id,full_nm,eamil_addrs ,phone_number,country_nm,residential_address,posstal_code,town,i_ts )  values('${addressdata.customer_id}','${addressdata.full_nm}','${addressdata.eamil_addrs}','${addressdata.phone_number}','${addressdata.country_nm}','${addressdata.residential_address}','${addressdata.posstal_code}','${addressdata.town}','${date}');`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.udateaddressindcator = function (addressdata, callback) {
    var cntxtDtls = "udateaddressindcator";
    var QRY_TO_EXEC = `update tr_users_t set address_ind='1' where id='${addressdata.customer_id}'`;

    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//submit address data End
//get checkout address dtls start
exports.getcheckoutaddressMdl = function (customer_id, callback) {
    var cntxtDtls = "getcheckoutaddressMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `SELECT ua.*,user_nm,address_ind FROM users_address_t as ua
    join tr_users_t as ut on ut.id=ua.customer_id where ua.customer_id='${customer_id}' and ua.d_in=0;`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//get checkout address dtls end
//submit Post PaymentDtls start
exports.getLatestOrderRecord = function (callback) {
    var cntxtDtls = "getLatestOrderRecord";
    var QRY_TO_EXEC = `select id from orders order by id desc limit 1;`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.PostPaymentorderMdl = function (orderdata, random_number, callback) {
    var cntxtDtls = "PostPaymentorderMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    if (orderdata.payment_type == 'online') {
        var ps = 1

    } else {
        var ps = 0
    }
    var QRY_TO_EXEC = `INSERT INTO orders (order_no,customer_id,payment_type,cart_dtls, purchase_date,payment_id,payment_status,del_address,order_cost) VALUES('${random_number}','${orderdata.customer_id}','${orderdata.payment_type}','${orderdata.cart_dtls}','${date}','${orderdata.payment_id}','${ps}','${orderdata.address}','${orderdata.order_cost}') `;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.PostPaymentorderItemsMdl = function (ins_id, cart, customer_id, callback) {
    console.log(cart);
    var cntxtDtls = "PostPaymentorderItemsMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = '';
    var SUB_QRY_TO_EXEC = '';
    for (var i = 0; i < cart.length; i++) {
        SUB_QRY_TO_EXEC = `INSERT INTO order_items (tbl_in,order_id,item_id,quantity,item_cost,customer_id,first_img,product_nm,i_ts) VALUES('${cart[i].tbl_id}','${ins_id}','${cart[i].product_id}','${cart[i].qunty}','${cart[i].price}','${customer_id}','${cart[i].first_img}','${cart[i].modelname}','${date}') ;`;
        QRY_TO_EXEC = QRY_TO_EXEC + SUB_QRY_TO_EXEC;
    }

    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
}
//submit Post PaymentDtls end

//get Profile reportdtls strat
exports.getProfilereportmdl = function (customer_id, callback) {
    var cntxtDtls = "getProfilereportmdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `SELECT * FROM tr_users_t where id='${customer_id}' and d_in=0;`;

    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//get Profile reportdtls End
//remove Address data start
exports.removeAddressdataMdl = function (id, callback) {
    var cntxtDtls = "removeAddressdataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `update users_address_t set d_in='1' where id='${id}'`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//remove Address data End

//submit update profiledata start
exports.submitupdateprofileMdl = function (updateprofile, callback) {
    var cntxtDtls = "submitupdateprofileMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `update tr_users_t set user_nm='${updateprofile.user_nm}',user_ph='${updateprofile.user_ph}',user_mail='${updateprofile.user_mail}',user_password='${updateprofile.user_password}' where id='${updateprofile.id}'`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//submit update profiledata End
//submit update addressdata start
exports.submitupdateaddressMdl = function (updateaddress, callback) {
    var cntxtDtls = "submitupdateaddressMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `update users_address_t set full_nm='${updateaddress.full_nm}',eamil_addrs='${updateaddress.eamil_addrs}',phone_number='${updateaddress.phone_number}',country_nm='${updateaddress.country_nm}',residential_address='${updateaddress.residential_address}',posstal_code='${updateaddress.posstal_code}',town='${updateaddress.town}' where id='${updateaddress.id}'`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//submit update addressdata End

//get orders data start
exports.getordersdataMdl = function (customer_id, callback) {
    var cntxtDtls = "getordersdataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `SELECT od.*,full_nm,eamil_addrs,phone_number,country_nm,residential_address,posstal_code,town FROM orders as od
    JOIN users_address_t as us on us.id=od.del_address where od.customer_id='${customer_id}' and us.d_in=0`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//get orders data End
//get view oders data Start
exports.getviewodersdataMdl = function (data, callback) {
    var cntxtDtls = "getviewodersdataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `SELECT * FROM order_items where order_id='${data.id}'`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getComData = function (callback) {
    var cntxtDtls = "getLatestOrderRecord";
    var QRY_TO_EXEC = `SELECT * FROM calmunity.community`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//get view oders data End
//get latest products start
exports.getlatestproductsMdl = function (callback) {
    var cntxtDtls = "getlatestproductsMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `select * from add_new_products  where d_in='0'  order BY product_id desc`
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//get latest products End
//get banners data start
exports.getbannersdataMdl = function (callback) {
    var cntxtDtls = "getbannersdataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `select * from banner_lst_t  where d_in='0'`;
    console.log(QRY_TO_EXEC);
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
    //get banners data End



/// Fahasraa start



exports.UserSignupchk = function (phone, callback) {
	var cntxtDtls = "in UserSignupchk";
	var QRY_TO_EXEC = `select * from users where 	Phone = '${phone}' and IsActive=0; `;
console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.postsignupdetailsMdl = function (data, callback) {
	var cntxtDtls = "in postsignupdetailsMdl";
 
	      var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');

	var QRY_TO_EXEC = `INSERT INTO 	users(Phone,FirstName,Email,usr_pwd,type,CreatedOn)
	values( '${data.usr_phone}','${data.usr_name}','${data.usr_email}','${data.usr_pwd}' ,'${data.type}','${curDate}' ); `;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			
		 
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.LoginAppCtrlMdl = function (logindata, callback) {
	var cntxtDtls = "in LoginAppCtrlMdl";
	var QRY_TO_EXEC = `select id,approval_in,role_id from f_user_logins where usr_phone = '${logindata.mobile}' and   usr_pwd = '${logindata.pass}'   and d_in=0`;
 console.log(QRY_TO_EXEC);

	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};







exports.getfamilydetailsMdl = function (data, callback) {
	console.log(data);
	
	var cntxtDtls = "in getfamilydetailsMdl";
	if(data.indicator==1){
	if(data.role==1){
	var QRY_TO_EXEC = `SELECT r.UserId,r.Name,r.Gender,r.Relationship,r.DOB,r.Photo,r.Approve_ind,f.FlatNumber,f.CommunityId,r.Id,r.Phone from residentfamily r
	JOIN userflat uf on uf.UserId=r.UserId
	JOIN flats f on f.FlatId=uf.FlatId
	where CommunityId='${data.CommunityId}' and r.d_in=0 order by r.Id desc;`;
	}else{
	var QRY_TO_EXEC = `SELECT r.UserId,r.Name,r.Gender,r.Relationship,r.DOB,r.Photo,r.Approve_ind,f.FlatNumber,f.CommunityId,r.Id,r.Phone from residentfamily r
	JOIN userflat uf on uf.UserId=r.UserId
	JOIN flats f on f.FlatId=uf.FlatId
	where r.UserId='${data.user_id}' and r.d_in=0 order by r.Id desc;`;	    
	}
	}else if (data.indicator==3){
	    	if(data.role==1){
	var QRY_TO_EXEC = `SELECT visitor_id as id, v_name as f_name, v_img as f_photo from visitors_dtl_t where d_in = '0'   order by created_on desc;`;
	}else{
	var QRY_TO_EXEC = `SELECT visitor_id as id, v_name as f_name, v_img as f_photo from visitors_dtl_t where d_in = '0'   and create_by= '${data.user_id}' order by created_on desc;`;    
	}
	}else if (data.indicator==2){
	 	if(data.role==1){
	var QRY_TO_EXEC = `select rv.*,FlatNumber,FirstName from residentvehicle rv
join users u on u.UserId=rv.UserId
	join userflat uf on uf.UserId=u.userId
	join flats f on f.FlatId=uf.FlatId where f.CommunityId='${data.CommunityId}' and rv.d_in=0 group by rv.id order by rv.CreatedOn DESC`;
	}else{
	 var QRY_TO_EXEC = `select rv.*,FlatNumber,FirstName from residentvehicle rv
join users u on u.UserId=rv.UserId
join userflat uf on uf.UserId=u.userId
join flats f on f.FlatId=uf.FlatId where rv.userId='${data.user_id}' and rv.d_in=0 group by rv.Id order by rv.CreatedOn DESC;`;   
	}
	}
	else if (data.indicator==4){
	 	if(data.role==1){
	var QRY_TO_EXEC = `SELECT veh_id as id, veh_owner_nm as f_name, veh_img as f_photo from  veh_dtl_t where d_in = '0'   order by created_time desc;`;
		}else{
		var QRY_TO_EXEC = `SELECT veh_id as id, veh_owner_nm as f_name, veh_img as f_photo from  veh_dtl_t where d_in = '0'  and create_by= '${data.user_id}' order by created_time desc;`;	    
		}
	}
	else{
	   var QRY_TO_EXEC = `SELECT * from  veh_dtl_t where d_in not in (0,1,2);`; 
	}
console.log(QRY_TO_EXEC);
	
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getdirectorydetailsMdl = function (data, callback) {
	console.log(data);
	
	var cntxtDtls = "in getdirectorydetailsMdl";
	if(data.indicator==1){
	// if(data.role==1 || data.role==2 || data.role==3){
	var QRY_TO_EXEC = `SELECT FirstName, u.UserId as id,type, FlatNumber,Phone,intercom_no   from users	u
	join userflat uf on uf.UserId=u.UserId 
	JOIN flats f on f.FlatId=uf.FlatId
    join intercom_dtl_t i on i.intercom_id=u.intercom
	where u.CommunityId='${data.CommunityId}' order by u.UserId desc; `;

	}else if (data.indicator==3){
		// if(data.role==1 || data.role==2 || data.role==3){
		// 	var QRY_TO_EXEC = `select g.date,g.gpass_id,g.name as FirstName,g.phone,g.in_time,g.out_time,g.flat_id as FlatNumber,g.indicator,g.purpose,g.approval_ind,purpose,f_date,t_date,g.type,relation
		// 	from gatepass_dtl_t g
		// 	join users u on u.UserId=g.created_by
		// 	where u.CommunityId='${data.CommunityId}' and  g.type ='Guest' order by gpass_id desc ; `;
		// 	}else{
			var QRY_TO_EXEC = `SELECT g.* from gatepass_dtl_t g
			join users u on u.UserId=g.created_by
			where u.CommunityId='${data.CommunityId}' and g.indicator=2 and g.approval_ind=1 group by g.type,g.phone,g.flat_id`;  
			// }
	}else if (data.indicator==2){
	 	if(data.role==1 || data.role==2 || data.role==3){
	var QRY_TO_EXEC = `select rv.Id,VehicleType,Regnumber as FirstName,VehiclePhoto,rv.Approve_ind,c.CommunityName,f.FlatNumber,rv.ParkingSlotNumber from residentvehicle rv
	join userflat uf on uf.UserId=rv.userId
	join flats f on f.FlatId=uf.FlatId 
	join community c on c.CommunityId=f.CommunityId where c.CommunityId='${data.CommunityId}' and rv.d_in=0 order by rv.Id desc;`;
	}else{
	 var QRY_TO_EXEC = `SELECT Id,VehicleType,RegNumber as f_name,FlatId as FlatNumber,ParkingSlotNumber,VehiclePhoto,r.Approve_ind,FirstName FROM residentvehicle r
	 JOIN users u on u.UserId=r.UserId where r.UserId='${data.user_id}' and r.d_in=0 order by r.Id desc;`;   
	}
	}
	else if (data.indicator==4){
		if(data.role==1 || data.role==2 || data.role==3){
			var QRY_TO_EXEC = `select g.date,g.gpass_id,g.name as FirstName,g.phone,g.in_time,g.out_time,g.flat_id as FlatNumber,g.indicator,g.purpose,g.approval_ind,purpose,f_date,t_date,g.type,relation
			from gatepass_dtl_t g
			join users u on u.UserId=g.created_by
			where u.CommunityId='${data.CommunityId}' and  g.type ='Guest' and indicator=1 order by gpass_id desc ;  `;
			}else{
			var QRY_TO_EXEC = `SELECT g.date,g.gpass_id,g.name as FirstName,g.phone,g.in_time,g.out_time,g.flat_id as FlatNumber,g.indicator,g.purpose,g.approval_ind,purpose,f_date,t_date,g.type,relation,g.flat_id
			from users u
			join userflat uf on uf.UserId=u.UserId
			join flats f on f.FlatId=uf.FlatId
			join gatepass_dtl_t g on g.flat_id=f.FlatNumber
			where u.UserId='${data.user_id}' and g.type ='Guest' and indicator=1 order by gpass_id desc;`;
	}
}
	else{
	   var QRY_TO_EXEC = `SELECT * from  veh_dtl_t where d_in not in (0,1,2);`; 
	}
console.log(QRY_TO_EXEC);
	
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getvistordetailsMdl = function (data,callback) {
	var cntxtDtls = "in getvistordetailsMdl";
// 	if(data.role==1){
// 	var QRY_TO_EXEC = `SELECT * from visitors_dtl_t where d_in = '0'   order by created_on desc;`;
// 	}else{
// 	var QRY_TO_EXEC = `SELECT * from visitors_dtl_t where d_in = '0'   and create_by= '${data.user_id}' order by created_on desc;`;    
// 	}
 	if(data.role==1){
	var QRY_TO_EXEC = `SELECT * from visitors_dtl_t where d_in = '0'   order by created_on desc;`;
	}else{
	var QRY_TO_EXEC = `SELECT v.*,FirstName,FlatNumber from visitors_dtl_t v
join users u on u.UserId=v.create_by
join userflat uf on uf.UserId=u.UserId
JOIN flats f on f.FlatId=uf.FlatId
where d_in = '0'   and create_by= '${data.user_id}'  group by visitor_id order by visitor_id desc`;    
	}
	
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.getvehicledetailsMdl = function (data,callback) {
	var cntxtDtls = "in getvehicledetailsMdl";
	if(data.role==1){
		var QRY_TO_EXEC = `select rv.*,FlatNumber,FirstName from residentvehicle rv
join users u on u.UserId=rv.UserId
	join userflat uf on uf.UserId=u.userId
	join flats f on f.FlatId=uf.FlatId where f.CommunityId='${data.CommunityId}' and rv.d_in=0 group by rv.id order by rv.CreatedOn DESC`;
		}else{
		 var QRY_TO_EXEC = `select rv.*,FlatNumber,FirstName from residentvehicle rv
join users u on u.UserId=rv.UserId
join userflat uf on uf.UserId=u.userId
join flats f on f.FlatId=uf.FlatId where rv.userId='${data.user_id}' and rv.d_in=0 group by rv.Id order by rv.CreatedOn DESC;`;   
		}
	console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.gethelperdetailsMdl = function (data,callback) {
	var cntxtDtls = "in gethelperdetailsMdl";
	if(data.role==1){
	var QRY_TO_EXEC = `SELECT h.*,FirstName,FlatNumber FROM helper_dtl_t h
join users u on u.UserId=h.create_by
join userflat uf on uf.UserId=u.UserId
join flats f on f.FlatId=uf.FlatId  GROUP by helper_id;`;
		}else{
		var QRY_TO_EXEC = `SELECT h.*,FirstName,FlatNumber FROM helper_dtl_t h
join users u on u.UserId=h.create_by
join userflat uf on uf.UserId=u.UserId
join flats f on f.FlatId=uf.FlatId where h.create_by='${data.user_id}' GROUP by helper_id;`;	    
		}
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.sahasrapostfamilydetailschekcingmdl = function (data, callback) {
	var cntxtDtls = "in sahasrapostfamilydetailschekcingmdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `select * from residentfamily where UserId='${data.UserId}' and Name='${data.Name}' and CreatedBy='${data.UserId}'; `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.sahasrapostfamilydetailsmdl = function (data, callback) {
	var cntxtDtls = "in sahasrapostfamilydetailsmdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	residentfamily(UserId,Name,Gender,Relationship,DOB,Phone,CreatedBy,CreatedOn)
	values('${data.UserId}','${data.Name}','${data.Gender}','${data.Relationship}','${data.DOB}','${data.Phone}','${data.UserId}','${curDate}' ); `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.updatefamilyimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in updatefamilyimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` Photo = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  residentfamily SET ${img_url} WHERE id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

/////////////venkatesh code starts//////////////////


exports.checkvehicleparkingMdl = function (data, callback) {
	var cntxtDtls = "in checkvehicleparkingMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `select * from  residentvehicle where UserId='${data.user_id}' and FlatId='${data.f_flat_id}' and ParkingSlotNumber='${data.f_parking_slot}' and d_in=0`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postvehiclefamilydetailsMdl = function (data, callback) {
	var cntxtDtls = "in postvehiclefamilydetailsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	residentvehicle(VehicleType,RegNumber,FlatId,UserId,ParkingSlotNumber,CreatedBy,CreatedOn)
	values('${data.f_category}','${data.v_reg_no}','${data.f_flat_id}','${data.user_id}','${data.f_parking_slot}','${data.user_id}','${curDate}' ); `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.postvehiclefamilydetailsimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in postvehiclefamilydetailsimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` VehiclePhoto = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  residentvehicle SET ${img_url} WHERE Id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.posthelperfamilydetailsMdl = function (data, callback) {
	var cntxtDtls = "in posthelperfamilydetailsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	helper_dtl_t(helper_nm,helper_mobile,helper_ctgry,purpose,create_by,created_time,d_in)
	values('${data.f_name}','${data.f_phone}','${data.f_category}','${data.f_purpose}','${data.user_id}','${curDate}',0 ); `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.posthelperfamilydetailsimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in posthelperfamilydetailsimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` helper_img = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  helper_dtl_t SET ${img_url} WHERE helper_id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.postvisitorfamilydetailsMdl = function (data, callback) {
	var cntxtDtls = "in postvisitorfamilydetailsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	visitors_dtl_t(v_name,v_mobile,v_ctgry,v_email,v_cnt,v_purpose,create_by,created_on,d_in)
	values('${data.f_name}','${data.f_phone}','${data.f_category}','${data.f_email}','${data.f_cnt}','${data.f_purpose}','${data.user_id}','${curDate}',0 ); `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.postvisitorfamilydetailsimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in postvisitorfamilydetailsimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` v_img = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  visitors_dtl_t SET ${img_url} WHERE visitor_id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postgatepassdetailsMdl = function (data, callback) {
	var cntxtDtls = "in postgatepassdetailsMdl";
	console.log(data)
	if(data.in_time=='undefined' || data.in_time==undefined){
	    var in_time='00:00';
	}else{
	    var in_time=data.in_time;
	}
	    if(data.out_time=='undefined' || data.out_time==undefined){
	    var out_time='00:00';
	}else{
	    var out_time=data.out_time;
	}
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	if(data.role==0){
	
		var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(date,name,type,relation,phone,flat_id,f_date,t_date,in_time,out_time,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.date}','${data.name}','${data.type}','${data.relation}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${in_time}','${out_time}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',1,'${data.materialize}','${data.materialize_subject}'); `;

}else{
	
		var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(date,name,type,relation,phone,flat_id,f_date,t_date,in_time,out_time,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.date}','${data.name}','${data.type}','${data.relation}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${in_time}','${out_time}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',0,'${data.materialize}','${data.materialize_subject}'); `;
	
}
	
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postaddexitpassdetailsMdl = function (data, callback) {
	var cntxtDtls = "in postaddexitpassdetailsMdl";
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
		if(data.in_time=='undefined' || data.in_time==undefined){
	    var in_time='00:00';
	}else{
	    var in_time=data.in_time;
	}
	    if(data.out_time=='undefined' || data.out_time==undefined){
	    var out_time='00:00';
	}else{
	    var out_time=data.out_time;
	}
	if(data.role==0){
		var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(date,name,type,phone,flat_id,f_date,t_date,in_time,out_time,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.date}','${data.name}','${data.type}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${data.in_time}','${data.out_time}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',1,'${data.materialize}','${data.materialize_subject}'); `;
	}else{
		var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(date,name,type,phone,flat_id,f_date,t_date,in_time,out_time,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.date}','${data.name}','${data.type}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${data.in_time}','${data.out_time}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',0,'${data.materialize}','${data.materialize_subject}'); `;
	}

	
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.checkhelperdtls = function (data, callback) {
	var cntxtDtls = "in checkhelperdtls";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `SELECT helper_mobile FROM helper_dtl_t where helper_mobile='${data.phone}' and d_in=0;`;
     //console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.postaddvisitorpassdetailsMdl = function (data, callback) {
	var cntxtDtls = "in postaddvisitorpassdetailsMdl";
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
		if(data.in_time=='undefined' || data.in_time==undefined){
	    var in_time='00:00';
	}else{
	    var in_time=data.in_time;
	}
	    if(data.out_time=='undefined' || data.out_time==undefined){
	    var out_time='00:00';
	}else{
	    var out_time=data.out_time;
	}
	if(data.role==0){
		if(data.indicator==2){
			var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(in_time,out_time,date,name,type,phone,flat_id,f_date,t_date,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
			values('${data.in_time}','${data.out_time}','${data.date}','${data.name}','${data.type}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',0,'${data.materialize}','${data.materialize_subject}'); `;
			
		}else{
		var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(in_time,out_time,date,name,type,relation,phone,flat_id,f_date,t_date,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.in_time}','${data.out_time}','${data.date}','${data.name}','${data.type}','${data.relation}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',1,'${data.materialize}','${data.materialize_subject}'); `;
		}
	}else{
		if(data.indicator==2){
			var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(in_time,out_time,date,name,type,phone,flat_id,f_date,t_date,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.in_time}','${data.out_time}','${data.date}','${data.name}','${data.type}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',0,'${data.materialize}','${data.materialize_subject}'); `;
	
		}else{
		var QRY_TO_EXEC = `INSERT INTO 	gatepass_dtl_t(in_time,out_time,date,name,type,relation,phone,flat_id,f_date,t_date,created_on,created_by,d_in,approved_by,indicator,purpose,approval_ind,materialize,materialize_subject)
		values('${data.in_time}','${data.out_time}','${data.date}','${data.name}','${data.type}','${data.relation}','${data.phone}','${data.flat_id}','${data.f_date}','${data.t_date}','${curDate}','${data.user_id}',0,0,'${data.indicator}','${data.purpose}',0,'${data.materialize}','${data.materialize_subject}'); `;
	}
}

	
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.ChkMblNoMdl = function (data,callback) {
	var cntxtDtls = "in ChkMblNoMdl";
	var QRY_TO_EXEC = `SELECT Phone FROM users where Phone='${data.phone}' and Role=3 and IsActive=0`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getgatepassdetailsMdl = function (data, callback) {
	var cntxtDtls = "in getgatepassdetailsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
    if(data.role==1 || data.role==2 || data.role==3){
	var QRY_TO_EXEC = `select CONCAT(t_date, ' ', g.out_time) AS outdatetime,g.date,g.gpass_id,g.name,g.phone,g.in_time,g.out_time,g.flat_id,g.indicator,g.purpose,g.approval_ind,purpose,f_date,t_date,g.type,relation,created_by,DATE_FORMAT(t_date, '%d-%b-%Y') as todate
	from gatepass_dtl_t g
	join users u on u.UserId=g.created_by
	where u.CommunityId='${data.CommunityId}' and g.indicator ='${data.indicator}' and g.d_in=0 order by created_on desc ; `;
    
    }else{
	var QRY_TO_EXEC = `SELECT CONCAT(t_date, ' ', g.out_time) AS outdatetime,g.date,g.gpass_id,g.name,g.phone,g.in_time,g.out_time,g.flat_id,g.indicator,g.purpose,g.approval_ind,purpose,f_date,t_date,g.type,relation,g.flat_id,created_by,DATE_FORMAT(t_date, '%d-%b-%Y') as todate
	from users u
	join userflat uf on uf.UserId=u.UserId
	join flats f on f.FlatId=uf.FlatId
	join gatepass_dtl_t g on g.flat_id=f.FlatNumber
	where u.UserId='${data.user_id}' and g.indicator ='${data.indicator}' and g.d_in=0 order by created_on desc; `;
    }
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
/////////////venkatesh code Ends//////////////////

exports.postvehicledetailsmdl = function (data, callback) {
	var cntxtDtls = "in postvehicledetailsmdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	f_vehiclesdetails(vehicle_owner_name,vehicle_number,vehicle_type,parking_slot,registration_num,i_its,user_id)
	values('${data.vehicle_owner_name}','${data.vehicle_number}','${data.vehicle_type}','${data.parking_slot}','${data.registration_num}','${curDate}','${data.user_id}' ); `;
     //console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.updatevehicleimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in updatevehicleimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` vehicle_img = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  f_vehiclesdetails SET ${img_url} WHERE id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};





exports.postregularvisitorsdetailsmdl = function (data, callback) {
	var cntxtDtls = "in postregularvisitorsdetailsmdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	f_familydetails(f_name,f_relation,f_phone,f_email,i_its,family_visitor_ind,user_id)
	values('${data.f_name}','${data.f_relation}','${data.f_phone}','${data.f_email}','${curDate}' ,'1','${data.user_id}'); `;
     //console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.updateregularvisitorsimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in updateregularvisitorsimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` f_photo = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  f_familydetails SET ${img_url} WHERE id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.addhelperdetailsmdl = function (data, callback) {
	var cntxtDtls = "in addhelperdetailsmdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	f_helpers(h_name,h_number,h_occupation,i_its,user_id)
	values('${data.h_name}','${data.h_number}','${data.h_occupation}','${curDate}','${data.user_id}' ); `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.updatehelperimageMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in updatehelperimageMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` h_photo = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  f_helpers SET ${img_url} WHERE id=${updtitem}`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getTesttbl = function (callback)
{
		var cntxtDtls = "in getTesttbl";
		var QRY_TO_EXEC = `SELECT * FROM calmunity.community;`;
		//  console.log(QRY_TO_EXEC)
		if (callback && typeof callback == "function")
			dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
					callback(err, results);
				return;
			});
		else
			return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
	};


exports.getApprovalsdataMdl = function (data,callback) {
	var cntxtDtls = "in getApprovalsdataMdl";
	if(data.indicator==1){
	var QRY_TO_EXEC = `SELECT r.Id as id,r.UserId,FlatNumber,Photo,gender,Relationship,r.Name,r.Approve_ind from residentfamily r
	join userflat uf on uf.UserId=r.UserId
	join flats f on f.FlatId=uf.FlatId where CommunityId ='${data.CommunityId}' and r.Approve_ind=0  group by r.Id  order by r.Id desc`;
	}else if(data.indicator==2){
	var QRY_TO_EXEC = `SELECT r.Id as id, VehicleType,RegNumber as Name,ParkingSlotNumber,VehiclePhoto as Photo,FlatNumber from residentvehicle r
	join userflat uf on uf.UserId=r.UserId
	join flats f on f.FlatId=uf.FlatId where CommunityId ='${data.CommunityId}' and r.Approve_ind=0 group by r.Id order by r.Id desc`;
	}else if(data.indicator==3){
	var QRY_TO_EXEC = `SELECT v_name as Name,visitor_id as id from   	visitors_dtl_t where approved_by = '0' and d_in=0    order by visitor_id desc`;
	}else if(data.indicator==4){
	var QRY_TO_EXEC = `SELECT helper_nm as Name,helper_id as id from   	helper_dtl_t where approved_by = '0'  and d_in=0   order by helper_id desc`;
	}else if(data.indicator==5){
	var QRY_TO_EXEC = `SELECT *, FirstName as Name from users where Approval_ind=0 and IsActive=0 order by UserId desc`;
	}else if(data.indicator==6){
	var QRY_TO_EXEC = `SELECT name as Name,gpass_id as id,in_time,out_time,FlatNumber from   	gatepass_dtl_t g
	join userflat uf on uf.UserId=g.created_by
	join flats f on f.FlatId=uf.FlatId
	where g.approval_ind = '0' and g.d_in=0  and f.CommunityId='${data.CommunityId}' order by gpass_id desc`;
	}
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getsocietydataMdl = function (data,callback) {
	debugger;
	var cntxtDtls = "in getsocietydataMdl";

	if (data.id == 4) {
		var QRY_TO_EXEC = `SELECT society_id,title,description,img_url from   	society_dtl_t where variant_ind = '${data.id}' and d_in=0   order by society_id desc limit 3`;
	} else if (data.id == 1) {
		var QRY_TO_EXEC = `SELECT society_id,title,description,img_url from   	society_dtl_t where variant_ind = '${data.id}' and d_in=0   order by society_id desc limit 6`;
	} else if (data.id == 2) {
		var QRY_TO_EXEC = `SELECT society_id,title,description,img_url from   	society_dtl_t where variant_ind = '${data.id}' and d_in=0   order by society_id desc limit 6`;
	}
	else {
		var QRY_TO_EXEC = `SELECT * from   	society_dtl_t where variant_ind = '${data.id}' and d_in=0   order by society_id desc`;
	}
	console.log(QRY_TO_EXEC);
	
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
/// fahassara Admin Bhargav Start
exports.getUserForApprovalCtrlMdl = function (callback) {
	var cntxtDtls = "in getUserForApprovalCtrlMdl";
	var QRY_TO_EXEC = `SELECT * from   	f_user_logins where approval_in = '0'    order by id desc`;
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postApprovalMdl = function (data,callback) {
	console.log(data);
		console.log(data);
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in postApprovalMdl";
	if(data.indicator==5){
	var QRY_TO_EXEC = `INSERT INTO userflat(UserId,FlatId,CreatedBy,CreatedOn,ApprovedBy,AppovedOn)
	values('${data.residentId}','${data.FlatId}','${data.approvedBy}','${curDate}','${data.approvedBy}','${curDate}');`;
	}else if(data.indicator==6){
	var QRY_TO_EXEC = `update 	gatepass_dtl_t set approval_ind = '1' ,approved_time='${curDate}'     where gpass_id = '${data.residentId}'`;
	}else if(data.indicator==1){
	var QRY_TO_EXEC = `update 	residentfamily set Approve_ind = '1'    where Id = '${data.residentId}'`;
	}else if(data.indicator==2){
	var QRY_TO_EXEC = `update 	residentvehicle set Approve_ind = '1' ,ApprovedOn='${curDate}',ApprovedBy='${data.approvedBy}'     where Id = '${data.residentId}'`;
	}else if(data.indicator==3){
	var QRY_TO_EXEC = `update 	visitors_dtl_t set approved_by = '1' ,approved_time='${curDate}'     where visitor_id = '${data.id}'`;
	}else if(data.indicator==4){
	var QRY_TO_EXEC = `update 	helper_dtl_t set approved_by = '1'  ,approved_time='${curDate}'    where helper_id = '${data.id}'`;
	}
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.CancelApprovalMdl = function (data,callback) {
     var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in CancelApprovalMdl";
	if(data.indicator==5){
	var QRY_TO_EXEC = `update 	users set Approval_ind = '2' , IsActive=1    where UserId = '${data.id}'`;
	}else if(data.indicator==6){
	var QRY_TO_EXEC = `update 	gatepass_dtl_t set d_in=2, approval_ind = '2',approved_time='${curDate}'    where gpass_id = '${data.residentId}'`;
	}else if(data.indicator==1){
	var QRY_TO_EXEC = `update 	residentfamily set Approve_ind = '2' ,ApprovedBy='${data.user_id}' ,ApporvedOn='${curDate}'   where Id = '${data.id}'`;
	}else if(data.indicator==2){
	var QRY_TO_EXEC = `update 	residentvehicle set Approve_ind = '2' ,ApprovedOn='${curDate}',ApprovedBy='${data.approvedBy}'     where Id = '${data.id}'`;
	}else if(data.indicator==3){
	var QRY_TO_EXEC = `update 	visitors_dtl_t set d_in=2, approved_by = '2' ,approved_time='${curDate}'     where visitor_id = '${data.id}'`;
	}else if(data.indicator==4){
	var QRY_TO_EXEC = `update 	helper_dtl_t set d_in=2, approved_by = '2' ,approved_time='${curDate}'     where helper_id = '${data.id}'`;
	}
	console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.postuserApprovalMdl = function (data, callback) {
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in postuserApprovalMdl";
	var QRY_TO_EXEC = `update users set Approval_ind=1,intercom='${data.intercom_id}', CommunityId='${data.CommunityId}', ApprovedBy='${data.approvedBy}' , ApprovedOn='${curDate}' where UserId='${data.residentId}'; `;
console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postremainingflatsMdl = function (data, callback) {
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in postremainingflatsMdl";
	var QRY_TO_EXEC = `update flats set Allot_ind=1, ApprovedBy='${data.approvedBy}' , AprovedOn='${curDate}' where FlatId='${data.FlatId}'; `;
console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postremainingintercomsMdl = function (data, callback) {
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in postremainingintercomsMdl";
	var QRY_TO_EXEC = `update intercom_dtl_t set Allot_ind=1, ApprovedBy='${data.approvedBy}' , AprovedOn='${curDate}' where 	intercom_id='${data.intercom_id}'; `;
console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postparkingslotMdl = function (postData, callback) {
 var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = '';
    var QRY_SUB = '';
    var cntxtDtls = "in postparkingslotMdl"; 
    console.log(postData);
    // console.log(postData.arraydata);
    for(var v=0;v<postData.allotedparking.length;v++) {
        console.log(postData.allotedparking[v]);
      var QRY_SUB = `insert into userparking (UserId,parkingslot_id,flat_id,CreatedBy,CreatedOn) VALUES('${postData.residentId}',
      '${postData.allotedparking[v].ParkingSlot_id}','${postData.FlatId}','${postData.approvedBy}','${date}');`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.updateparkingslotMdl = function (postData, callback) {
 var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = '';
    var QRY_SUB = '';
    var cntxtDtls = "in updateparkingslotMdl"; 
    console.log(postData);
    console.log(postData.arraydata);
    for(var v=0;v<postData.allotedparking.length;v++) {
        console.log(postData.allotedparking[v]);
      var QRY_SUB = `update freeparkingslots set Allot_ind=1 where 	ParkingSlot_id='${postData.allotedparking[v].ParkingSlot_id}';`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.AdminloginwithotppassCtrlMdl = function (data, callback) {
	var cntxtDtls = "in AdminloginwithotppassCtrlMdl";
	var QRY_TO_EXEC = `select * from 	f_user_logins where usr_phone = '${data.usr_phone}' and  usr_pwd = '${data.usr_pwd}' ; `;
console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.AdminUserSignupchk = function (phone, callback) {
	var cntxtDtls = "in studentSignupchk";
	var QRY_TO_EXEC = `select * from 	f_user_logins where usr_phone = '${phone}'; `;
//console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.AdminpostsignupdetailsMdl = function (data,otp, callback) {
	var cntxtDtls = "in AdminpostsignupdetailsMdl";
	console.log("jyo");
	console.log(data);
	console.log("thi");
	      var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');

	var QRY_TO_EXEC = `INSERT INTO 		f_user_logins(user_id,usr_phone,usr_name,usr_email,usr_pwd,confrim_pass,u_otp,signup_date)
	values('${data.user_id}','${data.usr_phone}','${data.usr_name}','${data.usr_email}','${data.usr_pwd}','${data.confrim_pass}','${otp}','${curDate}' ); `;
//console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			
			results.otp = otp;
			results.phone = data.usr_phone;
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.adminAcceptFamilyMembersMdl = function ( callback) {
	var cntxtDtls = "in adminAcceptFamilyMembersMdl";
	var QRY_TO_EXEC = `SELECT f_familydetails.id,f_familydetails.f_name,f_familydetails.f_photo,f_familydetails.f_relation,f_familydetails.f_gender ,f_user_logins.usr_name FROM f_familydetails JOIN f_user_logins ON f_familydetails.user_id=f_user_logins.id where f_user_logins.approval_in=1 and f_familydetails.approval_id=0; `;
console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.postApprovalFamilyMdl = function (data,callback) {
	var cntxtDtls = "in postApprovalFamilyMdl";
	var QRY_TO_EXEC = `update 	f_familydetails set approval_id = '1'    where id = '${data.user_id}'`;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.CancelApprovalFamilyMdl = function (data,callback) {
	var cntxtDtls = "in CancelApprovalFamilyMdl";
	var QRY_TO_EXEC = `update f_familydetails set approval_id = '2'     where id = '${data.user_id}'`;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

/// fahassara Admin Bhargav End
//remove person data start
exports.removepersondataMdl = function (data,callback) {
	var cntxtDtls = "in removepersondataMdl";
	if(data.indicator==1){
	var QRY_TO_EXEC = `update residentfamily set d_in = '1' where Id = '${data.id}'`;
	}else if(data.indicator==2){
		var QRY_TO_EXEC = `update residentvehicle set d_in ='1' where Id = '${data.id}'`;	
	}
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.removegatepassdataMdl = function (data,callback) {
	var cntxtDtls = "in removegatepassdataMdl";
	var QRY_TO_EXEC = `update gatepass_dtl_t set approval_ind = '10' where gpass_id = '${data.id}'`;

console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//remove person data End

//get person data start
exports.getmemberdeatilsMdl = function (data,callback) {
	var cntxtDtls = "in getmemberdeatilsMdl";
	if(data.indicator==1){
	var QRY_TO_EXEC = `select Id,Name,Gender,Relationship,Phone,DATE_FORMAT(DOB,"%Y-%m-%d") as DOB
	from  residentfamily where Id = '${data.id}'`;
	}else if(data.indicator==2){
		var QRY_TO_EXEC = `select Id,VehicleType,RegNumber,ParkingSlotNumber
		from  residentvehicle where Id = '${data.id}'`;
	}
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//get person data End



exports.getpassdetailsbyidMdl = function (data,callback) {
	var cntxtDtls = "in getpassdetailsbyidMdl";
	var QRY_TO_EXEC = `select * from  gatepass_dtl_t where gpass_id = '${data.id}'`;

console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.suggestiondatabyidMdl = function (data,callback) {
	var cntxtDtls = "in suggestiondatabyidMdl";
	var QRY_TO_EXEC = `select * from  suggestions_dtl_t where suggestion_id = '${data.suggestion_id}'`;

console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


// exports.updatedaypassdetailsMdl = function (data,callback) {
// 	var date = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
// 	var cntxtDtls = "in updatedaypassdetailsMdl";
// 	if(data.indicator==1 || data.indicator==3){
// 	var QRY_TO_EXEC = `update  gatepass_dtl_t set name='${data.name}',flat_id='${data.flat_id}',f_date='${data.f_date}',t_date='${data.t_date}',type='${data.type}',relation='${data.relation}',phone='${data.phone}',in_time='${data.in_time}',purpose='${data.purpose}',materialize='${data.materialize}',materialize_subject='${data.materialize_subject}',approval_ind=1,created_on='${date}' where gpass_id='${data.gpass_id}';	`;
// 	}else{
// 		var QRY_TO_EXEC = `update  gatepass_dtl_t set name='${data.name}',flat_id='${data.flat_id}',f_date='${data.f_date}',t_date='${data.t_date}',type='${data.type}',relation='${data.relation}',phone='${data.phone}',in_time='${data.in_time}',purpose='${data.purpose}',materialize='${data.materialize}',materialize_subject='${data.materialize_subject}',approval_ind=0,created_on='${date}' where gpass_id='${data.gpass_id}';	`;
		
// 	}

// console.log(QRY_TO_EXEC)
// 	if (callback && typeof callback == "function") {
// 		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
// 			callback(err, results);
// 			return;
// 		});
// 	}
// 	else
// 		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
// };

exports.updatedaypassdetailsMdl = function (data,callback) {
  var date = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
  var cntxtDtls = "in updatedaypassdetailsMdl";
  if(data.indicator==1 || data.indicator==3){
  var QRY_TO_EXEC = `update  gatepass_dtl_t set name='${data.name}',flat_id='${data.flat_id}',f_date='${data.f_date}',t_date='${data.t_date}',type='${data.type}',relation='${data.relation}',phone='${data.phone}',in_time='${data.in_time}',purpose='${data.purpose}',materialize='${data.materialize}',materialize_subject='${data.materialize_subject}',approval_ind=1,created_on='${date}',out_time='${data.out_time}' where gpass_id='${data.gpass_id}'`;  ;
  }else{
    var QRY_TO_EXEC = `update  gatepass_dtl_t set name='${data.name}',flat_id='${data.flat_id}',f_date='${data.f_date}',t_date='${data.t_date}',type='${data.type}',relation='${data.relation}',phone='${data.phone}',in_time='${data.in_time}',purpose='${data.purpose}',materialize='${data.materialize}',materialize_subject='${data.materialize_subject}',approval_ind=0,created_on='${date}',out_time='${data.out_time}' where gpass_id='${data.gpass_id}';  `;
    
  }

console.log(QRY_TO_EXEC)
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updatesuggestionsMdl = function (data,callback) {
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in updatesuggestionsMdl";
	var QRY_TO_EXEC = `update suggestions_dtl_t set approval_ind=0,  title='${data.title}', description='${data.description}' ,createdon='${curDate}'  where suggestion_id = '${data.suggestion_id}'`;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.adminsuggestionsMdl = function (data,callback) {
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in adminsuggestionsMdl";
	var QRY_TO_EXEC = `update suggestions_dtl_t set approval_ind='${data.indicator}',user_id='${data.user_id}',createdby='${data.user_id}',createdon='${curDate}'  where suggestion_id = '${data.suggestion_id}'`;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//get person data start
exports.updatememberdetailsMdl = function (data,callback) {
    	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in updatememberdetailsMdl";
	var QRY_TO_EXEC = `update residentfamily set Approve_ind=0, Name='${data.f_name}', Phone='${data.f_phone}', Relationship='${data.f_relation}', DOB='${data.DOB}',Gender='${data.f_gender}',CreatedOn='${curDate}' where Id = '${data.id}'`;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updatevehiclefamilydetailsMdl = function (data,callback) {
    	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in updatevehiclefamilydetailsMdl";
	var QRY_TO_EXEC = `update residentvehicle set Approve_ind=0, VehicleType='${data.VehicleType}', RegNumber='${data.RegNumber}', ParkingSlotNumber='${data.ParkingSlotNumber}',CreatedOn='${curDate}'  where Id = '${data.id}'`;
console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




//fahasraa end






////////////sahasra new app starts////////////////

exports.newLoginAppCtrlMdl = function (logindata, callback) {
	var cntxtDtls = "in newLoginAppCtrlMdl";
	var QRY_TO_EXEC = `SELECT UserId,Approval_ind,Role,CommunityId from users u where u.Phone =  '${logindata.mobile}' and u.usr_pwd= '${logindata.pass}' and u.IsActive=0 `;
 console.log(QRY_TO_EXEC);

	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getremainingflatsMdl = function (logindata, callback) {
	var cntxtDtls = "in getremainingflatsMdl";
	var QRY_TO_EXEC = `SELECT FlatId,FlatNumber from flats where CommunityId='${logindata.CommunityId}' and Allot_ind=0 `;
 console.log(QRY_TO_EXEC);

	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.postaddrequestformMdl = function (logindata, callback) {
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in postaddrequestformMdl";
	var QRY_TO_EXEC = `insert into  requestcentre (RequestTypeCode,Description,subctgry,CreatedBy ,CreatedOn )  values('${logindata.name}','${logindata.desc}','${logindata.subctgry}','${logindata.user_id}','${curDate}'); `;
 console.log(QRY_TO_EXEC);

	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getrequestformdataMdl = function (logindata, callback) {
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in getrequestformdataMdl";
	if(logindata.role==0){
	var QRY_TO_EXEC = `select * from  requestcentre where createdBy='${logindata.user_id}' and IsActive=0 order by CreatedOn desc; `;
}else if(logindata.role==3){
	var QRY_TO_EXEC = `select r.*,FlatNumber,FirstName from  requestcentre r 
join users u on u.UserId=r.CreatedBy
join userflat uf on uf.UserId=u.UserId
join flats f on f.FlatId=uf.FlatId where subctgry!='undefined' and r.IsActive=0 order by r.CreatedOn desc; `;
}
else{
	var QRY_TO_EXEC = `select r.*,FlatNumber,FirstName from  requestcentre r 
join users u on u.UserId=r.CreatedBy
join userflat uf on uf.UserId=u.UserId
join flats f on f.FlatId=uf.FlatId where r.IsActive=0 group by r.Id order by r.CreatedOn desc; `;
}
 console.log(QRY_TO_EXEC);

	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};





exports.postuploadntfcnMdl = function (data, callback) {
	var cntxtDtls = "in postuploadntfcnMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `INSERT INTO 	society_dtl_t(title,description,created_by,created_time,variant_ind)
	values('${data.title}','${data.desc}','${data.user_id}','${curDate}' ,'${data.indicator}'); `;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};






exports.postuploadntfcnimgMdl = function (imageupload, img_ind, updtitem, callback) {
	var cntxtDtls = "in postuploadntfcnimgMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` img_url = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  society_dtl_t SET ${img_url} WHERE society_id=${updtitem}`;
//	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.getchangestatusMdl = function (data, callback) {
	var cntxtDtls = "in getchangestatusMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `update requestcentre set approval_ind='${data.approval_ind}', ModifiedBy='${data.user_id}', ModifiedOn='${curDate}',CreatedOn='${curDate}' where id='${data.id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.postgatepasschangestatusMdl = function (data, callback) {
	var cntxtDtls = "in postgatepasschangestatusMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `update gatepass_dtl_t set approval_ind='${data.approval_ind}', approved_by='${data.user_id}', approved_time='${curDate}' where gpass_id='${data.id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getparkingslotsMdl = function (data, callback) {
	var cntxtDtls = "in getparkingslotsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
    if(data.id==1){
	var QRY_TO_EXEC = `SELECT ParkingSlot_id,ParkingSlotNumber FROM freeparkingslots where CommunityId='${data.CommunityId}' and Allot_ind=0`;
    }else{
       var QRY_TO_EXEC = `SELECT 	intercom_id,intercom_no FROM intercom_dtl_t where CommunityId='${data.CommunityId}' and Allot_ind=0`; 
    }
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.addstaffdetailsMdl = function (data, callback) {
	var cntxtDtls = "in addstaffdetailsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `insert into staff_directory (name,category,phone,timing,createdby,createdon,approvedby,approvedon) values ('${data.name}','${data.category}','${data.phone}','${data.timing}','${data.user_id}','${curDate}','${data.user_id}','${curDate}');`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.addshifttimingsMdl = function (data, callback) {
	var cntxtDtls = "in addshifttimingsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `insert into shift_timings (in_time,out_time,createdby,createdon) values ('${data.in_time}','${data.out_time}','${data.user_id}','${curDate}');`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getshifttimingsMdl = function (data, callback) {
	var cntxtDtls = "in getshifttimingsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `select * from shift_timings where createdby = '${data.user_id}';`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getstaffdirectorydtlsMdl = function (data, callback) {
	var cntxtDtls = "in getstaffdirectorydtlsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `select staff_dir_id,name,phone,category,timing from staff_directory where createdby = '${data.user_id}';`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.postimpcontactMdl = function (imageupload,imgcnt,data, callback) {
	var cntxtDtls = "in postimpcontactMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `insert into staff_directory_impcontact (dir_url,createdby,createdon,community_id,indicator) values('${imageupload}','${data.user_id}','${curDate}','${data.CommunityId}','${data.indicator}')`;
// var QRY_TO_EXEC = `insert into staff_directory_impcontact (dir_url) values('${imageupload}')`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getstaffdrctyMdl = function (data, callback) {
	var cntxtDtls = "in getstaffdrctyMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `select * from staff_directory_impcontact where community_id = '${data.CommunityId}' and indicator='${data.indicator}' and d_in=0;`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getsurveyquestionsMdl = function (data, callback) {
	var cntxtDtls = "in getsurveyquestionsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `SELECT s.q_id,a.a_id,qstn,ans_lst,a.q_id as qstn_id from survy_qts s 
	join ans_lst a on  s.q_id = a.q_id where s.community_id='${data.CommunityId}' and role_id='${data.role}' and survey_id='${data.survey_id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.AddSurveyPostMdl = function (data, callback) {
	var cntxtDtls = "in AddSurveyPostMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `insert into survy_qts (	qstn,community_id,createdby,createdon) VALUES('${data.question}',
      '${data.CommunityId}','${data.user_id}','${curDate}');`; 
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.AddSurveyoptionPostMdl = function (insert_id,postData, callback) {
 var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = '';
    var QRY_SUB = '';
    var cntxtDtls = "in AddSurveyoptionPostMdl"; 
    console.log(postData);
    // console.log(postData.options);
    for(var v=0;v<postData.options.length;v++) {
        console.log(postData.options[v]);
      var QRY_SUB = `insert into ans_lst (q_id,ans_lst,i_ts) VALUES('${insert_id}',
      '${postData.options[v].opt}','${date}');`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.addsuggestionsMdl = function (data, callback) {
	var cntxtDtls = "in addsuggestionsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `insert into suggestions_dtl_t (title,description,user_id,community_id,createdby,createdon) values('${data.title}','${data.description}','${data.user_id}','${data.CommunityId}','${data.user_id}','${curDate}')`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.getsugestionsMdl = function (data, callback) {
	var cntxtDtls = "in getsugestionsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
    if(data.role==1){
	var QRY_TO_EXEC = `select s.*,DATE_FORMAT(s.createdon,"%d-%b-%Y") as currentdate,FlatNumber from suggestions_dtl_t s
	join userflat uf on uf.UserId=s.user_id
	join flats f on f.FlatId=uf.FlatId
	 where community_id='${data.CommunityId}' order by createdon desc`;
    }else if(data.role==0){
     var QRY_TO_EXEC = `select s.*,DATE_FORMAT(s.createdon,"%d-%b-%Y") as currentdate,FlatNumber from suggestions_dtl_t s
	join userflat uf on uf.UserId=s.user_id
	join flats f on f.FlatId=uf.FlatId
	 where community_id='${data.CommunityId}' and s.user_id='${data.user_id}' order by createdon desc`;   
    }
    else{
     var QRY_TO_EXEC = `select s.*,DATE_FORMAT(s.createdon,"%d-%b-%Y") as currentdate from suggestions_dtl_t s 
	 where community_id='${data.CommunityId}' and s.user_id='${data.user_id}' order by createdon desc`;   
    }
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// exports.getsugestionsMdl = function (data, callback) {
// 	var cntxtDtls = "in getsugestionsMdl";
//     var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
// 	var QRY_TO_EXEC = `select *,DATE_FORMAT(createdon,"%d-%m-%Y %h:%i %p") as currentdate from suggestions_dtl_t where community_id='${data.CommunityId}'`;
//      console.log(QRY_TO_EXEC)
// 	if (callback && typeof callback == "function")
// 		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
// 				callback(err, results);
// 			return;
// 		});
// 	else
// 		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
// };

exports.uploadexceldataMdl = function (data,id,callback) {
    console.log(data)
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in uploadexceldataMdl";
if (data.qstn) {
        var qstn = data.qstn.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {	
        var qstn = data.qstn;
    }
    if (data.community_id) {
        var community_id = data.community_id.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var community_id = data.community_id;
    }
     if (data.role_id) {
        var role_id = data.role_id.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var role_id = data.role_id;
    }
     if (data.survey_id) {
        var survey_id = data.survey_id.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var survey_id = data.survey_id;
    }
    if (data.option1) {
        var option1 = data.option1.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var option1 = data.option1;
    }
    if (data.option2) {
        var option2 = data.option2.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var option2 = data.option2;
    }
    if (data.option3) {
        var option3 = data.option3.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var option3 = data.option3;
    }
    if (data.option4) {
        var option4 = data.option4.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var option4 = data.option4;
    }

    
    
	var QRY_TO_EXEC = `INSERT INTO  survy_qts(qstn,community_id,role_id,survey_id,i_ts) 
	values('${qstn}','${community_id}','${role_id}','${survey_id}','${date}'); `;
// console.log(QRY_TO_EXEC)
if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.PostoptionsMdl = function (insert_id,data,id, callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in PostoptionsMdl";
	var imageuploadLao = '';
	var imageuploadLao2= '';
	var imageuploadLao3 = '';
	var imageuploadLao4 = '';
	// console.log(data.data);
	console.log(data);
	if (data.option1) {
		// console.log("option1 hitted");
		
		imageuploadLao = `insert into ans_lst (q_id,ans_lst,i_ts) values ('${insert_id}','${data.option1}','${date}');`;
	}
	if (data.option2) {
		// console.log("option2 hitted");
		imageuploadLao2 = `insert into ans_lst (q_id,ans_lst,i_ts) values ('${insert_id}','${data.option2}','${date}');`;
	}
	if (data.option3) {
		console.log("option3 hitted");
		imageuploadLao3 = `insert into ans_lst (q_id,ans_lst,i_ts) values ('${insert_id}','${data.option3}','${date}');`;
	}
	if (data.option4) {
		console.log("option4 hitted");
		imageuploadLao4 = `insert into ans_lst (q_id,ans_lst,i_ts) values ('${insert_id}','${data.option4}','${date}');`;
	}
	var QRY_TO_EXEC = ` ${imageuploadLao} ${imageuploadLao2} ${imageuploadLao3} ${imageuploadLao4} `;
	
console.log(QRY_TO_EXEC);

	
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};





exports.uploainvoicedataMdl = function (data,id,callback) {
    // console.log(data);console.log(id);
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in uploainvoicedataMdl";
	if (data.total) {
        var total = data.total.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {	
        var total = data.total;
    }
if (data.due_date) {
        var due_date = data.due_date.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {	
        var due_date = data.due_date;
    }
  
    if (data.due_ammount) {
        var due_ammount = data.due_ammount.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var due_ammount = data.due_ammount;
    }
    if (data.water_charges) {
        var water_charges = data.water_charges.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var water_charges = data.water_charges;
    }
    if (data.water_used) {
        var water_used = data.water_used.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var water_used = data.water_used;
    }
    if (data.common_area_charges) {
        var common_area_charges = data.common_area_charges.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var common_area_charges = data.common_area_charges;
	}
	if (data.other_charges) {
        var other_charges = data.other_charges.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var other_charges = data.other_charges;
	}
	if (data.paid_on) {
        var paid_on = data.paid_on.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var paid_on = data.paid_on;
	}
	if (data.status) {
        var status = data.status.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var status = data.status;
	}
	if (data.flat_no) {
        var flat_no = data.flat_no.replace(/&/g, "").replace(/\\/g, "\\ ").replace(/⋆/g, "*").replace(/β/g, "").replace(/>/g, "").replace(/</g, "").replace(/"/g, "").replace(/‘/g, "").replace(/'/g, "").replace(/`/g, "").replace(/=/g, "=").replace(/≥/gi, "").replace(/≤/gi, "").replace(/₹/gi, "Rs. ");
    } else {
        var flat_no = data.flat_no;
    }
    
    
	var QRY_TO_EXEC = `INSERT INTO  invoice_dtl_t(total,due_date,due_ammount,water_charges,water_used,common_area_charges,other_charges,paid_on,status,community_id,flat_no,i_ts,d_in) 
	values('${total}','${due_date}','${due_ammount}','${water_charges}','${water_used}','${common_area_charges}','${other_charges}','${paid_on}','${status}','${id}','${flat_no}','${date}',0); `;
console.log(QRY_TO_EXEC)
if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.getinvoicedataMdl = function (data, callback) {
	var cntxtDtls = "in getinvoicedataMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
    if(data.role==1){
	var QRY_TO_EXEC = `SELECT * from invoice_dtl_t where community_id='${data.CommunityId}' and d_in=0`;
    }else{
    var QRY_TO_EXEC = `SELECT i.* from users u
JOIN userflat uf on uf.UserId=u.UserId
join flats f on f.FlatId=uf.FlatId
join invoice_dtl_t i on i.flat_no=f.FlatNumber
where u.UserId='${data.user_id}' order by invoice_id desc`;    
    }
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.AddSurveyanswersPostMdl = function (postData, callback) {
 var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = '';
    var QRY_SUB = '';
    var cntxtDtls = "in AddSurveyanswersPostMdl"; 
    console.log(postData);
    console.log(postData.survey);
    for(var v=0;v<postData.survey.length;v++) {
        console.log(postData.survey[v]);
      var QRY_SUB = `insert into usr_answer_dtl_t (resident_id,community_id,q_id,answer_id,i_ts) VALUES('${postData.user_id}','${postData.CommunityId}',
      '${postData.survey[v].QuestionId}','${postData.survey[v].AnswerId}','${date}');`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.addsrvyatemptMdl = function (data, callback) {
    var cntxtDtls = "addsrvyatemptMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `update srvy_usr_rltn_t set d_in=1 where srvy_usr_id='${data.srvy_usr_id}';`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.addnoticeMdl = function (data, callback) {
    var cntxtDtls = "addnoticeMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `insert into  notice_dtl_t (title,description,createdby,community_id,i_ts ,d_in )  values('${data.title}','${data.desc}','${data.user_id}','${data.CommunityId}','${date}',0);`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getnoticedataMdl = function (data, callback) {
    var cntxtDtls = "getnoticedataMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `select * from notice_dtl_t where community_id = '${data.CommunityId}' and d_in=0`;
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.removestaffdirMdl = function (data, callback) {
    var cntxtDtls = "removestaffdirMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `update users set IsActive=1 where UserId= '${data.id}'`;
    console.log(QRY_TO_EXEC)
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getassignedflatsMdl = function (data, callback) {
    var cntxtDtls = "getassignedflatsMdl";
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = `SELECT f.FlatId,f.CommunityId,f.FlatNumber FROM users u
join userflat uf on uf.UserId=u.UserId
JOIN flats f on f.FlatId=uf.FlatId where u.UserId='${data.user_id}' and u.IsActive=0`;
    console.log(QRY_TO_EXEC)
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
////////model
exports.editinvoicdtlsMdl = function (data, callback) {
console.log(data);
	var cntxtDtls = "in editinvoicdtlsMdl";
	var date = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');

	var QRY_TO_EXEC = `UPDATE  invoice_dtl_t SET total = '${data.total}',pending = '${data.pending}',
	paid ='${data.paid}',remarks ='${data.remarks}',status ='${data.status}',flat_no ='${data.flat_no}' WHERE invoice_id = ${data.invoice_id}`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getsurveyeditbyidMdl = function (id, callback) {
	var cntxtDtls = "in getsurveyeditbyidMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var QRY_TO_EXEC = `SELECT * FROM survy_qts  where q_id=${id}`;
	console.log(QRY_TO_EXEC);
	// var QRY_TO_EXEC = `SELECT * FROM survy_qts as sq join ans_lst as aw on aw.q_id=sq.q_id where sq.q_id=${id}`;
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getsurvyanswdtlsMdl = function (id, callback) {
	var cntxtDtls = "in getsurvyanswdtlsMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var QRY_TO_EXEC = `SELECT * FROM ans_lst  where q_id=${id}`;
	console.log(QRY_TO_EXEC);
	// var QRY_TO_EXEC = `SELECT * FROM survy_qts as sq join ans_lst as aw on aw.q_id=sq.q_id where sq.q_id=${id}`;
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updateanswrrsdataMdl = function (data, callback) {
	var cntxtDtls = "updateanswrrsdataMdl"
	var QRY_TO_EXEC = `UPDATE  ans_lst SET 	ans_lst = '${data.ans_lst}' WHERE a_id = ${data.a_id} `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updatequestionsdataMdl = function (data, callback) {
	var cntxtDtls = "updatequestionsdataMdl"
	var QRY_TO_EXEC = `UPDATE  survy_qts SET qstn = '${data.qstn}' WHERE q_id = ${data.q_id} `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.uploadeditinvoicdtMdl = function (data, callback) {
	// console.log('data');
	// console.log(data.data[0].total);
	var date = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');

	var cntxtDtls = "in uploadeditinvoicdtMdl";

	var QRY_TO_EXEC = '';
	var QRY = ''
	for (var i = 0; i < data.data.length; i++) {
		QRY = `UPDATE  invoice_dtl_t SET total = '${data.data[i].total}',due_date = '${data.data[i].due_date}',
		due_ammount ='${data.data[i].due_ammount}',water_charges ='${data.data[i].water_charges}',water_used ='${data.data[i].water_used}',common_area_charges ='${data.data[i].common_area_charges}',
		other_charges ='${data.data[i].other_charges}',paid_on ='${data.data[i].paid_on}',status ='${data.data[i].status}',flat_no ='${data.data[i].flat_no}',u_ts='${date}' WHERE invoice_id = '${data.data[i].invoice_id}'; `;
		QRY_TO_EXEC = QRY_TO_EXEC + QRY;
	}
	
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.itemiconsendCtrlMdl = function (reviewArr, callback) {
	var cntxtDtls = "itemiconsendCtrlMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var QRY_TO_EXEC = `INSERT INTO gallery_imgs(name) VALUES('${reviewArr.name}')`;
	//   //////console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.itemiconupdateImagesMdl = function (imageupload, img_ind, updtitem, callback) {
	console.log(imageupload);
	var cntxtDtls = "in itemiconupdateImagesMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var img_url = '';
	if (img_ind == 0) {
		img_url = ` gal_img = '${imageupload}'`;
	}
	var QRY_TO_EXEC = `UPDATE  gallery_imgs SET ${img_url} WHERE id=${updtitem}`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getimgsdtlsMdl = function (callback) {
	var cntxtDtls = "in getimgsdtlsMdl";
	var QRY_TO_EXEC = `SELECT * FROM gallery_imgs where d_in=0;`;
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.deletgalryimgsMdl = function (id, callback) {
	var cntxtDtls = "in deletgalryimgsMdl";
	var QRY_TO_EXEC = `update gallery_imgs set d_in=1 WHERE id = ${id.id}; `;
		console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.getqtnanswsdataMdl = function (data, callback) {
	var cntxtDtls = "in getqtnanswsdataMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var QRY_TO_EXEC = `	SELECT s.q_id,a.a_id,qstn,ans_lst,s.role_id,s.survey_id,a.q_id as qstn_id from
	 survy_qts s join ans_lst a on s.q_id = a.q_id where  s.community_id='${data.CommunityId}' and role_id='${data.id}'  `;
		console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

		
		
		
			exports.getflatnumbersMdl = function (data, callback) {
			var cntxtDtls = "in getflatnumbersMdl";
			var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
			var QRY_TO_EXEC = `SELECT * from flats where CommunityId='${data.CommunityId}' `;
			console.log(QRY_TO_EXEC);
			if (callback && typeof callback == "function") {
				dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
					callback(err, results);
					return;
				});
			}
			else
				return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
		};
		
		
			exports.getsurveycntsMdl = function (data, callback) {
				console.log(data);
				
			var cntxtDtls = "in getsurveycntsMdl";
			var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
			var QRY_TO_EXEC = `SELECT survey_id,Count(*) as cnt from survy_qts s where role_id ='${data.role}' and survey_id not in (SELECT srvy_id from srvy_usr_rltn_t where role='${data.role}' group by srvy_id) group by survey_id; `;
			console.log(QRY_TO_EXEC);
			if (callback && typeof callback == "function") {
				dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
					callback(err, results);
					return;
				});
			}
			else
				return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
		};

		exports.getnotassignedusersMdl = function (data, callback) {
			var cntxtDtls = "in getnotassignedusersMdl";
			var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
			var QRY_TO_EXEC = `SELECT UserId from users u 
			left JOIN srvy_usr_rltn_t s on s.user_id = u.UserId  where u.Role='${data.role}'  and u.IsActive=0  `;
			console.log(QRY_TO_EXEC);
			if (callback && typeof callback == "function") {
				dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
					callback(err, results);
					return;
				});
			}
			else
				return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
		};

		exports.postsrvytousersMdl = function (results,data, callback) {
			var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
			   var QRY_TO_EXEC = '';
			   var QRY_SUB = '';
			   var cntxtDtls = "in postsrvytousersMdl"; 
			   var postData=results;
			   for(var v=0;v<postData.length;v++) {
				   console.log(postData[v].UserId);
				 var QRY_SUB = `insert into srvy_usr_rltn_t (user_id,srvy_id,role,i_ts,d_in) VALUES('${postData[v].UserId}','${data.survey_id}','${data.role}','${date}',0);`;  
				 QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
				 console.log(QRY_TO_EXEC);
			   }
			   if (callback && typeof callback == "function")
				   dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
					   callback(err, results);
					   return;
				   });
			   else
				   return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
		   };
	

		   

		   exports.getsurveycntbyuserMdl = function (data, callback) {			
		var cntxtDtls = "in getsurveycntbyuserMdl";
		var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
		if(data.role==1){
			var QRY_TO_EXEC = `SELECT survey_id,COUNT(*) as cnt,role_id from survy_qts sq where sq.role_id='${data.role_id}' and community_id='${data.CommunityId}' and d_in=0  group by survey_id order by survey_id desc`;
			
		}else{
		var QRY_TO_EXEC = `SELECT survey_id,COUNT(*) as cnt,u.d_in,srvy_usr_id from survy_qts sq
		join srvy_usr_rltn_t u on u.srvy_id=sq.survey_id and u.role=sq.role_id where role_id='${data.role}' and user_id='${data.user_id}' and u.d_in=0 group by survey_id order by survey_id desc ;`;
		}
		console.log(QRY_TO_EXEC);
		if (callback && typeof callback == "function") {
			dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
				return;
			});
		}
		else
			return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
	};
exports.getresultbyuserMdl = function (data, callback) {
	var cntxtDtls = "in getresultbyuserMdl";
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	if(data.role==1){
		var QRY_TO_EXEC = `SELECT srvy_usr_id,FirstName,FlatNumber,d_in,CASE 
		WHEN (d_in=0) THEN 'Pending' else 'Attempted' END AS resultval from srvy_usr_rltn_t su
		join users u on u.UserId=su.user_id 
		join userflat uf on uf.UserId=u.UserId
join flats f on f.FlatId=uf.FlatId where su.role='${data.role_id}' and u.CommunityId='${data.CommunityId}' and srvy_id='${data.srvy_id}' order by su.d_in desc; `;
		}else{
	var QRY_TO_EXEC = `SELECT qstn,ans_lst from usr_answer_dtl_t ua
	join ans_lst a on a.a_id=ua.answer_id
	JOIN survy_qts q on q.q_id=a.q_id where resident_id='${data.user_id}' and survey_id='${data.srvy_id}'; `;
	}
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.addhelperdtlsMdl = function (data, callback) {
    console.log(data);
	var cntxtDtls = "in addhelperdtlsMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `insert  into helper_dtl_t (helper_ctgry,helper_nm,helper_mobile,create_by,community_id,created_time,d_in) values('${data.helper_ctgry}','${data.helper_nm}','${data.helper_mobile}','${data.user_id}','${data.CommunityId}','${curDate}',0)`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.gethelperdtlsMdl = function (data, callback) {
    console.log(data);
	var cntxtDtls = "in gethelperdtlsMdl";
	var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	if(data.helper_ctgry=='0'){
	var QRY_TO_EXEC = `SELECT UserId as id,FirstName as helper_nm, Phone as helper_mobile,type as helper_ctgry FROM users where Role=3 and CommunityId ='${data.CommunityId}' and IsActive=0`;
	}else{
		var QRY_TO_EXEC = `SELECT FirstName as helper_nm, Phone as helper_mobile,type as helper_ctgry FROM users where Role=3 and CommunityId= '${data.CommunityId}' and type='${data.helper_ctgry}' and IsActive=0`;	
	}
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getinvoicestatusMdl = function (data, callback) {
    console.log(data);
	var cntxtDtls = "in getinvoicestatusMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `SELECT status,status as pending from invoice_dtl_t group by status`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//helpers start
exports.gethelperVisitortMdl = function (data,callback) {
	var cntxtDtls = "in gethelperVisitortMdl";
		if(data.role==1){
		if(data.exit_type=='Adult'){
			var QRY_TO_EXEC = `SELECT r.Id,Name,Phone FROM residentfamily r
			join userflat uf on uf.UserId=r.UserId
			join flats f on f.FlatId=uf.FlatId where FlatNumber ='${data.flat_id}' and f.CommunityId='${data.CommunityId}' and r.d_in=0 and  DATEDIFF(CURDATE(),DOB) > 5840`;
	 }else{
			var QRY_TO_EXEC = `SELECT r.Id,Name,Phone FROM residentfamily r
			join userflat uf on uf.UserId=r.UserId
			join flats f on f.FlatId=uf.FlatId where FlatNumber ='${data.flat_id}' and f.CommunityId='${data.CommunityId}' and r.d_in=0 and  DATEDIFF(CURDATE(),DOB) < 5840`;	
	 }

	}else{
		if(data.exit_type=='Adult'){
			var QRY_TO_EXEC = `SELECT Id,Name,Phone FROM residentfamily where CreatedBy ='${data.id}' and d_in=0 and  DATEDIFF(CURDATE(),DOB) > 5840`;
	 }else{
			var QRY_TO_EXEC = `SELECT Id,Name,Phone FROM residentfamily where CreatedBy ='${data.id}' and d_in=0 and  DATEDIFF(CURDATE(),DOB) < 5840`;	
	 }
	}
	  console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//helpers End
exports.getresidentsflatsMdl = function (data,callback) {
	var cntxtDtls = "in getresidentsflatsMdl";
	var QRY_TO_EXEC = `SELECT FlatNumber,FirstName from users u 
	JOIN userflat uf on uf.Id=u.UserId
	join flats f on f.FlatId=uf.FlatId where f.CommunityId='${data.CommunityId}';`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.uploadnoticentfcnMdl = function (postData,callback) {
	var date = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in uploadnoticentfcnMdl";
	var QRY_TO_EXEC = '';
    var SUB_QRY_TO_EXEC = '';
	for(var v=0;v<postData.arraydata.length;v++) {
        console.log(postData.arraydata[v]);
      var QRY_SUB = `insert into resident_notice_dtl_t (FlatNumber,title,description,role_ind,created_by,i_ts,d_in) VALUES(
      '${postData.arraydata[v].FlatNumber}','${postData.title}','${postData.desc}','${postData.role_ind}','${postData.user_id}','${date}',0);`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.residentnoticeMdl = function (data,callback) {
	var cntxtDtls = "in residentnoticeMdl";
	var QRY_TO_EXEC = `SELECT res_notice_id,title,description,r.i_ts from resident_notice_dtl_t r
	join flats f on f.FlatNumber=r.FlatNumber
	join userflat uf on uf.FlatId=f.FlatId
	join users u on u.UserId= uf.UserId where u.UserId='${data.user_id}' and u.CommunityId='${data.CommunityId}' ORDER BY res_notice_id desc limit 1;`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getassignedparkingslotsMdl = function (data,callback) {
	var cntxtDtls = "in getassignedparkingslotsMdl";
	var QRY_TO_EXEC = `select p.ParkingSlot_id,ParkingSlotNumber from userparking up
	join freeparkingslots p on p.ParkingSlot_id=up.parkingslot_id
	where up.UserId='${data.user_id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.removefaqMdl = function (data,callback) {
	var cntxtDtls = "in removefaqMdl";
	if(data.ind==0){
	var QRY_TO_EXEC = `update society_dtl_t set d_in=1 where society_id='${data.id}'`;
	}else{
	  	var QRY_TO_EXEC = `update survy_qts  set d_in=1 where role_id='${data.role_indicator}' and community_id='${data.CommunityId}' and survey_id='${data.id}';`;  
	}
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.removereqcntrMdl = function (data,callback) {
	var cntxtDtls = "in removereqcntrMdl";
	var QRY_TO_EXEC = `update requestcentre set IsActive=1 where Id='${data.reqcntr_id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getreqcntrdtlsbyIdMdl = function (data,callback) {
	var cntxtDtls = "in getreqcntrdtlsbyIdMdl";
	var QRY_TO_EXEC = `SELECT Id,RequestTypeCode,Description,subctgry
 from requestcentre where Id='${data.reqcntr_id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.updatereqformMdl = function (data,callback) {
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in updatereqformMdl";
	var QRY_TO_EXEC = `update requestcentre set RequestTypeCode='${data.name}',Description='${data.desc}',subctgry='${data.subctgry}',ModifiedOn='${curDate}',ModifiedBy='${data.user_id}',approval_ind=0,CreatedOn='${curDate}' where Id='${data.id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getownerMdl = function (data,callback) {
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in getownerMdl";
	var QRY_TO_EXEC = `select * from users where UserId='${data.owner_id}'`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.submitownerMdl = function (data,cres,callback) {
    // console.log(cres.RowDataPacket.FirstName);
    // console.log(cres.FirstName);
    // console.log(FirstName)
    
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var cntxtDtls = "in submitownerMdl";
	var QRY_TO_EXEC = `insert into residentfamily(UserId,Name,Phone,Approve_ind,CreatedBy,CreatedOn) values('${data.owner_id}','${cres.FirstName}','${cres.Phone}',0,'${data.owner_id}','${curDate}')`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// kiran code satrt
// kiran code satrt

exports.getrandruserloginMdl = function (data, callback) {
    console.log(data);
	var cntxtDtls = "in getrandruserloginMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `SELECT id,UID_NUM,VOLUNTEER_NAME,VOLUNTEER_MOBILE,SACHIVALAYAM_NAME FROM rtgs_dtl_t WHERE VOLUNTEER_MOBILE ='${data.VOLUNTEER_MOBILE}' and d_in='0' GROUP BY VOLUNTEER_NAME LIMIT 1;`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.gettotalvalunteerjoblistMdl = function (data, callback) {
    console.log(data);
	var cntxtDtls = "in gettotalvalunteerjoblistMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
// 	var QRY_TO_EXEC = `SELECT s.id as job_id,s.pdf_no,s.fmly_dtls,s.gender,s.relation,s.occupation,s.rc_no,s.aadhar,s.bank_ac,s.ifsc,s.job_status,r.id,s.relation_name FROM sachivalayam_dtl_t as s 
// JOIN rtgs_dtl_t as r ON r.UID_NUM=s.aadhar
// WHERE r.VOLUNTEER_MOBILE='${data.VOLUNTEER_MOBILE}' AND s.job_status=0;`;

    var QRY_TO_EXEC = `SELECT UID_NUM,id,PDF_NO,FAMILY_DETAILS,GENDER,RELATION,OCCUPATION,RICE_CARD_NO,AADHAR,BANK_ACCOUNT,IFSC,JOB_STATUS,HOSEHOLD_ID,CITIZEN_NAME,PN_DATE FROM  rtgs_dtl_t 
WHERE VOLUNTEER_MOBILE='${data.VOLUNTEER_MOBILE}' AND JOB_STATUS=0;`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.gatcastlistMdl = function (callback) {
	var cntxtDtls = "in gatcastlistMdl";
	var QRY_TO_EXEC = `SELECT * FROM off_cast_sub_cast_t WHERE d_in=0`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getrelationshipMdl = function (callback) {
	var cntxtDtls = "in getrelationshipMdl";
    var curDate = moment().utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	var QRY_TO_EXEC = `SELECT * FROM off_relation_t where d_in=0 order by relation_nm`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getbanklistMdl = function (callback) {
	var cntxtDtls = "in getbanklistMdl";
	var QRY_TO_EXEC = `SELECT * FROM off_bank_list_t where d_in=0 order by name_of_bank`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.geteducationqualificationMdl = function (callback) {
	var cntxtDtls = "in geteducationqualificationMdl";
	var QRY_TO_EXEC = `SELECT * FROM off_education_qualification_t where d_in=0`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getoccupationMdl = function (callback) {
	var cntxtDtls = "in getoccupationMdl";
	var QRY_TO_EXEC = `SELECT * FROM off_occupation_t where d_in=0 order by occupation`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getcattlelistMdl = function (callback) {
	var cntxtDtls = "in getcattlelistMdl";
	var QRY_TO_EXEC = `SELECT * FROM off_cottle_owned_t where d_in=0 order by cattle_nm`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.postfamilydetailsMdl = function (data,callback) {
	var cntxtDtls = "in postfamilydetailsMdl";
     
    //  var QRY_TO_EXEC = `update sachivalayam_dtl_t set fmly_dtls='${data.fmly_dtls}',gender='${data.gender}',relation='${data.relation}',relation_name='${data.relation_name}',occupation='${data.occupation}',
    //  rc_no='${data.rc_no}',aadhar='${data.aadhar}',bank_ac='${data.bank_ac}',ifsc='${data.ifsc}',remarks='${data.remarks}',job_status='1',fathersname='${data.fathersname}',mothersname='${data.mothersname}',
    //  phone_number='${data.phone_number}',date_of_birth='${data.date_of_birth}',caste='${data.caste}',sub_caste='${data.sub_caste}',caste_certificate_no='${data.caste_certificate_no}',married='${data.married}',
    //  date_of_marriage='${data.date_of_marriage}',marriage_cetificate_number='${data.marriage_cetificate_number}',persons_with_disability='${data.persons_with_disability}',
    //  disability_certificate_no='${data.disability_certificate_no}',name_of_bank='${data.name_of_bank}',name_of_bank_branch='${data.name_of_bank_branch}',voter_id_card_no='${data.voter_id_card_no}',
    //  voter_list_part_number='${data.voter_list_part_number}',voter_list_serial_no='${data.voter_list_serial_no}',driving_license_no='${data.driving_license_no}',school_tc_marks_list_no='${data.school_tc_marks_list_no}',
    //  pan_no='${data.pan_no}',passport_no='${data.passport_no}',education_qualification='${data.education_qualification}',divorce_certificate='${data.divorce_certificate}'
    //  where  pdf_no='${data.pdf_no}' and  id='${data.job_id}'`;
    
    var QRY_TO_EXEC = `update rtgs_dtl_t set FAMILY_DETAILS='${data.fmly_dtls}',GENDER='${data.gender}',RELATION='${data.relation}',RELATION_NAME='${data.relation_name}',OCCUPATION='${data.occupation}',
     RC_NO='${data.rc_no}',AADHAR='${data.aadhar}',BANK_ACCOUNT='${data.bank_ac}',IFSC='${data.ifsc}',REMARKS='${data.remarks}',JOB_STATUS='1',FATHER_NAME='${data.fathersname}',MOTHER_NAME='${data.mothersname}',
     PHONE_NUMBER='${data.phone_number}',DATE_OF_BIRTH='${data.date_of_birth}',CASTE='${data.caste}',SUB_CASTE='${data.sub_caste}',CASTE_CERTIFICATE_NO='${data.caste_certificate_no}',MARRIED_STATUS='${data.married}',
     DATE_OF_MARRIAGE='${data.date_of_marriage}',MARRIAGE_CETIFICATE_NUMBER='${data.marriage_cetificate_number}',PERSONS_WITH_DISABILITY='${data.persons_with_disability}',
     DISABILITY_CERTIFICATE_NUMBER='${data.disability_certificate_no}',NAME_OF_BANK='${data.name_of_bank}',NAME_OF_BANK_BRANCH='${data.name_of_bank_branch}',VOTER_ID_CARD_NUMBER='${data.voter_id_card_no}',
     VOTER_LIST_PART_NUMBER='${data.voter_list_part_number}',VOTER_LIST_SERIAL_NUMBER='${data.voter_list_serial_no}',DRIVING_LICENSE_NUMBER='${data.driving_license_no}',SCHOOL_TC_MARKS_LIST_NUMBER='${data.school_tc}',MARK_LIST_NUMBER='${data.marks_list}',
     PAN_NO='${data.pan_no}',PASSPORT_NO='${data.passport_no}',EDUCATION_QUALIFICATION='${data.education_qualification}',DIVORCE_CERTIFICATE='${data.divorce_certificate}'
     where  pdf_no='${data.pdf_no}' and  id='${data.job_id}'`;
    
     console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postnewfamilydetailsMdl = function (data,callback) {
	var cntxtDtls = "in postnewfamilydetailsMdl";
     
     var QRY_TO_EXEC = `insert sachivalayam_dtl_t set fmly_dtls='${data.fmly_dtls}',gender='${data.gender}',relation='${data.relation}',relation_name='${data.relation_name}',occupation='${data.occupation}',
     rc_no='${data.rc_no}',aadhar='${data.aadhar}',bank_ac='${data.bank_ac}',ifsc='${data.ifsc}',remarks='${data.remarks}',job_status='1',fathersname='${data.fathersname}',mothersname='${data.mothersname}',
     phone_number='${data.phone_number}',date_of_birth='${data.date_of_birth}',caste='${data.caste}',sub_caste='${data.sub_caste}',caste_certificate_no='${data.caste_certificate_no}',married='${data.married}',
     date_of_marriage='${data.date_of_marriage}',marriage_cetificate_number='${data.marriage_cetificate_number}',persons_with_disability='${data.persons_with_disability}',
     disability_certificate_no='${data.disability_certificate_no}',name_of_bank='${data.name_of_bank}',name_of_bank_branch='${data.name_of_bank_branch}',voter_id_card_no='${data.voter_id_card_no}',
     voter_list_part_number='${data.voter_list_part_number}',voter_list_serial_no='${data.voter_list_serial_no}',driving_license_no='${data.driving_license_no}',school_tc_marks_list_no='${data.school_tc_marks_list_no}',
     pan_no='${data.pan_no}',passport_no='${data.passport_no}',education_qualification='${data.education_qualification}',divorce_certificate='${data.divorce_certificate}'`;
     console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.postcfmsMdl = function (postData, callback) {
 var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var QRY_TO_EXEC = '';
    var QRY_SUB = '';
    var cntxtDtls = "in postcfmsMdl"; 
    for(var i=0;i<postData.length;i++) {
      var QRY_SUB = `insert into cfms_dtl_t (AdhaarNo,BUZEI,BankAcc,BillDate,BillNo,BillStatus,DDO,FISCALYear,GrossAmt,HOA,NetAmt,OgBillNo,PURPOSE,PayStatus,TotDeduction,VenCdDesc) 
      VALUES('${postData[i].AdhaarNo}','${postData[i].BUZEI}','${postData[i].BankAcc}','${postData[i].BillDate}','${postData[i].BillNo}','${postData[i].BillStatus}','${postData[i].DDO}','${postData[i].FISCALYear}','${postData[i].GrossAmt}','${postData[i].HOA}','${postData[i].NetAmt}','${postData[i].OgBillNo}','${postData[i].PURPOSE}','${postData[i].PayStatus}','${postData[i].TotDeduction}','${postData[i].VenCdDesc}');`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// kiran code end


exports.getfacilitytimingsMdl = function (data,callback) {
	var cntxtDtls = "in getfacilitytimingsMdl";
	var QRY_TO_EXEC = `SELECT * from facility_timing_dtl_t f where facility_id='${data.facility_id}' and facility_time_id not in (SELECT t.facility_time_id from facility_timing_dtl_t t
		join facility_creating_dtl_t c on c.facility_timing_id=t.facility_time_id where date='${data.seldate}' and t.d_in=0 and c.d_in=0);`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.postcreatingfacilityMdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var QRY_TO_EXEC = '';
	var QRY_SUB = '';
	var postData=data.facility_timings_array;
    var cntxtDtls = "in postcreatingfacilityMdl"; 
    for(var i=0;i<postData.length;i++) { 
      var QRY_SUB = `insert into facility_creating_dtl_t (facility_id,facility_timing_id,date,slots_count,person_count,createdby,community_id,i_ts) 
      VALUES('${data.facility_id}','${postData[i].facility_id}','${data.date}','${data.slots_count}','${data.person_count}','${data.user_id}','${data.CommunityId}','${date}');`;  
      QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
      console.log(QRY_TO_EXEC);
    }
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
	return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getfacilityclassesMdl = function (data,callback) {
	var cntxtDtls = "in getfacilityclassesMdl";
	if(data.role==1){
	var QRY_TO_EXEC = `SELECT  * from  facility_usr_booking_dtl_t u
	join  facility_dtl_t f on f.facility_id=u.facility_id  where  f.d_in=0 and u.d_in=0 and   u.facility_id='${data.facility_id}' and  u.community_id='${data.CommunityId}' and selection_dt='${data.seldate}' order by u.i_ts DESC;
	`;
	}else{
		var QRY_TO_EXEC = `SELECT  * from  facility_usr_booking_dtl_t u
		join  facility_dtl_t f on f.facility_id=u.facility_id  where  f.d_in=0 and u.d_in=0 and   u.facility_id='${data.facility_id}' and  u.community_id='${data.CommunityId}' and u.usr_id='${data.user_id}' and selection_dt='${data.seldate}' order by u.i_ts DESC;`;	
	}
		console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.CheckusrbookingfacilityMdl = function (data,callback) {
	var cntxtDtls = "in CheckusrbookingfacilityMdl";
	var QRY_TO_EXEC = `SELECT * from facility_usr_booking_dtl_t where facility_id ='${data.facility_id}' and usr_id='${data.user_id}' and community_id='${data.CommunityId}' and d_in=0 and selection_dt='${data.date}';`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.checkusrbookingfacilityCountsMdl = function (data,callback) {
	var cntxtDtls = "in checkusrbookingfacilityCountsMdl";
	var QRY_TO_EXEC = `SELECT COUNT(*) as cnt from facility_usr_booking_dtl_t where facility_id='${data.facility_id}' and selection_dt='${data.date}' and d_in=0 and community_id='${data.CommunityId}' and creation_id='${data.postuserbookingArr[0].creating_id}';`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postusrbookingfacilityMdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postusrbookingfacilityMdl";
	var QRY_TO_EXEC = `insert into facility_usr_booking_dtl_t (usr_id,facility_id,facility_timing_id,selection_dt,creation_id,in_time,out_time,d_in,i_ts,created_by,community_id,flat_no) 
	VALUES('${data.user_id}','${data.facility_id}','${data.timing_id}','${data.date}','${data.postuserbookingArr[0].creating_id}','${data.postuserbookingArr[0].in_time}','${data.postuserbookingArr[0].out_time}',0,'${date}','${data.user_id}','${data.CommunityId}','${data.flat_no}');`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.postusrbookingfacilityCountsMdl = function (data,booked_count,callback) {

	var count=booked_count;
		var quantity=count+1;
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postusrbookingfacilityCountsMdl";
	var QRY_TO_EXEC = `update facility_creating_dtl_t set booked_count='${quantity}' where creating_id='${data.creating_id}';`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.getbookingcountsMdl = function (data,callback) {
	var cntxtDtls = "in getbookingcountsMdl";
	var QRY_TO_EXEC = `SELECT booked_count from facility_creating_dtl_t where    creating_id='${data.creating_id}' and d_in=0 ;`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// postusrcancelfacilityMdl

exports.postusrcancelfacilityCountsMdl = function (data,booked_count,callback) {

	var count=booked_count;
		var quantity=count-1;
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postusrcancelfacilityCountsMdl";
	var QRY_TO_EXEC = `update facility_creating_dtl_t set booked_count='${quantity}' where creating_id='${data.creating_id}';`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.Chkcancellationtimings = function (data,callback) {
	var curtime = moment().utcOffset("+05:30").format("HH:mm:ss");
console.log(curtime);

	var cntxtDtls = "in Chkcancellationtimings";
	var QRY_TO_EXEC = `SELECT  TIMEDIFF('${curtime}','${data.in_time}') as timediff from facility_usr_booking_dtl_t where facility_usr_bookng_id='${data.facility_usr_bookng_id}' and selection_dt='${data.date}' and d_in=0;`;
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.postusrcancelfacilityMdl = function (data,callback) { 
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postusrcancelfacilityMdl";
	var QRY_TO_EXEC = `update facility_usr_booking_dtl_t set d_in=1,d_ts='${date}' where facility_usr_bookng_id='${data.facility_usr_bookng_id}';`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getfacilitydataMdl = function (data,callback) { 
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getfacilitydataMdl";
	var QRY_TO_EXEC = `select * from facility_dtl_t where d_in=0;`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.splittimingsMdl = function (data,callback) { 
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in splittimingsMdl";
	var QRY_TO_EXEC = `select (SELECT ROUND(finalcnt/60) endres from (SELECT ROUND(seccnt/${data.slots_count}) finalcnt from (SELECT TIME_TO_SEC(cnt) as seccnt from 
	(SELECT TIMEDIFF('${data.d2}','${data.d1}') as cnt from users) as cn) as cn) as cn group by endres) as endres,
	(SELECT ROUND(cnt/60) from (SELECT TIME_TO_SEC('${data.d1}') as cnt from users GROUP BY cnt) as cnt) as starttime;`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postfacilitytimingMdl = function (data,callback) { 
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var QRY_TO_EXEC = '';
	var QRY_SUB = '';
	var cntxtDtls = "in postfacilitytimingMdl";
	for(var i=0;i<data.timingArray.length;i++) {
	var QRY_SUB = ` insert into facility_creating_dtl_t (facility_id,in_time,out_time,slots_count,person_count,createdby,community_id,i_ts) values('${data.facility_id}','${data.timingArray[i].start_time}','${data.timingArray[i].end_time}','${data.slots_count}','${data.person_count}','${data.user_id}','${data.CommunityId}','${date}');`;  
	QRY_TO_EXEC = QRY_TO_EXEC + QRY_SUB;
	console.log(QRY_TO_EXEC);
	}
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

   exports.getselecteddatetimeMdl = function (data,callback) { 
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getselecteddatetimeMdl";
	var QRY_TO_EXEC = `SELECT c.in_time,c.out_time, SUM(CASE WHEN f.d_in=0 and selection_dt='${data.date}' THEN 1 else 0 End) as booked_count, person_count,creating_id,c.facility_id from facility_usr_booking_dtl_t f
	RIGHT join facility_creating_dtl_t c on c.creating_id=f.creation_id where c.facility_id='${data.facility_id}' and c.community_id='${data.CommunityId}' and  c.d_in=0  group  by creating_id ;`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postusrcancelfacilitybyidMdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postusrcancelfacilitybyidMdl";
	var QRY_TO_EXEC = `update facility_usr_booking_dtl_t set d_in=1, d_ts='${date}' where facility_usr_bookng_id='${data.facility_usr_bookng_id}';`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
exports.getbookedfacilitybyidmdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getbookedfacilitybyidmdl";
	var QRY_TO_EXEC = `select facility_usr_bookng_id,creation_id,in_time,out_time,DATE_FORMAT(selection_dt,"%Y-%m-%d") as selection_dt,facility_id from facility_usr_booking_dtl_t  where facility_usr_bookng_id='${data.facility_usr_bookng_id}';`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postusreditbookingfacilityMdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postusreditbookingfacilityMdl";
	var QRY_TO_EXEC = `update facility_usr_booking_dtl_t set creation_id='${data.postuserbookingArr[0].creating_id}',in_time='${data.postuserbookingArr[0].in_time}',out_time='${data.postuserbookingArr[0].out_time}',i_ts='${date}' where facility_usr_bookng_id='${data.facility_usr_bookng_id}';`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getallotedtimeMdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getallotedtimeMdl";
	var QRY_TO_EXEC = `SELECT * FROM facility_creating_dtl_t where facility_id='${data.facility_id}' and community_id='${data.CommunityId}' and d_in=0;`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getrelationsMdl = function (data,callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getrelationsMdl";
	var QRY_TO_EXEC = `SELECT relation,gender FROM relation_dtl_t where d_in=0;`;  
     console.log(QRY_TO_EXEC)
	if (callback && typeof callback == "function")
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
				callback(err, results);
			return;
		});
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};