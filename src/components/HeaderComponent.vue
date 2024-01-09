<template>
  <div id="container">
    <div id="first-heading">
      <span>Snapbyte</span>
      <span>></span>
      <span>My Recordings</span>
    </div>
    <div id="second-heading">
      <div id="child1">
        <h2>My Recordings</h2>
        <span>25</span>
      </div>
      <div id="child2">
        <button id="btn1"> <img :src="date" alt=""> By Date</button>
        <button id="btn2"> <img :src="filter" alt="">  Add Filter</button>
        <button id="btn3"> <img :src="newImg" alt="">  New Request</button>
        <button id="btn4" @click="triggerCallback"> <img :src="record" alt="">  Start Recording</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['triggerCallback']);
import date from '@/assets/date.png'
import filter from '@/assets/filter.png'
import newImg from '@/assets/new.png'
import record from '@/assets/record.png'

const triggerCallback = () => {
  props.triggerCallback()
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  background-color: white;
  #first-heading {
    display: flex;
    gap: 10px;
    color: rgba(1, 11, 47, 0.6);
    span {
      font-weight: 700;
      font-size: 16px;
    }
  }
  #second-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    // border: 2px solid red;
    #child1 {
      display: flex;
      align-items: center;
      gap: 10px;
      color: black;
      opacity: 0.8;
      span {
        font-weight: 600;
        font-size: 20px;
        color: rgb(1, 1, 58);
      }
    }
    #child2 {
      // border: 2px solid red;
      display: flex;
      justify-content: space-around;
      button {
        margin: 0px 5px;
        border-radius: 50px;
        padding: 10px 25px;
        border: 0;
        background-color: white;
        cursor: pointer;
      }
      #btn1,
      #btn2 {
        border: 1px solid rgb(197, 197, 197);
        display: flex;
        align-items: center;
        gap: 5px;
      }
      #btn3 {
        background-color: rgba(6, 133, 196, 0.7);
        color: white;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      #btn4 {
        background-color: rgba(225, 16, 16, 0.7);
        color: white;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
}
</style>
