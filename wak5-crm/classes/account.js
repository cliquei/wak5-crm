﻿//Creating the Account classmodel.Account = new DataClass("Accounts");//Add Contact attributes.model.Account.ID = new Attribute("storage", "long", "key auto");model.Account.name = new Attribute("storage", "string", "btree");model.Account.phone = new Attribute("storage", "string", "btree");model.Account.billingStreet = new Attribute("storage", "string", "btree");model.Account.billingCity = new Attribute("storage", "string", "btree");model.Account.billingState = new Attribute("storage", "string", "btree");model.Account.billingZip = new Attribute("storage", "string", "btree");model.Account.billingCountry = new Attribute("storage", "string", "btree");model.Account.website = new Attribute("storage", "string", "btree");model.Account.owner = new Attribute("relatedEntity", "User", "User"); // relation to the User classmodel.Account.activityCollection = new Attribute("relatedEntities", "Activity", "account", {reversePath:true});model.Account.contactCollection = new Attribute("relatedEntities", "Contact", "account", {reversePath:true});model.Account.noteCollection = new Attribute("relatedEntities", "Note", "account", {reversePath:true});//Eventsmodel.Account.events = {};//onInit()model.Account.events.onInit = function() {	var myCurrentUser = currentUser(), // we get the user of the current session.		myUser = ds.User.find("ID = :1", myCurrentUser.ID);			if ((myCurrentUser !== null) && (myUser !== null)) {//if a user is logged in.				this.owner = myUser;	}}; model.Account.events.onRestrictingQuery = function() {	var myCurrentUser = currentUser(), // we get the user of the current session.		sessionRef = currentSession(), // Get session.		result;			result = ds.Account.createEntityCollection(); //default to empty collection.		if (sessionRef.belongsTo("Administrator")) {		result = ds.Account.all();	} else {		result = ds.Account.query("owner.ID = :1", myCurrentUser.ID);	}		return result;}