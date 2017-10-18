'use strict';

//browserify configuration
let comment = '/**\n <%= pkg.name %>:<%= pkg.version %> \n Copyright 2017 <%= pkg.author %> \n Released Under The <%= pkg.license %> License\n <%= pkg.url %> \n */';
var browserifyConf = {
    options: {
      banner: comment,
    },
    dist: {
        files: {
            // destination for transpiled js : source js
            'build/sapien.js': 'temp/index.js'
        },
        options: {
            transform: [['babelify', { presets: "es2015" }]],
            browserifyOptions: {
                debug: true,
                paths : ["temp"]
            }
        }
    }
}

//uglify configuration
var uglifyConf = {
    options: {
      banner: comment
    },
    build: {
      src: 'build/sapien.js',
      dest: 'build/sapien.min.js'
    }
}

//typescript compiler configuration
var typescriptConf = {
    default : {
        tsconfig:'./tsconfig.json',
        dest:"temp"
    }
}

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
            pkg         : grunt.file.readJSON('package.json'),
            browserify  : browserifyConf,
            uglify      : uglifyConf,
            ts          : typescriptConf
        });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt typescript for transpiling typescript into javascript
    grunt.loadNpmTasks('grunt-ts');
    
    // Default task(s).
    grunt.registerTask('default', ['ts','browserify:dist', 'uglify']);

};
