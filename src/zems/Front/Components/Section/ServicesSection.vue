<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="services">
    <div class="container">
      <div class="medium-3 gap-2">
        <SectionTitle subTitle="Our Services" title="We Are Providing Digital Services" />
        <div class="span-2">
          <div class="medium-2 gap-2">
            <div v-for="b in 4" :key="b" class="services-card">
              <div class="icon">
                <img src="https://zems.uk/services/web-dev.png" alt="icon">
              </div>
              <h5>Web Develpment</h5>
              <p>
                Web Develpment
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<style>
.services {
  background: url('https://www.webpoka.com/front/images/background/pattern-4.png') no-repeat;
  padding: 3.75rem 0;
}

.services-card {
  padding: 2rem;
  border-radius: 1rem;
  background: var(--white-color);
}
</style>
