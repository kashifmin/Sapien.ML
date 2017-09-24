module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  let comment = '/**\n <%= pkg.name %>:<%= pkg.version %> \n Copyright 2017 <%= pkg.author %> \n Released Under The <%= pkg.license %> License\n <%= pkg.url %> \n */'
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
    base: {
      src: ['src/index.ts'],
      dest: 'temp/',
      options: {
        module: 'commonjs', //or commonjs 
        target: 'es5', //or es3 
      }
    }
  },
    browserify: {
        options: {
          banner: comment
        },
        dist: {
            files: {
                // destination for transpiled js : source js
                'build/sapien.js': 'temp/index.js'
            },
            options: {
                transform: [['babelify', { presets: "es2015" }]],
                browserifyOptions: {
                    debug: true
                }
            }
        }
    },
    uglify: {
      options: {
        banner: comment
      },
      build: {
        src: 'build/sapien.js',
        dest: 'build/sapien.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-typescript');
  // Default task(s).
  grunt.registerTask('default', ['typescript','browserify:dist', 'uglify']);

};
