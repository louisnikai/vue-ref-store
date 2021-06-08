import Vue from "vue";
import {
  VueRefStore
} from "@/index";

describe('VueRefStore', () => {
  it('Test import ObjectEx', () => {
    const result = VueRefStore;
    console.log("Test import ObjectEx result: ", result);

    expect(result).not.toBeUndefined();
  });

  const vueRefStore = new VueRefStore(new Vue({
    name: "parent"
  }));

  it('Test setChildrenRef and getChildrenRef', () => {
    let vueChild = new Vue({
      name: "child"
    });
    vueRefStore.setChildrenRef("child", vueChild);
    let refVueChild = vueRefStore.getChildrenRef("child");
    console.log("Test setChildrenRef and getChildrenRef result: ", vueChild === refVueChild);

    expect(refVueChild).toEqual(vueChild);
  });
})
