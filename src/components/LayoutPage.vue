<template>
    <div id="container">
    <ModalDialog :closeModal="closeModal" :isModalOpen="isModalOpen"/>
    <HeaderNav/>
    <main id="parent">
      <SideNavBar />
      <RecordLists :openModalFunction="openModal"/>
    </main>
    <!-- <ModalDialog :isModalOpen="isModalOpen" :closeModal="closeModal"/> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ModalDialog from './ModalDialog.vue';
import HeaderNav from './HeaderNav.vue';
import SideNavBar from './SideNavBar.vue';
import RecordLists from './RecordLists.vue';
const isModalOpen = ref(false);

// Define functions
const openModal = () => {
  isModalOpen.value = true;
  console.log(isModalOpen.value);

};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style lang="less" scoped>
#container{
  background-color: white;
min-height: 100vh;
 
}
#parent{
  display: flex;

}
</style>