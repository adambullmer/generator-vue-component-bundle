import Vue from 'vue';
import * as types from './mutation-types';

export default {
    [types.CREATE_<%= moduleUppercase %>] (state, { <%= moduleLowercase %> }) {
        state.<%= moduleLowercase %>s[<%= moduleLowercase %>.id] = <%= moduleLowercase %>;
    },

    [types.UPDATE_<%= moduleUppercase %>] (state, { <%= moduleLowercase %> }) {
        state.<%= moduleLowercase %>s[<%= moduleLowercase %>.id] = <%= moduleLowercase %>;
    },

    [types.DELETE_<%= moduleUppercase %>] (state, { <%= moduleLowercase %> }) {
        Vue.delete(state.<%= moduleLowercase %>s, <%= moduleLowercase %>.id);
    },

    [types.FETCH_<%= moduleUppercase %>S] (state, <%= moduleLowercase %>) {
        state.<%= moduleLowercase %>s = <%= moduleLowercase %>s;
    },
};
