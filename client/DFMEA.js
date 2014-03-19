/*Teams = new Meteor.Collection("teams");
 Projects = new Meteor.Collection("projects");
 */
DFMEAs = new Meteor.Collection("fmeas");
var category_names = ['FMEA','Design Functions', 'Failure Modes', 'Effects', 'Causes', 'Design Controls'];


Template.hello.greeting = function() {
	return "Welcome to designCloud's DFMEA module.";
};
/*
 Template.hello.events({
 'click input' : function() {
 // template data, if any, is available in 'this'
 if ( typeof console !== 'undefined')
 console.log("You pressed the button");
 }
 });
 */

Template.displayFMEA.helpers ({
	getroot: function() {
		var temp = DFMEAs.findOne({parent_category: null});
		return temp;}
});

Template.displayStuff.helpers ({
	node: function() {
		var ID=this._id;
		console.log(ID);
		return DFMEAs.find({parent_category: ID});
	}	
});

