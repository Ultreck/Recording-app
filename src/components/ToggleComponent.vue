<template>
  <div >
    <div v-for="(toggle, index) in toggles" :key="index">
      <div id="row">
        <div id="item">{{ toggle.name }}</div>
        <div id="toggle" v-if="!toggle.isActive">
          <button @change="updateValue" id="btn" :class="{ active: toggle.isActive }" @click="toggleState(index)">
            <span v-if="toggle.isActive">&#10003;</span>
            <span id="close" v-else></span>
          </button>
        </div>
        <div id="activeToggle" v-if="toggle.isActive">
          <button id="btn" :class="{ active: toggle.isActive }" @click="toggleState(index)">
            <span v-if="toggle.isActive">&#10003;</span>
            <span id="close" v-else></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, getCurrentInstance } from 'vue'

const props = defineProps(['toggleProps'])
const toggles = ref(props.toggleProps);

const item = ref({});
const updateValue = () => {
  item.value = !item.value;
};

const toggleState = (index) => {
  toggles.value[index].isActive = !toggles.value[index].isActive
  emitUpdatedToggles()
}
const instance = getCurrentInstance();
const emitUpdatedToggles = () => {
  const { emit } = instance;
  emit('update:toggles', toggles.value)
}
// const isAnyToggleActive = computed(() => {
//   // Check if any toggle is active
//   return toggles.value.some((toggle) => toggle.isActive)
// })

</script>

<style lang="less" scoped>
#row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    #activeToggle {
      background-color: #12e119;
      width: 60px;
        text-align: end;
        border-radius: 30px;
        #btn {
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
        }
        button{
            cursor: pointer;
        }
        button.active {
          background-color: white; /* Green background color */
          transform: translateX(37px);
          border: none;
          color: #39ec3f;
        }
    }
    #item{
        font-weight: 600;
        font-size: 20px;
        color: rgba(2, 2, 50, .7);
    }
  #toggle {
    width: 60px;
    background-color: rgba(136, 135, 135, 0.768);
    text-align: end;
    border-radius: 30px;
    #btn {
      border-radius: 50%;
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
    }
    button {
      background-color: #ffffff;
      color: #fff;
      padding: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin: 0px 1px;
    }
    button.active {
      background-color: #4caf50; /* Green background color */
      transform: translateX(36px);
    }
  }
}
</style>
