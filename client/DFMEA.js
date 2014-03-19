Teams = new Meteor.Collection("teams");
Projects = new Meteor.Collection("projects");

FMEAs = new Meteor.Collection("fmeas");

DesignFunctions = new Meteor.Collection("designFunctions");
DesignFModes = new Meteor.Collection("designFModes");

if (Meteor.isClient) {
	Template.hello.greeting = function() {
		return "Welcome to designCloud's DFMEA module.";
	};

	Template.hello.events({
		'click input' : function() {
			// template data, if any, is available in 'this'
			if ( typeof console !== 'undefined')
				console.log("You pressed the button");
		}
	});

	Template.displayFunction.designFunctions = function() {
		return DesignFunctions.find();
	}

	Template.displayFModes.designFModes = function() {
		return DesignFModes.find();
	}
}
