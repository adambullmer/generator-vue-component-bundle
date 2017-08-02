'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stellar ${chalk.red('generator-vue-component-bundle')} generator!`));
  }

  writing() {
    this.fs.copy(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    );
    this.fs.copy(
      this.templatePath('constants.js'),
      this.destinationPath('src/constants.js')
    );

    if (this.fs.exists('src/App.vue')) {
      // Migrates an existing project's App.vue
      this.fs.move('src/App.vue', 'src/app/App.vue');
    } else {
      this.fs.copy(
        this.templatePath('app/App.vue'),
        this.destinationPath('src/app/App.vue')
      );
    }
    this.fs.copy(
      this.templatePath('app/index.js'),
      this.destinationPath('src/app/index.js')
    );
    this.fs.copy(
      this.templatePath('app/routes.js'),
      this.destinationPath('src/app/routes.js')
    );
    this.fs.copy(
      this.templatePath('app/store.js'),
      this.destinationPath('src/app/store.js')
    );

    this.fs.copy(
      this.templatePath('components/.gitkeep'),
      this.destinationPath('src/components/.gitkeep')
    );

    this.fs.copy(
      this.templatePath('filters/index.js'),
      this.destinationPath('src/filters/index.js')
    );

    this.fs.copy(
      this.templatePath('router/index.js'),
      this.destinationPath('src/router/index.js')
    );

    this.fs.copy(
      this.templatePath('store/index.js'),
      this.destinationPath('src/store/index.js')
    );

    this.fs.copy(
      this.templatePath('utils/index.js'),
      this.destinationPath('src/utils/index.js')
    );
  }

  install() {
    this.npmInstall(['vuex']);
  }
};
