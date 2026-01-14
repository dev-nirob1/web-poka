<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import PricingCard from '@zems/Front/Components/Widget/PricingCard.vue';
import { ref } from 'vue';
const pricing = ref([
  {
    title: "Starter Plan",
    icon: "https://webpoka.com/front/images/resource/price-icon-1.png",
    price: 99.9,
    features: [
      "Basic web development",
      "Responsive design included",
      "Email support",
      "Up to 5 pages or screens",
      "Initial performance optimization"
    ]
  },
  {
    title: "Professional Plan",
    icon: "https://webpoka.com/front/images/resource/price-icon-2.png",
    price: 199.9,
    features: [
      "Advanced web & mobile development",
      "UI/UX design consultation",
      "Priority support 24/7",
      "Up to 15 pages or screens",
      "Performance & security optimization"
    ]
  },
  {
    title: "Enterprise Plan",
    icon: "https://webpoka.com/front/images/resource/price-icon-3.png",
    price: 399.9,
    features: [
      "Custom software solutions",
      "Dedicated account manager",
      "Full-stack development & deployment",
      "Unlimited pages or screens",
      "Continuous monitoring & optimization"
    ]
  }
])

</script>

<template>
  <section class="pricing relative">
    <div class="container">
      <SectionTitle class="text-center" subTitle="Flexible Plans" title="Our Pricing Options" />

      <ul class="tab-panel">
        <ListItem>
          <BaseButton class="active">Monthly</BaseButton>
          <BaseButton>Yearly</BaseButton>
        </ListItem>
      </ul>

      <div class="medium-2 large-3 gap-2">
        <PricingCard v-for="(price, i) in pricing" :key="i" :price="price" />
      </div>
    </div>
  </section>
</template>

<style>
.pricing {
  padding: 3.75rem 0;
}

.pricing::after {
  content: '';
  position: absolute;
  left: 0;
  top: -100px;
  bottom: -200px;
  right: 0;
  background: url('https://webpoka.com/front/images/background/pattern-8.png') left / cover no-repeat;
  z-index: -1;
}

</style>
