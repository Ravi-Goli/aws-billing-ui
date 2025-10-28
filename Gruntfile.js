module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Define any tasks here, e.g., jshint, uglify, etc.
  });

  // Load any grunt plugins here, e.g.,
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s)
  grunt.registerTask('default', []);
};
