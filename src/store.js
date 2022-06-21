import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    squares: [],
    pickedColor: "",
    message: "",
    button: "",
  },
  actions: {
    setMessage({ commit }, message) {
      commit("changeMessage", message);
    },
    setColors({ commit }, colors) {
      commit("changeSquares", colors);
    },
    setPickedColor({ commit }, color) {
      commit("changePickedColor", color);
    },
    setButtonLabel({ commit }, label) {
      commit("changeButtonLabel", label);
    },
  },
  mutations: {
    changeMessage(state, message) {
      state.message = message;
    },
    changeSquares(state, colors) {
      state.squares = colors;
      console.warn(state.squares)
    },
    changePickedColor(state, color) {
        state.pickedColor = color;
    },
    changeButtonLabel(state, label) {
      state.button = label;
    },
  },
});
