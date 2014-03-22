DFMEAs = new Meteor.Collection('fmeas');

var timestamp = (new Date()).getTime();
var FMEA_root = {
	header : {
		number : "FMEA1",
		team : ["User1", "User 2", "User3"],
		title : "DFMEA title",
		creation_date : timestamp,
		revision_date : timestamp,
	},
	category_name : "FMEA",
	parent_category : null,
	subcategories : []
}

/*Teams = new Meteor.Collection("teams");
 Projects = new Meteor.Collection("projects");

 FMEAs = new Meteor.Collection("fmeas");

 DesignFunctions = new Meteor.Collection("designFunctions");
 DesignFModes = new Meteor.Collection("designFModes");
 FailureEffects = new Meteor.Collection("failureEffects");
 //Causes = new Meteor.Collection("Causes");
 //DesignControls = new Meteor.Collection ("DesignControls");
 */
Meteor.startup(function() {

	if (DFMEAs.find().count() === 0) {// populate with some data
		var FMEA_id = DFMEAs.insert(FMEA_root);
		for ( i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
			// Insert the functions
			var fctn_id = DFMEAs.insert({
				category_name: "Design Functions",
				parent_category: FMEA_id,
				subcategories: [],
				content: "Design Function" + i
			});
			DFMEAs.update({_id: FMEA_id}, {$push: {subcategories: fctn_id}});
			for ( j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
				var fmode_id = DFMEAs.insert({
					category_name: "Failure Modes",
					parent_category: fctn_id,
					subcategories: [],
					content: "Doesn't work" + j
				});
				DFMEAs.update({_id: fctn_id}, {$push: {subcategories: fmode_id}});
				for ( k = 0; k < Math.floor(Math.random() * 5) + 1; k++) {
					var effects_id = DFMEAs.insert({
						category_name: "Effects",
						parent_category: fmode_id,
						subcategories: [],
						content: "Everyone dies" + k,
						rating_type: "SEV",
						rating: Math.floor(Math.random() * 10) + 1
					});
					DFMEAs.update({_id: fmode_id}, {$push: {subcategories: effects_id}});
					for ( l = 0; l < Math.floor(Math.random() * 5) + 1; l++) {
						var cause_id = DFMEAs.insert({
							category_name: "Causes",
							parent_category: effects_id,
							subcategories: [],
							content: "Something broke" + l,
							rating_type: "OCC",
							rating: Math.floor(Math.random() * 10) + 1
						});
						DFMEAs.update({
							_id: effects_id
						}, {
							$push: {subcategories: cause_id}
						});
						for ( m = 0; m < 1; m++) {
							var detec_id = DFMEAs.insert({
								category_name: "Design Controls",
								parent_category: cause_id,
								subcategories: [],
								content: "Test regimen that has a long-ass list of stuff like thermal shock, shake and bake, drop testing, and other stuff" + m,
								rating_type: "DET",
								rating: Math.floor(Math.random() * 10) + 1
							});
							
							DFMEAs.update({
								_id: cause_id
							}, {
								$push: {subcategories: detec_id	}
							});
						};
					};
				};
			};
		}
	}

	/*		var timestamp = (new Date()).getTime();
	 for ( i = 0; i < 10; i++) {
	 var temp_id = DesignFunctions.insert({
	 FMEA_id : "FMEA1",
	 content : "Performs function" + i,
	 updated : timestamp
	 });
	 timestamp += 1;
	 for ( j = 0; j < 4; j++) {
	 var temp_FMode = DesignFModes.insert({
	 Function_id : temp_id,
	 content : "Fails to perform function" + i,
	 updated : timestamp
	 });
	 timestamp += 1;
	 for ( k = 0; k < 5; k++) {
	 var temp_effects = FailureEffects.insert({
	 FModeID : temp_FMode,
	 content : "Everyone dies" + k,
	 updated : timestamp
	 });
	 timestamp += 1;
	 }
	 }
	 }
	 }
	 */
});

