<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import PricingCard from '../Widget/PricingCard.vue';
import { ref } from 'vue';
const pricing = ref([
  {
    title: "Starter Plan",
    icon: "https://webpoka.com/front/images/resource/price-icon-1.png",
    price: 99.9,
    features: [
      "Increase traffic by 130%",
      "Backlink analysis included",
      "24/7 customer support",
      "10 free optimization tasks",
      "Organic traffic growth 215%"
    ]
  },
  {
    title: "Professional Plan",
    icon: "https://webpoka.com/front/images/resource/price-icon-2.png",
    price: 199.9,
    features: [
      "Increase traffic by 250%",
      "Comprehensive SEO audit",
      "Priority 24/7 support",
      "20 free optimization tasks",
      "Organic traffic growth 400%"
    ]
  },
  {
    title: "Enterprise Plan",
    icon: "https://webpoka.com/front/images/resource/price-icon-3.png",
    price: 399.9,
    features: [
      "Increase traffic by 500%",
      "Advanced backlink & content strategy",
      "Dedicated account manager",
      "50 free optimization tasks",
      "Organic traffic growth 800%"
    ],
  }
])
</script>

<template>
  <section class="pricing">
    <div class="container">
      <SectionTitle class="text-center" subTitle="Best Pricing" title="Our Pricing Plans" />

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
.tab-panel {
  padding: 3px;
  border-radius: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem auto;
  background:var(--secondary-color);
  width: fit-content;
}

.tab-panel li .btn {
  border: none;
  padding: .85rem 3rem;
  border-radius: 2.5rem;
  color: var(--white-color);
  margin: 0 ;
}
.tab-panel .btn:hover {
  background: var(--white-color);
  color: var(--dark-color);
}
.tab-panel .btn.active {
  background: var(--white-color);
  color: var(--dark-color);
}

.pricing {
  padding: 3.75rem 0;
  position: relative;
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
