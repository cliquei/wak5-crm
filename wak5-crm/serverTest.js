﻿//if (loginByPassword("wak5@wakanda.org", "wak5wak5")) { //"dave@wakanda.org", "dave1dave"if (loginByPassword("wak5@wakanda.org", "wak5wak5")) {		var moment = require('moment');		//moment(new Date()).format('mm/dd/yy');		moment().format("MM/DD/YY")		//	var theEmployees = ds.User.query("role = :1", "Employee");//	theEmployees		//ds.User.all()		/*	ds.Activity.remove();	ds.Account.remove();	ds.Contact.remove();	ds.Lead.remove();	ds.RecentItem.remove();	ds.Note.remove();	*/		/*	var thePath=getFolder("path");	thePath += "assets/people_medium.png";	var mypict = loadImage (thePath);  // load the image from disk	mypict	*/			/*	if(!this.avatar){   		this.avatar = getFolder('path') + __myNameSpace.School.USERS.defaultImg;   	}   */			/**/	//var arClass = []; //	for (var vName in ds.dataClasses) { // put each datastore class of ds//     	arClass.push (vName); // in the array//    }//    //    arClass						/*	var dataClassNames = [];		for (var property in model) {	    dataClassNames.push(property);	}		dataClassNames	*/			/*	var myObj = {a: 1, b: 2, c: 3}, myKeys = []; 	for (var property in myObj) {	    myKeys.push(property);	}	 	myKeys; //['a','b','c'];	*/				//ds.Log.all()			//ds.Lead.all()	//ds.Lead.query("changeOwnerFlag == :1", true)		/*	ds.Activity.all().remove();	ds.Account.all().remove();	ds.Contact.all().remove();	ds.Lead.all().remove();	ds.RecentItem.all().remove();	ds.Note.all().remove();	*/			/*	var dave = ds.User({email: "dave@wakanda.org"});		var daveLead = dave.leadCollection[0];	daveLead			var newNote = new ds.Note({		title: "Wakanday 2013 EU Hotels", 		body: "Is the staff staying at Holiday Inn this year. I need to check with Jean-Michel.", 		createDate: "7/3/2013",		owner: dave,		lead: daveLead	});	newNote.save();				var newNote = new ds.Note({		title: "Wakanday 2013 EU", 		body: "Lyle has not yet booked his flight. Let's make sure he has a non-stop on Virgin Airlines. They have the best food.", 		createDate: "7/3/2013",		owner: dave,		lead: daveLead	});	newNote.save();			var newNote = new ds.Note({		title: "Wakanday 2013 EU", 		body: "Lyle has not yet booked his flight. Let's make sure he has a non-stop on Virgin Airlines. They have the best food.", 		createDate: "7/3/2013",		owner: dave,		lead: daveLead	});	newNote.save();		var newNote = new ds.Note({		title: "Wakanday 2013 EU", 		body: "We need to think about the venue. Last year we had 2 - 3 hundred. Are we thinking it will be the same? Maybe 4 - 5 hundred.", 		createDate: "7/23/2013",		owner: dave,		lead: daveLead	});	newNote.save();		var newNote = new ds.Note({		title: "JS Everywhere", 		body: "Can people take the ferry to the island. Lyle is going to swim but I don't think this is an option for everyone.", 		createDate: "7/31/2013",		owner: dave,		lead: daveLead	});	newNote.save();		var newNote = new ds.Note({		title: "Javascript Ninja", 		body: "I have been reading this book by the author of jQuery..", 		createDate: "8/3/2013",		owner: dave,		lead: daveLead	});	newNote.save();		var newNote = new ds.Note({		title: "4D Wakanda Party", 		body: "Let's think about this for after JS Everywhere.", 		createDate: "8/3/2013",		owner: dave,		lead: daveLead	});	newNote.save();			newNote	*/				//ds.Note.all().remove()		/*	var dave = ds.User({email: "dave@wakanda.org"});	var daveLead = dave.leadCollection[0];	daveLead			var newNote = new ds.Note({		title: "Capitol Records", 		body: "When we go down to LA I have to call Huey and have him show me around.", 		createDate: "8/24/2013",		owner: dave,		lead: daveLead	});	newNote.save();		newNote	*/		/*	var newPriority = new ds.Priority({		title: "Lowest"	});	newPriority.save();		newPriority	*/			//ds.User.all()		//ds.Activity.all();	//ds.Account.all();	//ds.Contact.all();	//ds.Lead.all();	//ds.RecentItem.all();					//ds.User.all() //.remove();		//var dave = ds.User({email: "dave@wakanda.org"});//	var oneContact = dave.contactCollection[0];//	var oneLead = dave.leadCollection[0];	//var oneAccount = dave.accountCollection[0];		//oneAccount		/*	var newActivity = new ds.Activity({		subject: "Hire Andy Dont Care.", 		priority: "High", 		status: "Delayed",		due: "09/24/2013",		type: "Task",		owner: dave,		account: oneAccount	});	newActivity.save();	*/		/*	var newActivity = new ds.Activity({		subject: "Write CRM Application.", 		priority: "Normal", 		status: "In Progress",		due: "07/31/2013",		type: "Task",		owner: dave,		contact: oneContact	});	newActivity.save();	*/		//var newActivity = ds.Activity({subject: "Review McCarvell Invoicing App."});	//newActivity.remove();	//newActivity.type = "Task";	//newActivity.save();}//Create some Users./*var dave = new ds.User({	email: "dave@wakanda.org", 	password: "dave1dave", 	fullName: "David Robbins",	role: "Administrator"});dave.save();var tom = new ds.User({	email: "tom@wakanda.org", 	password: "tom1tom", 	fullName: "Tom Miller",	role: "Manager"});tom.save();var greg = new ds.User({	email: "greg@wakanda.org", 	password: "greg1greg", 	fullName: "Greg McCarvell",	role: "Employee"});greg.save();var wak5 = new ds.User({	email: "wak5@wakanda.org", 	password: "wak5wak5", 	fullName: "Administrator",	role: "Administrator"});wak5.save();*//*var menNamesArray = require('generateData').generateNamesArr("firstNamesMen"),	womenNamesArray = require('generateData').generateNamesArr("firstNamesWomen"),	lastNamesArray = require('generateData').generateNamesArr("lastNames"),	lastNamesArray = require('generateData').generateNamesArr("lastNames"),	streetNamesArray = require('generateData').generateNamesArr("streetNames"),	cityNamesArray = require('generateData').generateNamesArr("cityNames"),		firstNamesMenArr = [],	firstNameMan = null,	firstNamesWomenArr = [],	firstNameWoman = null,	lastNamesArr = [],	lastName = null,	streetNamesArr = [],	streetName = null,	cityNamesArr = [],	cityName = null;*//*for (var i = 0; i < 19; i +=1) {	cityName = require('generateData').getRandomName(cityNamesArray);	cityNamesArray.push(cityName);}cityNamesArray*//*for (var i = 0; i < 19; i +=1) {	streetName = require('generateData').getRandomName(streetNamesArray);	streetNamesArr.push(streetName);}streetNamesArr*//*for (var i = 0; i < 21; i +=1) {	firstNameWoman = require('generateData').getRandomName(womenNamesArray);	firstNamesWomenArr.push(firstNameWoman);}firstNamesWomenArr*//*for (var i = 0; i < 21; i +=1) {	firstNameMan = require('generateData').getRandomName(menNamesArray);	firstNamesMenArr.push(firstNameMan);}firstNamesMenArr*//*for (var i = 0; i < 19; i +=1) {	lastName = require('generateData').getRandomName(lastNamesArray);	lastNamesArr.push(lastName);}lastNamesArr*///var bPath = application.getFolder('path')  + 'Modules/resources'//application.getFolder('path')// ds.getModelFolder().path//require('generateData').getRandomNumber(45, 90)//ds.User.all()//var dave = ds.User.find("email = :1", "dave@wakanda.org");//dave.title = "Technical Account Manager";//dave.save();//var greg = ds.User.find("email = :1", "greg@wakanda.org");//greg.title = "Director of Business Development";//greg.save();//var tom = ds.User.find("email = :1", "tom@wakanda.org");//tom.title = "General Manager";//tom.save();/*var _ = require('underscore');var one = 	_.random(50, 300),	two = 	_.random(50, 300),	three = _.random(50, 300),	four = 	_.random(50, 300),	five = 	_.random(50, 300);*///Wakanda Training Day 4 - Web Workers.//ds.Log.all() //.remove()/*var createLogRecWorker = new SharedWorker("Workers/createLogRecDaemon.js", "logRecDaemon");var thePort = createLogRecWorker.port; // MessagePort to communicate with the log rec shared worker.thePort.postMessage({what: 'createLogRecord', title: "one"});thePort.postMessage({what: 'createLogRecord', title: "two"});//thePort.postMessage({what: 'stop'});*///Note: When you convert a lead make sure to set leadCollection to null./**///theEmployees = ds.User.query("role = :1", "Employee");	/*	_	= require('underscore');			function getRandomUser() {		var theEmployees = ds.User.query("role = :1", "Employee"),			len = theEmployees.length,			randomEmployeeIndex = _.random(0, len-1);					return theEmployees[randomEmployeeIndex];	}		var theUser = getRandomUser();	theUser	*/