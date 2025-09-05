<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import AccordionWidget from '../Widget/AccordionWidget.vue';

</script>

<template>
  <section class="about">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <BaseImage image="https://webpoka.com/front/images/resource/about-2.png" alt="image" />
        </div>
        <div class="content">
          <SectionTitle title="We Are Happy to Assist You all Time Moment" subTitle="We Are Tecno" />
          <BaseParagraph class="my-1">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed. So some forward-looking CIOs are putting.
          </BaseParagraph>

          <AccordionWidget v-for="a in 3" :key="a" />
          <BaseButton>About More</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 3.75rem 0;
}

.about .image {
  width: 100%;
  height: auto;
}

.about .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about .btn {
  border: none;
  font-weight: bold;
  color: var(--white-color);
  background: var(--secondary-color);
  padding: 1rem 2rem;
  border-radius: 2rem;
  z-index: 1;
}

.about .btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 0;
  background: var(--highlight-color);
  z-index: -1;
  transition: width .5s ease-in-out;
}

.about .btn:hover::after {
  width: 100%;
}
</style>
