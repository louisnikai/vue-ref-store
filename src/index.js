import Vue from "vue";
import VueRef from "vue-ref";
import {
  VueRefStore
} from "./vueRefStore";

export {
  VueRefStore
};

export default {
  install(Vue, options) {
    Vue.use(VueRef, options);

    Vue.defineProperty(Vue.prototype, "$vueRefStore", {
      get() {
        if (!this._vueRefStore) {
          this._vueRefStore = new VueRefStore(this);
        }

        return this._vueRefStore;
      }
    });
  }
};
