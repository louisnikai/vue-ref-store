import Vue from "vue";
import VueRefStoreInstaller from "@/index";
import {
  VueRefStore
} from "@/index";

describe('VueRefStore', () => {
  it('Test import ObjectEx', () => {
    const result = VueRefStore;
    console.log("Test import ObjectEx result: ", result);

    expect(result).not.toBeUndefined();
  });

  const vueParent = new Vue({
    name: "parent"
  });
  const vueRefStore = new VueRefStore(vueParent);

  it('Test setChildrenRef and getChildrenRef', () => {
    let vueChild = new Vue({
      name: "child"
    });
    vueRefStore.setChildrenRef("child", vueChild);
    let refVueChild = vueRefStore.getChildrenRef("child");
    console.log("Test setChildrenRef and getChildrenRef result: ", vueChild === refVueChild);

    expect(refVueChild).toEqual(vueChild);
  });

  it('Test use VueRefStore', () => {
    Vue.use(VueRefStoreInstaller);

    console.log("Test use VueRefStore: ", vueParent.$vueRefStore);

    expect(vueParent.$vueRefStore).not.toBeUndefined();
  });
})
