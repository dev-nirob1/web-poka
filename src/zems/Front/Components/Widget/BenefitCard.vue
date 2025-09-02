<script setup>
defineProps({
  benefit: {
    type: Object
  }
})
</script>
<template>
  <div class="benefit-card">
    <div class="card-content">
      <div class="icon">
        <i class="fa-2x" :class="benefit.icon"></i>
      </div>
      <div>
        <SubTitle>{{ benefit.title }}</SubTitle>
        <BaseParagraph>{{ benefit.description }}</BaseParagraph>
      </div>
    </div>
  </div>
</template>
<style>
.benefit-card {
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  position: relative;
  padding: 2.5rem 2.5rem 0;
  border-radius: 1rem;
  max-width: 430px;
  width: 100%;
}

.benefit-card:nth-child(2) .icon {
  background: var(--primary-color)
}

.benefit-card:nth-child(3) .icon {
  background: orange;
}

.benefit-card:nth-child(2) {
  margin-left: 5rem;
}

.benefit-card:not(:last-child) {
  margin-bottom: 2rem;
}

.benefit-card .card-content {
  position: relative;
  padding: 0 0 2rem 5.5rem;
}

.benefit-card p {
  margin-bottom: 0;
  font-size: 14px;
}

.benefit-card .icon {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4rem;
  padding-top: 1.5rem;
  border-radius: 50px 50px 0 0;
  background: var(--alternative-color);
  text-align: center;
  color: var(--white-color);
}
</style>
