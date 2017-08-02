'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('underscore.string');

module.exports = class extends Generator {
  initializing(moduleName) {
    this.props = {};
    this.props.moduleName = moduleName;
  }

  prompting() {
    if (this.props.moduleName !== undefined) {
      this.prepareProps();

      return;
    }

    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stellar ${chalk.red('generator-vue-component-bundle')} generator!`));

    const prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is the name of the module bundle you want to create?'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.prepareProps();
    });
  }

  prepareProps() {
    this.moduleHyphen = _.dasherize(this.props.moduleName);
    this.moduleClassCase = _.classify(this.props.moduleName);
    this.moduleCamelCase = _.camelize(this.props.moduleName);
    this.moduleLowercase = this.props.moduleName.toLowerCase();
    this.moduleUppercase = this.props.moduleName.toUpperCase();
  }

  writing() {
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/index.js`)
    );
    this.fs.copyTpl(
      this.templatePath('routes.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/routes.js`),
      this
    );

    this.fs.copyTpl(
      this.templatePath('store/index.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/store/index.js`),
      this
    );
    this.fs.copyTpl(
      this.templatePath('store/actions.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/store/actions.js`),
      this
    );
    this.fs.copyTpl(
      this.templatePath('store/getters.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/store/getters.js`),
      this
    );
    this.fs.copyTpl(
      this.templatePath('store/mutation-types.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/store/mutation-types.js`),
      this
    );
    this.fs.copyTpl(
      this.templatePath('store/mutations.js'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/store/mutations.js`),
      this
    );
  }
};
