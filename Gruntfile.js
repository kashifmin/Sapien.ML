module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/**\n <%= pkg.name %>:<%= pkg.version %> \n Copyright 2017 <%= pkg.author %> \n Released Under The <%= pkg.license %> \n <%= pkg.url %> \n */'
      },
      build: {
        src: 'src/index.js',
        dest: 'build/sapien.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
