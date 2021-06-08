import Vue from "vue";
import {
  ObjectEx
} from "vue-objectex";
import { runArrayExtender } from "vue-js-extender";
runArrayExtender(Vue);

export class VueRefStore {
  constructor(currentRef, funcExtensions, defineProps) {
    let parentRef;

    class VueRefStore extends ObjectEx {
      constructor(currentRef, funcExtensions, defineProps) {
        parentRef = currentRef;

        let innerFuncExtensions = {
          getRef: () => {
            return parentRef;
          },
          setChildrenRef: (name, ref, subKey = null) => {
            let hasSubKey = subKey !== undefined && subKey != null;

            if (hasSubKey && !this[name]) {
              this[name] = {};
            }

            if (hasSubKey) {
              if (!!ref)
                this[name][subKey] = ref;
              else
                delete this[name][subKey];
            } else {
              if (!!ref)
                this[name] = ref;
              else
                delete this[name];
            }
          },
          getChildrenRefs: name => {
            if (!this[name])
              return [];

            if (this[name] instanceof Vue)
              return [this[name]];

            return Object.values(this[name]).filter(item => !!item).distinct();
          },
          getChildrenRef: name => {
            let refs = this.getChildrenRefs(name);
            return !!refs ? refs[0] : undefined;
          },
          toArray: () => {
            return Object.values(this).filter(
              value => Object.typeOf(value) !== "function"
            ).reduce((preValue, curValue) => {
              if (!curValue)
                return preValue;

              if (curValue instanceof Vue) {
                preValue.push(curValue);
                return preValue;
              }

              Object.values(curValue).filter(item => !!item).forEach(item => {
                if (!preValue.contains(item))
                  preValue.push(item);
              });

              return preValue;
            }, []);
          }
        };
        if (Object.typeOf(funcExtensions) === "object") {
          Object.copy(innerFuncExtensions, funcExtensions);
        }

        let innerDefineProps = {};
        if (Object.typeOf(defineProps) === "object") {
          Object.copy(innerDefineProps, defineProps);
        }

        super([], innerFuncExtensions, innerDefineProps);
      }
    }

    return new VueRefStore(currentRef, funcExtensions, defineProps);
  }
}
