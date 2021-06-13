var express = require('express');
router = express.Router();
// var jwt = require('jsonwebtoken');
var sampleRoutes = require('../controllers/mainCtrl');
// process.env.SECRET_KEY = "thisismysecretkey";


router.get('/getkadapada', sampleRoutes.getkadapadaCtrl);
router.get('/getdata', sampleRoutes.getdataCtrl);
router.post('/uploadstaffdata/:id', sampleRoutes.uploadstaffdataCtrl)
router.get('/getstaffdata/:id', sampleRoutes.getstaffdataCtrl);

router.post('/uploadmandaldata/:id', sampleRoutes.uploadmandaldataCtrl)


router.get('/getoldmobilesdtls', sampleRoutes.getoldmobilesdtlsCtrl);
router.post('/getnewmobilesdtls', sampleRoutes.getnewmobilesdtlsCtrl);
router.get('/getaccessoridtls', sampleRoutes.getaccessoridtlsCtrl);
router.get('/getitemsbyallids/:product_id/:tbl_id', sampleRoutes.getitemsbyallidsCtrl); //get product dtls
router.post('/getbrandmodelsdata', sampleRoutes.getbrandmodelsdataCtrl); //get brand models data
router.post('/submitsignupdata', sampleRoutes.submitsignupdataCtrl); //submit signup data
router.post('/submitlogindata', sampleRoutes.submitlogindataCtrl); //submit login data
router.post('/submitaddressdata', sampleRoutes.submitaddressdataCtrl); //submit address data start
router.get('/getcheckoutaddressdtls/:customer_id', sampleRoutes.getcheckoutaddressCtrl); //get checkout address dtls start
router.post('/PostPaymentorderDtls', sampleRoutes.PostPaymentorderCtrl); //submit Post PaymentDtls
router.get('/getProfilereportdtls/:customer_id', sampleRoutes.getProfilereportCtrl); //get Profile reportdtls strat
router.post('/removeAddressdata/:id', sampleRoutes.removeAddressdataCtrl); //remove Address data start
router.post('/submitupdateprofiledata', sampleRoutes.submitupdateprofileCtrl); //submit update profiledata start
router.post('/submitupdateaddressdata', sampleRoutes.submitupdateaddressCtrl); //submit update addressdata start
router.post('/getordersdata/:customer_id', sampleRoutes.getordersdataCtrl); //get orders data start
router.post('/getviewodersdata', sampleRoutes.getviewodersdataCtrl); //get view oders data start
router.post('/getlatestproducts', sampleRoutes.getlatestproductsCtrl); //get latest products start
router.get('/getbannersdatastart', sampleRoutes.getbannersdataCtrl); //get banners data start
router.post('/sendemail', sampleRoutes.sendemailCtrl);



//Fahasraa start 

router.post('/postsignupdetailsApp', sampleRoutes.postsignupdetailsAppCtrl);
router.post('/LoginApp', sampleRoutes.LoginAppCtrl);

//prev api 
router.post('/getfamilydetails', sampleRoutes.getfamilydetailsCtrl);
router.post('/getdirectorydetails', sampleRoutes.getdirectorydetailsCtrl);
router.post('/getvistordetails', sampleRoutes.getvistordetailsCtrl);
router.post('/getvehicledetails', sampleRoutes.getvehicledetailsCtrl);

router.post('/gethelperdetails', sampleRoutes.gethelperdetailsCtrl);



router.post('/sahasrapostfamilydetails', sampleRoutes.sahasrapostfamilydetailsCtrl);
router.post('/postvehicledetails', sampleRoutes.postvehicledetails);
router.post('/postregularvisitorsdetails', sampleRoutes.postregularvisitorsdetailsCtrl);

router.post('/addhelperdetails', sampleRoutes.addhelperdetailsCtrl);
////venkatesh code starts////////////

router.post('/postvisitorfamilydetails', sampleRoutes.postvisitorfamilydetailsCtrl);
router.post('/posthelperfamilydetails', sampleRoutes.posthelperfamilydetailsCtrl);

router.post('/postvehiclefamilydetails', sampleRoutes.postvehiclefamilydetailsCtrl);
router.post('/postgatepassdetails', sampleRoutes.postgatepassdetailsCtrl);

router.post('/postaddexitpassdetails', sampleRoutes.postaddexitpassdetailsCtrl);
router.post('/postaddvisitorpassdetails', sampleRoutes.postaddvisitorpassdetailsCtrl);
router.post('/getgatepassdetails', sampleRoutes.getgatepassdetailsCtrl);
router.post('/getApprovalsdata', sampleRoutes.getApprovalsdataCtrl);
router.post('/getsocietydata', sampleRoutes.getsocietydataCtrl);
router.get('/getTesttbl', sampleRoutes.getTesttblCtrl);



////venkatesh code Ends////////////


/// fahassara Admin Bhargav Start
router.post('/getUserForApproval', sampleRoutes.getUserForApprovalCtrl);

router.post('/postApproval', sampleRoutes.postApprovalCtrl);
router.post('/CancelApproval', sampleRoutes.CancelApprovalCtrl);

router.post('/Adminloginwithotppass', sampleRoutes.AdminloginwithotppassCtrl);
router.post('/Adminpostsignupdetails', sampleRoutes.AdminpostsignupdetailsCtrl);
router.post('/adminAcceptFamilyMembers', sampleRoutes.adminAcceptFamilyMembersCtrl);



router.post('/postApprovalFamily', sampleRoutes.postApprovalFamilyCtrl);
router.post('/CancelApprovalFamily', sampleRoutes.CancelApprovalFamilyCtrl);

/// fahassara Admin Bhargav End
router.post('/removepersondata', sampleRoutes.removepersondataCtrl); //remove person data

router.post('/removegatepassdata', sampleRoutes.removegatepassdataCtrl); //remove gatepass data
router.post('/getmemberdeatils', sampleRoutes.getmemberdeatilsCtrl); //get person data
router.post('/updatememberdetails', sampleRoutes.updatememberdetailsCtrl); //Update person data
router.post('/updatevehiclefamilydetails', sampleRoutes.updatevehiclefamilydetailsCtrl); //Update vehicles data
router.post('/getpassdetailsbyid', sampleRoutes.getpassdetailsbyidCtrl); //get gpass person data
router.post('/updatedaypassdetails', sampleRoutes.updatedaypassdetailsCtrl); //update gpass person data

router.post('/suggestiondatabyid', sampleRoutes.suggestiondatabyidCtrl); //get person suggestion data
router.post('/updatesuggestions', sampleRoutes.updatesuggestionsCtrl); //update person suggsetion data
router.post('/adminsuggestions', sampleRoutes.adminsuggestionsCtrl); //update person suggsetion data






//Fahasraa end 












/////////////sahasra new app///////////
router.post('/newLoginApp', sampleRoutes.newLoginAppCtrl);
router.post('/getremainingflats', sampleRoutes.getremainingflatsCtrl);
router.post('/postaddrequestform', sampleRoutes.postaddrequestformCtrl);
router.post('/getrequestformdata', sampleRoutes.getrequestformdataCtrl);
router.post('/postuploadntfcn', sampleRoutes.postuploadntfcnCtrl);
router.post('/getchangestatus', sampleRoutes.getchangestatusCtrl);
router.post('/postgatepasschangestatus', sampleRoutes.postgatepasschangestatusCtrl);
router.post('/getparkingslots', sampleRoutes.getparkingslotsCtrl);
router.post('/addstaffdetails', sampleRoutes.addstaffdetailsCtrl);
router.post('/addshifttimings', sampleRoutes.addshifttimingsCtrl);
router.post('/getshifttimings', sampleRoutes.getshifttimingsCtrl);
router.post('/getstaffdirectorydtls', sampleRoutes.getstaffdirectorydtlsCtrl);
router.post('/postimpcontact', sampleRoutes.postimpcontactCtrl);
router.post('/getstaffdrcty', sampleRoutes.getstaffdrctyCtrl);

router.post('/getsurveyquestions', sampleRoutes.getsurveyquestionsCtrl);
router.post('/AddSurveyPost', sampleRoutes.AddSurveyPostCtrl);
router.post('/addsuggestions', sampleRoutes.addsuggestionsCtrl); 
router.post('/getsugestions', sampleRoutes.getsugestionsCtrl); 
router.post('/uploadexceldata/:id', sampleRoutes.uploadexceldataCtrl)
router.post('/uploainvoicedata/:id', sampleRoutes.uploainvoicedataCtrl)
router.post('/getinvoicedata', sampleRoutes.getinvoicedataCtrl);
router.post('/AddSurveyanswersPost', sampleRoutes.AddSurveyanswersPostCtrl);
router.post('/addnotice', sampleRoutes.addnoticeCtrl);
router.post('/getnoticedata', sampleRoutes.getnoticedataCtrl);
router.post('/removestaffdir', sampleRoutes.removestaffdirCtrl);
router.post('/getassignedflats', sampleRoutes.getassignedflatsCtrl);
router.post('/editinvoicdtls', sampleRoutes.editinvoicdtlsCtrl);//edit

// router.post('/editsurvyqtnsdtls', sampleRoutes.editsurvyqtnsdtlsCtrl);//edit


// router.post('/editsurvyanswdtls', sampleRoutes.editsurvyanswdtlsCtrl);//edit


router.get('/getsurveyeditbyid/:id', sampleRoutes.getsurveyeditbyidCtrl);
router.post('/getflatnumbers', sampleRoutes.getflatnumbersCtrl);//edit

router.get('/getsurvyanswdtls/:id', sampleRoutes.getsurvyanswdtlsCtrl);
router.post('/updateanswrrsdata', sampleRoutes.updateanswrrsdataCtrl); 
router.post('/updatequestionsdata', sampleRoutes.updatequestionsdataCtrl); 
router.post('/uploadeditinvoicdt', sampleRoutes.uploadeditinvoicdtCtrl)
router.post('/itemiconsend', sampleRoutes.itemiconsendCtrl);// item icons post
router.get('/getimgsdtls', sampleRoutes.getimgsdtlsCtrl);
router.get('/deletgalryimgs/:id', sampleRoutes.deletgalryimgsCtrl);//delete
router.post('/getqtnanswsdata', sampleRoutes.getqtnanswsdataCtrl);
router.post('/getsurveycnts', sampleRoutes.getsurveycntsCtrl);
router.post('/postsrvytousers', sampleRoutes.postsrvytousersCtrl);
router.post('/getsurveycntbyuser', sampleRoutes.getsurveycntbyuserCtrl);
router.post('/getresultbyuser', sampleRoutes.getresultbyuserCtrl);
router.post('/addhelperdtls', sampleRoutes.addhelperdtlsCtrl);
router.post('/gethelperdtls', sampleRoutes.gethelperdtlsCtrl);
router.post('/getinvoicestatus', sampleRoutes.getinvoicestatusCtrl);
//helpers start
router.post('/gethelperVisitortData', sampleRoutes.gethelperVisitortCtrl);
//helpers end
router.post('/getresidentsflats', sampleRoutes.getresidentsflatsCtrl);
router.post('/uploadnoticentfcn', sampleRoutes.uploadnoticentfcnCtrl);
router.post('/residentnotice', sampleRoutes.residentnoticeCtrl);
router.post('/getassignedparkingslots', sampleRoutes.getassignedparkingslotsCtrl);
router.post('/removefaq', sampleRoutes.removefaqCtrl);
router.post('/removereqcntr', sampleRoutes.removereqcntrCtrl);
router.post('/getreqcntrdtlsbyId', sampleRoutes.getreqcntrdtlsbyIdCtrl);
router.post('/updatereqform', sampleRoutes.updatereqformCtrl);
router.post('/submitowner', sampleRoutes.submitownerCtrl);





// kiran code satrt
router.post('/getrandruserlogin', sampleRoutes.getrandruserloginCtrl);
router.post('/gettotalvalunteerjoblist', sampleRoutes.gettotalvalunteerjoblistCtrl);
router.get('/gatcastlist', sampleRoutes.gatcastlistCtrl);
router.get('/getrelationship', sampleRoutes.getrelationshipCtrl);
router.get('/getbanklist', sampleRoutes.getbanklistCtrl);
router.get('/geteducationqualification', sampleRoutes.geteducationqualificationCtrl);
router.get('/getoccupation', sampleRoutes.getoccupationCtrl);
router.get('/getcattlelist', sampleRoutes.getcattlelistCtrl);

router.post('/postfamilydetails', sampleRoutes.postfamilydetailsCtrl);
router.post('/postnewfamilydetails', sampleRoutes.postnewfamilydetailsCtrl);
// router.post('/posthouseleveldata', sampleRoutes.posthouseleveldataCtrl);
// kiran code end

router.get('/getplvm', sampleRoutes.getplvmCtrl);
router.post('/getfacilitytimings', sampleRoutes.getfacilitytimingsCtrl);//getfacilitytimings
router.post('/postcreatingfacility', sampleRoutes.postcreatingfacilityCtrl);
router.post('/getfacilityclasses', sampleRoutes.getfacilityclassesCtrl);//getfacilityclasses
router.post('/postusrbookingfacility', sampleRoutes.postusrbookingfacilityCtrl);//postusrbookingfacility
router.post('/postusrcancelfacility', sampleRoutes.postusrcancelfacilityCtrl);


router.post('/splittimings', sampleRoutes.splittimingsCtrl);//splittimings
router.post('/postfacilitytiming', sampleRoutes.postfacilitytimingCtrl);//postfacilitytiming
router.post('/getselecteddatetime', sampleRoutes.getselecteddatetimeCtrl);//getselecteddatetime

router.post('/bookusrfacility', sampleRoutes.bookusrfacilityCtrl);//bookusrfacility
router.post('/postusrcancelfacilitybyid', sampleRoutes.postusrcancelfacilitybyidCtrl);//postusrcancelfacilitybyid
router.post('/getbookedfacilitybyid', sampleRoutes.getbookedfacilitybyidCtrl);//getbookedfacilitybyid
router.post('/postusrrebookingfacility', sampleRoutes.postusrrebookingfacilityCtrl);//postusrrebookingfacility
router.post('/getallotedtime', sampleRoutes.getallotedtimeCtrl);//getallotedtime
router.post('/getrelations', sampleRoutes.getrelationsCtrl);//getrelations



router.get('/postimagesdata', sampleRoutes.postimagesdataCtrl);

module.exports = router;
