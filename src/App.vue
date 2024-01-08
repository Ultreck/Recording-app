<script setup>
import HeaderNav from './components/HeaderNav.vue';
import RecordLists from './components/RecordLists.vue';
import SideNavBar from './components/SideNavBar.vue';

// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="container">
    <HeaderNav/>
    <main id="parent">
      <SideNavBar/>
      <RecordLists/>
    </main>
  </div>
  </template>

<style lang="less" scoped>
#container{
  background-color: white;
min-height: 100vh;
 
}
#parent{
  display: flex;

}

</style>
