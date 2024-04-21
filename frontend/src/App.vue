<!-- <template>
  <div id="app">
 
    <MainComponent />
  </div>
</template> 

<script>

import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    MainComponent 
  }
}
</script>  -->

<!-- src/App.vue -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

