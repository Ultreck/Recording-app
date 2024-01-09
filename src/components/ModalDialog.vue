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
          <ToggleComponent :toggleProps="toggles" @update:toggles="updateToggles" />
        </div>
        <div id="button">
          <!-- <router-link to="/live"> -->
            <button @click="goToRoute">Start Recording</button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
    <!-- <video v-if="stream" ref="videoElement" autoplay muted></video> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ToggleComponent from './ToggleComponent.vue'
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const awaitingPermission = ref(false);
const recordScreen = ref(false);
const recordCamera = ref(false);
const recordMic = ref(false);


const toggles = ref([
    { isActive: false, name: 'Record screen' },
    { isActive: false, name: 'Record camera' },
    { isActive: false, name: 'Record mic' }
])
const updateToggles = (updatedToggles) => {
    toggles.value = updatedToggles
}


const { isModalOpen, closeModal } = defineProps(['isModalOpen', 'closeModal']);




const goToRoute = () => {
    requestPermissions();
  if (awaitingPermission.value == true) {
      router.push('/live');
  }
};

const requestPermissions = async () => {
  try {
    awaitingPermission.value = true;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: recordScreen.value,
      audio: recordMic.value,
    });
    // User granted permissions, proceed with recording
    startRecordingPhase();
    const videoElement = ref('videoElement');
      videoElement.value.srcObject = stream;
  } catch (error) {
    // User denied permissions or an error occurred
    awaitingPermission.value = false;
    console.error('Permission denied or error:', error);
  }
};

const startRecordingPhase = () => {
  // Implement your recording logic here
  console.log('Recording started with options:', {
    recordScreen: recordScreen.value,
    recordCamera: recordCamera.value,
    recordMic: recordMic.value,
  });
  // Reset modal and permission state
  awaitingPermission.value = false;
};
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
      #heading {
        font-size: 16px;
        font-weight: 600;
        color: rgba(2, 2, 50, 0.7);
      }
      #button {
        text-align: center;
        button {
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
      #input {
        width: 100%;
        border: 1px solid rgb(231, 231, 231);
        padding: 10px 30px;
        color: black;
        background-color: rgb(248, 247, 247);
        border-radius: 8px;
        margin-top: 10px;
        #options {
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
