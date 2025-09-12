<script setup>
defineProps({
  accordionData: {
    type: Object
  },
  currentOpenItem: {
    type: null
  },
  toggleAccordion: {
    type: Function
  }
})
</script>

<template>
  <div class="accordion">
    <div @click="toggleAccordion(accordionData.id)" class="accordion-title">
      <i :class="currentOpenItem == accordionData.id ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
      {{ accordionData.question }}
    </div>
    <div class="accordion-body" :class="{ 'active': currentOpenItem == accordionData.id }">
      {{ accordionData.answer }}
    </div>
  </div>
</template>

<style scoped>
.accordion {
  overflow: hidden;
}

.accordion-title {
  padding: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.accordion-title i {
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--white-color);
  border-radius: 50%;
  background: linear-gradient(to bottom, var(--primary-color), var(--highlight-color));
}

.accordion-body {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
}

.accordion-body.active {
  padding: .25rem 1rem;
  max-height: 500px;
}
</style>
