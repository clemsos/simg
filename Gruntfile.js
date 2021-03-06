module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Project settings
    simg: {
      // configurable paths
      scriptPath: 'src',
      distPath: 'dist',
      bowerPath: 'lib',
      testPath: 'test'
    },

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: 'gzip'
      },
      build: {
        src: [
            '<%= simg.scriptPath %>/simg.js'
        ],
        dest: '<%= simg.distPath %>/simg.min.js'
      }
    },

    jshint: {
      options: {
          jshintrc: true
      },
      all: [
        '<%= simg.scriptPath %>/*.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('lint', ['jshint']);
};
