/*Teams = new Meteor.Collection("teams");
 Projects = new Meteor.Collection("projects");
 */
DFMEAs = new Meteor.Collection("fmeas");
var category_names = ['FMEA', 'Design Functions', 'Failure Modes', 'Effects', 'Causes', 'Design Controls'];

$(document).ready(function() {
	$('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
	$('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title', 'Collapse this branch').on('click', function(e) {
		var children = $(this).parent('li.parent_li').find(' > ul > li');
		if (children.is(':visible')) {
			children.hide('fast');
			$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
		} else {
			children.show('fast');
			$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
		}
		e.stopPropagation();
	});
});

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

Template.displayStuff.helpers({
	node : function() {
		var ID = this._id;
		return DFMEAs.find({
			parent_category : ID
		});
	},
	category_class : function() {
		var ID = this.category_name;
		switch (ID) {
			case 'Design Functions': {
				return "Fctn";
				break;
			}
			case 'Failure Modes': {
				return "FModes";
				break;
			}
			case 'Effects': {
				return "Effects";
				break;
			}
			case 'Causes': {
				return "Causes";
				break;
			}
			case 'Design Controls': {
				return "DesCntrls";
				break;
			}
			default:
				return null;
		}
	},
	rating_type : function() {
		var ID = this.rating_type;
		switch (ID) {
			case 'SEV': {
				return "SEV";
				break;
			}
			case 'OCC': {
				return "OCC";
				break;
			}
			case 'DET': {
				return "DET";
				break;
			}
			default:
				return null;
		}
	},
	NeedNewRow : function() {
		var ID = this.category_name;
		if (ID === 'Causes' || ID === 'Effects' || ID === 'Failure Modes' || ID === 'Design Functions' || 'Design Controls') {
			return true;
		} else {

			return false;
		}

	}
});

