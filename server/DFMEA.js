Teams = new Meteor.Collection("teams");
Projects = new Meteor.Collection("projects");

FMEAs = new Meteor.Collection("fmeas");

DesignFunctions = new Meteor.Collection("designFunctions");
DesignFModes = new Meteor.Collection("designFModes");
//FailureEffects = new Meteor.Collection("failureEffects");
//Causes = new Meteor.Collection("Causes");
//DesignControls = new Meteor.Collection ("DesignControls");

Meteor.startup(function() {
	if (DesignFunctions.find().count() === 0) {// populate with some data
		var timestamp = (new Date()).getTime();
		for ( i = 0; i < 20; i++) {
			var temp_id = DesignFunctions.insert({
				FMEA_id : "FMEA1",
				content : "Performs function" + i,
				updated : timestamp
			});
			timestamp += 1;
			for ( j = 0; j < 15; j++) {
				DesignFModes.insert({
					Function_id : temp_id,
					content : "Fails to perform function" + i,
					updated : timestamp
				});
				timestamp += 1;
			}
		}
	}
});

