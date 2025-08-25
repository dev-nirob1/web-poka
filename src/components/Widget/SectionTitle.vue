<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  }
})
</script>

<template>
  <div class="section-title">
      <h5>{{ subTitle }}</h5>
      <span> </span>

    <h3>{{ title }}</h3>
  </div>
</template>
<style>
.section-title h5 {
  color: var(--primary-color);
}

.section-title span {
  position: relative;
  display: inline-block;
  text-align: center;
  height: 5px;
  width: 10px;
  margin-left: 1rem;
  background: var(--primary-color);
}

.section-title span::after {
  content: '';
  position: absolute;
  top: 1px;
  left: -1rem;
  height: 2px;
  width: 10px;
  background: #ff9600;
}

.section-title span::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 1rem;
  height: 2px;
  width: 10px;
  background: #ff9600;
}
</style>
