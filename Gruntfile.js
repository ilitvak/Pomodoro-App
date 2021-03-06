module.exports = function(grunt) {

	grunt.registerTask( 'default', [ 'clean', 'browserify', 'sass', 'autoprefixer', 'copy' ] );
	
	grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'dist/js/app.js': ['./app/scripts/app.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './dist/css/style.css': './app/sass/style.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    './dist/css/style.css': './dist/css/style.css'
                }
            }
        },

        watch: {
            dist: {
                files: [ './app/scripts/**/*.js', './app/sass/**/*.scss', './app/pages/**/*.html' ],
                tasks: [ 'default' ]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './**/*.jpg' ],
                    dest: './dist/img',
                    cwd: './app/img/'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist',
                    cwd: './app/pages/'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist/templates',
                    cwd: './app/templates'
                }]
            }
        },

        clean: ['./dist']
	});

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
 
  
  
};