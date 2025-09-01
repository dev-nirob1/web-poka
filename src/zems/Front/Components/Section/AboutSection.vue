<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import AccordionWidget from '../Widget/AccordionWidget.vue';

</script>

<template>
  <section class="about">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <img src="https://webpoka.com/front/images/resource/about-2.png" alt="image">
        </div>
        <div class="content">
          <SectionTitle title="We Are Happy to Assist You all Time Moment" subTitle="We Are Tecno" />
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed. So some forward-looking CIOs are putting.
          </p>
          <AccordionWidget v-for="a in 3" :key="a"/>
          <button class="btn">About More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 3.75rem 0;
  z-index: 1;
  position: relative;
}
.about .image {
  width: 100%;
  height: auto;
}

.about .image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.about .btn {
  border: none;
  color: var(--white-color);
  background: #2200BD;
  padding: 1rem 2rem;
  border-radius: 2rem;
}
</style>
