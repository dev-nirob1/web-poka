<script setup>
defineProps({
  price: {
    type: Object
  }
})

</script>
<template>
  <div class="pricing-card">
    <SubTitle>{{ price.title }}</SubTitle>
    <div class="icon">
      <BaseImage :image="price.icon" alt="icon" />
    </div>

    <div class="flex-center">
      <sup><i class="fa-solid fa-dollar fa-2x"></i></sup>
      <HeroTitle class="price">{{ price.price }}</HeroTitle>
      <SubTitle>/mon</SubTitle>
    </div>

    <ul>
      <ListItem v-for="(data, i) in price.features" :key="i">{{ data }}</ListItem>
    </ul>

    <BaseButton>Buy Now</BaseButton>

  </div>

</template>
<style>
.pricing-card {
  position: relative;
  text-align: center;
  padding: 3rem 1rem;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

.pricing-card .icon {
  height: 120px;
  width: auto;
}

.pricing-card .icon img {
  height: 100%;
  width: auto;
  display: block;
  margin: 0 auto;
}

.price {
  transition: .4s ease-in-out;
  color: var(--primary-color);
}

.pricing-card ul {
  margin: 1.25rem 0;
}

.pricing-card ul li {
  margin: .5rem 0;
}

.pricing-card>* {
  position: relative;
  z-index: 1;
}

.pricing-card .btn {
  padding: 1rem 2.5rem;
  font-weight: bold;
  box-shadow: var(--box-shadow);
  background: var(--accent-color);
  color: var(--white-color);
  border-radius: 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.4s ease-in-out;
}

.pricing-card:hover .btn {
  background: var(--white-color);
  color: var(--accent-color);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
  z-index: 0;
}

/* Hover overlay */
.pricing-card:hover::before {
  left: 0;
  opacity: 1;
}

.pricing-card:hover,
.pricing-card:hover .price {
  color: var(--white-color);
}
</style>
