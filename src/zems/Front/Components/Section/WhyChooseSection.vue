<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';
import BenefitCard from '../Widget/BenefitCard.vue';
import { RouterLink } from 'vue-router';
const benefits = ref([
  {
    title: "Affordable Solutions",
    description: "We deliver high-quality software services at competitive rates to maximize your ROI.",
    icon: "fa-solid fa-dollar-sign"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any challenges.",
    icon: "fa-solid fa-headset"
  },
  {
    title: "Fast Delivery",
    description: "We ensure quick and efficient access to our services without compromising quality.",
    icon: "fa-solid fa-paper-plane"
  }
]);
</script>

<template>
  <section class="why-choose">
    <div class="container relative">
      <div class="large-2 gap-3">
        <div class="content">
          <SectionTitle class="mb-1" title="Proven Benefits That Boost Your Growth" subTitle="Why Choose Us" />

          <SubTitle class="highlight">
           A Satisfied Customer is Our Greatest Achievement
          </SubTitle>
          <SubTitle>
            We help businesses thrive with innovative software solutions and expert guidance.
          </SubTitle>
          <ul>
            <ListItem>How can software accelerate business growth?</ListItem>
            <ListItem>Why choose a dedicated development team?</ListItem>
            <ListItem>What makes our solutions stand out globally?</ListItem>
          </ul>
          <RouterLink to="/contact-us" class="btn btn-secondary">Get Consultation</RouterLink>
        </div>

        <div class="cards">
          <BenefitCard v-for="(benefit, i) in benefits" :benefit="benefit" :key="i" />
        </div>

      </div>
      <!-- animated icons  -->
      <BaseImage class="icon-1" image="https://webpoka.com/front/images/icons/icon-1.png" alt="icon" />
      <BaseImage class="icon-2" image="https://webpoka.com/front/images/icons/icon-2.png" alt="icon" />
    </div>
  </section>
</template>

<style scoped>
.why-choose {
  padding: 9rem 0 3rem 0;
  position: relative;
}

.why-choose::after,
.why-choose ul li::before {
  position: absolute;
  left: 0;
}

.why-choose::after {
  content: '';
  background: url('https://webpoka.com/front/images/background/pattern-5.png') right top no-repeat;
  top: -50px;
  bottom: -150px;
  right: 0;
  z-index: -2;
}

.why-choose .highlight {
  color: var(--highlight-color);
  margin: 1.5rem 0;
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
  color: var(--secondary-color);
}

/* animated icons  */
.icon-1,
.icon-2 {
  position: absolute;
  animation: spin 10s linear infinite;
  z-index: -1;
}

.icon-1 {
  right: 3rem;
  bottom: 5rem;

}

.icon-2 {
  right: 1rem;
  top: 5rem;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
