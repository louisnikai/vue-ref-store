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

### Examples

1. Use example:
```javascript
<template>
  <div>
    <[element] key="[refName]" v-ref="(com, key) => $vueRefStore.setChildrenRef(key, com)"></[element]>
  </div>
</template>

<script>
import { VueRefStore } from 'vue-ref-store';

export default {
  created() {
    this.$vueRefStore = new VueRefStore(this);
  },
  methods: {
    test() {
      let refVueObj = this.$vueRefStore("[refName]");
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
