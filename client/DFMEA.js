/*Teams = new Meteor.Collection("teams");
 Projects = new Meteor.Collection("projects");
 */
DFMEAs = new Meteor.Collection("fmeas");
var category_names = ['FMEA', 'Design Functions', 'Failure Modes', 'Effects', 'Causes', 'Design Controls'];

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

Template.displayFMEA.helpers({
	getroot : function() {
		var temp = DFMEAs.findOne({
			parent_category : null
		});
		return temp;
	}
});

Template.displayStuff.helpers ({
	node: function() {
		var ID=this._id;
		return DFMEAs.find({parent_category: ID});
		},
	category_class: function() {
		var ID = this.category_name;
		switch (ID) {
			case 'Design Functions': {
				return "span";
				break;
			}
			case 'Failure Modes': {
				return "span";
				break;
			}
			case 'Effects': {
				return "span";
				break;
			}
			case 'Causes': {
				return "span";
				break;
			}
			case 'Design Controls': {
				return "span";
				break;
			}
			default:  return "nochoice";
		}},
	rating_type: function() {
		var ID = this.rating_type;
		switch (ID) {
			case 'SEV': {
				return "span";
				break;
			}
			case 'OCC': {
				return "span";
				break;
			}
			case 'DET': {
				return "span";
				break;
			}
			default:  return "nochoice";
		}
	}
});

