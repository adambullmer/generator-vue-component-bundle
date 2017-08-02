'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('underscore.string');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stellar ${chalk.red('generator-vue-component-bundle')} generator!`));

    const prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is the name of the bundle you want to create the component within?'
    }, {
      type: 'input',
      name: 'componentName',
      message: 'What is the name of the component you want to create?'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.prepareProps();
    });
  }

  prepareProps() {
    this.moduleLowercase = this.props.moduleName.toLowerCase();
    this.componentHyphen = _.dasherize(this.props.componentName);
    this.componentClassCase = _.classify(this.props.componentName);
    this.componentCamelCase = _.camelize(this.props.componentName);
    this.componentLowercase = this.props.componentName.toLowerCase();
    this.componentUppercase = this.props.componentName.toUpperCase();
  }

  default() {
    if (!this.fs.exists(`src/app/${this.moduleLowercase}s/index.js`)) {
      this.composeWith(require.resolve('../module'), {arguments: [this.moduleLowercase]});
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component.vue'),
      this.destinationPath(`src/app/${this.moduleLowercase}s/components/${this.componentClassCase}.vue`),
      this
    );

    if (this.fs.exists(`src/app/${this.moduleLowercase}s/components/index.js`)) {
      const componentImport = `export { default as ${this.componentClassCase} } from './${this.componentClassCase}';\n`;

      this.fs.append(`src/app/${this.moduleLowercase}s/components/index.js`, componentImport);
    } else {
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(`src/app/${this.moduleLowercase}s/components/index.js`),
        this
      );
    }
  }

  conflicts() {
  }
};
