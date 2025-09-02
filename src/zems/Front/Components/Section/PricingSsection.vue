<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import PricingCard from '../Widget/PricingCard.vue';

</script>

<template>
  <section class="pricing">
    <div class="container">
      <SectionTitle class="mb-1 text-center" subTitle="Best Pricing" title="Our Pricing Plans" />

      <div class="medium-2 large-3 gap-2">
        <PricingCard v-for="pricing in 3" :key="pricing" />
      </div>
    </div>
  </section>
</template>
<style>
.pricing {
  padding: 3.75rem 0;
  position: relative;
}
.pricing::after{
  content: '';
  position: absolute;
  left: 0;
  top: -150px;
  bottom: -150px;
  right: 0;
  background: url('https://webpoka.com/front/images/background/pattern-8.png') left / cover no-repeat;
  z-index: -1;
}
</style>
