<h1 align="center">vue-ref-store</h1>

<p align="center">
<a href="https://www.npmjs.com/package/vue-ref-store"><img src="https://img.shields.io/npm/v/vue-ref-store.svg"/> <img src="https://img.shields.io/npm/dm/vue-ref-store.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg"/></a>
</p>

<p align="center">
The store of vue-ref for vue, it needs to be used with vue-ref pachage.
</p>

<br />
<br />
<br />

# Getting started

The store of vue-ref for vue, it needs to be used with vue-ref pachage.

1. Install the package:
```
npm install --save vue-ref-store
```

<br />
<br />
<br />

# Usage

You can add the package into your app, or import and create instance of VueRefStore.

<br />

### Examples

1. Add the package into your app:
```javascript
import Vue from 'vue'

import VueRefStore from 'vue-ref-store'
Vue.use(VueRefStore)
or
Vue.use(VueLsLoader, {name: [directiveName]})
```
PS: This way will auto use vue-ref and add $vueRefStore property for Vue instance.
<br />
Then you can use it in vue component:
```javascript
<template>
  <div>
    <[element] key="[refName]" v-ref="(com, key) => $vueRefStore.setChildrenRef(key, com)"></[element]>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      let refVueObj = this.$vueRefStore.getChildrenRef("[refName]");
      if (!!refVueObj) {
        ...
      }
    }
  }
};
</script>
```

<br />

2. Import and create instance of VueRefStore:
```javascript
<template>
  <div>
    <[element] key="[refName]" v-ref="(com, key) => $vueRefStore.setChildrenRef(key, com)"></[element]>
  </div>
</template>

<script>
import { VueRefStore } from 'vue-ref-store';

export default {
  beforeCreate() {
    this.$vueRefStore = new VueRefStore(this);
  },
  methods: {
    test() {
      let refVueObj = this.$vueRefStore.getChildrenRef("[refName]");
      if (!!refVueObj) {
        ...
      }
    }
  }
};
</script>
```

<br />
<br />
<br />

# Change Log

<a href="https://github.com/louisnikai/vue-ref-store/blob/master/CHANGELOG.md">CHANGELOG.md</a>

<br />
<br />
<br />
