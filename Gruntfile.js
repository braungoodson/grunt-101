module.exports = function (grunt) {

	//
	var npmTasks = ['',];
	for (var t in npmTasks) {
		grunt.loadNpmTasks(npmTasks[t]);
	}

	//
	var config = {
	};
	grunt.initConfig(config));

	//
	var gruntTasks = ['',];
	for (var t in tasks) {
		grunt.registerTask(gruntTasks[t]);
	}
};
