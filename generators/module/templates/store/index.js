import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
    <%= moduleLowercase %>s: {},
};

export default {
    state,
    getters,
    actions,
    mutations,
};
