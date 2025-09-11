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
    <SubTitle>{{ subTitle }}</SubTitle>
    <span> </span>

    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>
<style>
.section-title .sub-title {
  color: var(--secondary-color);
}

.section-title span {
  position: relative;
  display: inline-block;
  text-align: center;
  height: 5px;
  width: 10px;
  margin-left: 1rem;
  background: var(--secondary-color);
}

.section-title span::after,
.section-title span::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 10px;
  background: var(--alternative-color);
}

.section-title span::after {
  top: 1px;
  left: -1rem;
}

.section-title span::before {
  top: 1px;
  left: 1rem;
}
</style>
