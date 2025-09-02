<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';
import BenefitCard from '../Widget/BenefitCard.vue';
const benefits = ref([
  {
    title: "Affordable Price",
    description: "We provide high-quality services at competitive prices to ensure maximum value for your investment.",
    icon: "fa-solid fa-dollar-sign"
  },
  {
    title: "Great Support",
    description: "Our dedicated support team is available 24/7 to assist you with any questions or issues.",
    icon: "fa-solid fa-headset"
  },
  {
    title: "Quick Access",
    description: "Get fast and easy access to our services and resources whenever you need them.",
    icon: "fa-solid fa-bolt"
  }
])
</script>

<template>
  <section class="why-choose">
    <div class="container">
      <div class="large-2 gap-3">
        <div class="content">
          <SectionTitle class="mb-1" title="Get Benifits and Advantages Market Goal" subTitle="Why Choose Us" />

          <SubTitle class="highlight">
            A Satisfied Customer is best for business
          </SubTitle>

          <SubTitle>The activity of buying or selling goods and services in all the countries of the world.</SubTitle>
          <ul>
            <ListItem>What is global market economy?</ListItem>
            <ListItem>Why is the global market so important?</ListItem>
            <ListItem>Which is the largest stock market in the world?</ListItem>
          </ul>
          <BaseButton>Free Consultation</BaseButton>
        </div>

        <div class="cards">
          <BenefitCard v-for="(benefit, i) in benefits" :benefit="benefit" :key="i" />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose {
  padding: 9rem 0 3rem 0;
  position: relative;
}

.why-choose::after {
  content: '';
  position: absolute;
  background: url('https://webpoka.com/front/images/background/pattern-5.png') right top no-repeat;
  top: -50px;
  bottom: -150px;
  right: 0;
  left: 0;
  z-index: -1;
}

.why-choose ul {
  margin: 1.5rem 0;
}

.why-choose ul li {
  position: relative;
  padding-left: 1rem;
  margin: .5rem 0;
  font-weight: 600;
  color: var(--light-color);
  font-size: 1rem;
}

.why-choose ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

.why-choose .highlight {
  color: #FF00F6;
  margin: 1.5rem 0;
}

.why-choose .btn {
  border: none;
  color: var(--white-color);
  background: #2200BD;
  padding: 1.25rem 2.5rem;
  border-radius: 2rem;
}
</style>
