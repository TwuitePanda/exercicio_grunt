module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
        options: {
            compress: false,
            yuicompress: false,
            optimization: 2
        },
        files: {
            "src/style/style.css": "src/style/style.less"
            }
        }
    },
    uglify: {
        my_target: {
            files: {
                "dist/js/game.min.js": ["src/js/game.js"]
            }
        }
    },
    watch: {
        styles: {
            files: ["src/style/**/*.less"],
            tasks: ["less"],
            options: {
            spawn: false,
            }
        },
        scripts: {
            files: ["src/js/**/*.js"],
            tasks: ["uglify"],
            options: {
                spawn: false,
            }
        }
    }
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["less", "uglify", "watch"]);
};
