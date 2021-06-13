var mysql = require('mysql');
var MySQLConnection = {};
var MySQLConPool	= {};
//  var USER = 'amaravathi9';
//  var PWD = 'Amaravathi6633';
//  var DATABASE = 'carrer';
//  var DB_HOST_NAME = 'amaravathi9.ccnt4anxplco.ap-south-1.rds.amazonaws.com';

// var USER = 'anand_sweet_user';
// var PWD = 'anand_sweets@2020';
// var DATABASE = 'anand_sweet_db';
// var DB_HOST_NAME = 'localhost';

// var USER = 'communit_sahasra';
// var PWD = 'sahasra@123';
// var DATABASE = 'calmunity';
// var DB_HOST_NAME = '162.241.124.158';

 var USER = 'sahasra';
 var PWD = 'dp@123';
 var DATABASE = 'calmunity';
 var DB_HOST_NAME = 'localhost';



var MAX_POOL_SIZE		= 100;
var MIN_POOL_SIZE		= 50;

var MySQLConPool = mysql.createPool({
    host                : DB_HOST_NAME,
    port      		    : 3306,
    user                : USER,
    password            : PWD,
    database            : DATABASE,
    connectTimeout		: 20000,
    connectionLimit	    : MAX_POOL_SIZE,
    debug 		        : false,
    multipleStatements  : true
});


exports.MySQLConPool = MySQLConPool;