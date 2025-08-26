<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="pricing">
    <div class="container">
      <SectionTitle class="mb-1 text-center" subTitle="Best Pricing" title="Our Pricing Plans" />

      <div class="medium-2 large-3 gap-2">
        <div class="pricing-card">
          <h5>Starter Plan</h5>
          <img src="https://webpoka.com/front/images/resource/price-icon-1.png" alt="icon">
          <div class="price flex align-center justify-center">
            <sup>$</sup>
            <h1>99.9</h1>
            <sup>/mon</sup>
          </div>

          <ul>
            <li>Increase traffic 130%</li>
            <li>Backlink analysis</li>
            <li>24/7 support</li>
            <li>10 Free Optimization</li>
            <li>Organic traffic 215%</li>
          </ul>
          <button class="btn">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.pricing {
  padding: 3.75rem 0;
}

.pricing-card {
  text-align: center;
  padding: 3rem 1rem;
  background: var(--white-color);
}
.pricing-card li{
  margin: .5rem 0;
}
.pricing-card .btn {
  padding: 1rem 2.5rem;
  background: orange;
  color: var(--white-color);
  border: none;
  border-radius: 1.5rem;
}
</style>
