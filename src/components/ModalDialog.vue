<template>
  <div id="modal" v-if="isModalOpen">
    <div id="modal-content">
      <div id="header">
        <h2>New Recording</h2>
        <span id="close" @click="closeModal">&times;</span>
      </div>
      <div id="content">
        <div id="heading">Save the recording in</div>
        <div id="input">
          <select name="" id="options">
            <option value="Select a project">Select a project</option>
          </select>
        </div>
        <div id="toggle">
            <ToggleComponent :toggleProps="toggles" @update:toggles="updateToggles"/>
        </div>
        <div id="button">
            <router-link to="/live">
                <button>
                    Start Recording
                </button>
                </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ToggleComponent from './ToggleComponent.vue'
const toggles = ref([{ isActive: false, name:"Record screen" }, { isActive: false, name:"Record camera" }, { isActive: false, name:"Record mic" }]);
const updateToggles = (updatedToggles) => {
  toggles.value = updatedToggles;
};

  import { defineProps } from 'vue';

  const { isModalOpen, closeModal } = defineProps(['isModalOpen', 'closeModal']);
</script>

<style lang="less" scoped>
#modal {
  background-color: rgba(4, 4, 4, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  #modal-content {
    width: 400px;
    border-radius: 10px;
    background-color: white;
    #header {
      padding: 10px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid rgb(236, 236, 236);
      #close {
        font-size: 30px;
        width: 50px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
    }
    #content {
      padding: 10px 40px;
      #heading{
        font-size: 16px;
        font-weight: 600;
        color: rgba(2, 2, 50, .7);
      }
      #button{
        text-align: center;
        button{
            background-color: rgba(6, 133, 196, 0.7);
            color: white;
            border: none;
            padding: 15px 70px;
            border-radius: 50px;
            margin: 15px 0;
            font-weight: 600;
            font-size: 15px;
        }
      }
      #input{
        width: 100%;
        border: 1px solid rgb(231, 231, 231);
        padding: 10px 30px;
        color: black;
        background-color: rgb(248, 247, 247);
        border-radius: 8px;
        margin-top: 10px;
        #options{
            background-color: rgb(248, 247, 247);
            width: 100%;
            border: none;
            outline: none;
        }
      }
    }
  }
}
</style>
