<script setup>

</script>

<template>
  <div class="accordion">
    <div class="accordion-title">
      <i class="fa-solid fa-plus"></i> Solutions is the latest software Sigma?
    </div>
    <div class="accordion-body">
      The argument in favor of using to filler text goes something is that anybody can do it.
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
  background: linear-gradient(to bottom, #6538D6, #EA33A6);
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
