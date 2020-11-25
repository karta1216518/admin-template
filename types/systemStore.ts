interface ISetData {
  type: string;
  data: boolean | undefined;
}

export const state = () => ({
  miniVariant: false,
  drawer: false,
  rightDrawer: false
});

export const mutations = {
  SET_DATA(state, { type, data }: ISetData) {
    state[type] = data;
  }
};

export const actions = {
  toggle({ commit }, data) {
    commit("SET_DATA", data);
  }
};
