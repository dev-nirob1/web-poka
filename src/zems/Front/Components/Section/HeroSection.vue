<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import HeroTitle from '@/components/Elements/HeroTitle.vue';

</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="medium-2 gap-1 align-center">
        <div class="content">
          <HeroTitle>A Software <br> Development Agency</HeroTitle>
          <BaseParagraph>We work with International brands and Countries</BaseParagraph>
          <BaseButton class="btn-primary">Watch Video <i class="fa-solid fa-arrow-right"></i></BaseButton>
        </div>
        <div class="image">
          <BaseImage image="https://www.webpoka.com/front/images/resource/2.png" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.hero {
  background: url('https://www.webpoka.com/front/images/background/3.png') bottom / cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 210px 0;
  color: var(--white-color);
}
.hero p {
  font-size: 1.1rem;
  font-weight: 600;
}

.hero .image {
  width: 100%;
  height: 100%;
}

.hero .image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
