import * as components from './components';

export default [{
    path: '/<%= moduleLowercase %>',
    name: '<%= moduleCamelCase %>',
    component: components.<%= moduleClassCase %>,
}];
