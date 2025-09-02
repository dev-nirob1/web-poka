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
      <i class="fa-3x" :class="service.icon"></i>
    </div>
    <div class="mt-1">
      <SubTitle>{{ service.title }}</SubTitle>
      <BaseParagraph>{{ service.description }}</BaseParagraph>
    </div>
  </div>
</template>

<style>
.service-card {
  padding: 2rem;
  border-radius: 1rem;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  z-index: 1;
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
  background: var(--accent-color);
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
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgb(from var(--highlight-color)r g b / 80%);
  position: absolute;
  bottom: -110%;
  right: -110%;
  z-index: -1;
  opacity: .5;
  transition: all .7s ease-in-out;
}

.service-card:hover::after {
  bottom: -45%;
  right: -35%;
}

</style>
