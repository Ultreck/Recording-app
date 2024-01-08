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
        <button id="btn1">By Date</button>
        <button id="btn2">Add Filter</button>
        <button id="btn3">New Request</button>
        <button id="btn4">Start Recording</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
#container {
  width: 80%;
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
    #child1{
        display: flex;
        align-items: center;
        gap: 10px;
    }
  }
}
</style>
