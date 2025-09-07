<script setup>
defineProps({
  service: {
    type: Object
  }
})
</script>
<template>
  <div class="service-card">
    <div class="icon">
      <i class="fa-4x" :class="service.icon"></i>
    </div>
    <div class="mt-2">
      <SubTitle>{{ service.title }}</SubTitle>
      <BaseParagraph>{{ service.description }}</BaseParagraph>
    </div>
  </div>
</template>

<style>
.service-card {
  padding: 3rem 2rem;
  border-radius: 1rem;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.service-card .sub-title {
  font-size: 1.5rem;
}

.service-card i {
  color: var(--highlight-color);
  transition: all .5s ease-in-out;
}

.service-card:hover,
.service-card:hover i {
  color: var(--white-color);
  z-index: 2;
}

.service-card::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  background: var(--secondary-color);
  z-index: -1;
  opacity: 0;
  transition: all .5s ease-in-out;
}

.service-card:hover::before {
  opacity: 1;
  top: 0;
}

.service-card::after {
  content: '';
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: #F233A4;
  position: absolute;
  bottom: -110%;
  right: -110%;
  z-index: -1;
  transition: all .7s ease-in-out;
}

.service-card:hover::after {
  bottom: -40%;
  right: -35%;
}

</style>
