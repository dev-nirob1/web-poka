<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="why-choose">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="content">
          <SectionTitle title="Get Benifits and Advantages Market Goal" subTitle="Why Choose Us" />
          <h5 class="highlight">
            A Satisfied Customer is best for business
          </h5>
          <h4>The activity of buying or selling goods and services in all the countries of the world.</h4>
          <ul>
            <li>What is global market economy?</li>
            <li>Why is the global market so important?</li>
            <li>Which is the largest stock market in the world?</li>
          </ul>
          <button class="btn">Free Consultation</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose {
  padding: 3.75rem 0;
}
.why-choose .highlight{
  color: #FF00F6;
  margin: 1rem 0;
}
.why-choose ul{
  margin: 1rem 0;
}
.why-choose ul li{
  margin: .5rem 0;
}
.why-choose .btn {
  border: none;
  color: var(--white-color);
  background: #2200BD;
  padding: 1.25rem 2.5rem;
  border-radius: 2rem;
}
</style>
