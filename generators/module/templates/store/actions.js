import * as types from './mutation-types';

export function add<%= moduleClassCase %> ({ commit }, <%= moduleLowercase %>) {
    commit(types.CREATE_<%= moduleUppercase %>, { <%= moduleLowercase %> });
};

export function update<%= moduleClassCase %> ({ commit }, <%= moduleLowercase %>) {
    commit(types.UPDATE_<%= moduleUppercase %>, { <%= moduleLowercase %> });
};

export function delete<%= moduleClassCase %> ({ commit }, <%= moduleLowercase %>) {
    commit(types.DELETE_<%= moduleUppercase %>, { <%= moduleLowercase %> });
};

export function fetch<%= moduleClassCase %>s (state) {
    if (!state.<%= moduleLowercase %>s || Object.keys(state.<%= moduleLowercase %>s).length === 0) {
        // TODO: Get from external resource instead
        const <%= moduleLowercase %>s = [];

        state.commit(types.FETCH_<%= moduleUppercase %>S, <%= moduleLowercase %>s);
    }
};
