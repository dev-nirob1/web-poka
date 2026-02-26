<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import TestimonialCard from '@zems/Front/Components/Widget/TestimonialCard.vue';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import {  ref } from 'vue';
const reviews = ref([
  {
    review: "Awesome job every single time I work with him. We have been working together for over a year now. Great experience every single time.",
    userName: "kenyaparks",
    country: "United States",
    image: "https://ui-avatars.com/api/?name=Ken&background=0D8ABC&color=fff",
    rating: 5
  },
  {
    review: "Very friendly and professional contact. I am exited how the website will look like. I let you know.",
    userName: "andreoehsen",
    country: "Germany",
    image: "https://ui-avatars.com/api/?name=andre&background=0D8ABC&color=fff",
    rating: 5
  },
  {
    review: "The seller communicates and takes direction well. He his good and has good knowledgeable. Good value for money. I will work with him again. Happiness 😀",
    userName: "omshreembrzee",
    country: "United Kingdom",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/43922613/original/_MG_8549_1.jpg",
    rating: 5
  },
  {
    review: "we have no idea how to make html page for one industrial product, but seller give us some great ideas and make template for us very fast. thank you very much, will order again!",
    userName: "avelettta",
    country: "Estonia",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/394fe8799b64583ca19823baa2812d81-1622209337617/2eb081d6-f082-4ad9-882a-5696a0db387a.jpg",
    rating: 5
  },
  {
    review: "This is is the best. Attention to detail. No complaints, does as instructed and unlimited revisions. Very responsive landing page as well",
    userName: "franklawson488",
    country: "Ghana",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bcf0476bce84db971de13ea639c52bdc-1519481126797/355eff90-e307-4556-aac0-2463996a3883.jpg",
    rating: 5
  },
  {
    review: "Seller exceeded my expectations. He was very cooperative and patient--even when I took a while to reply. Fiverr should have an option to add bonuses when sellers go above and beyond... I will definitely choose this seller for my next project. A+",
    userName: "user72803480",
    country: "United States",
    image: "https://ui-avatars.com/api/?name=user&background=0D8ABC&color=fff",
    rating: 5
  },
  {
    review: "Webpoka has real talent !!! He is really good making landing pages i have used his service 4 times so far ! I am happy every time!!!!!! and will continue to work with him. Thank you so much BEST GIG ON FIVVER",
    userName: "zackjay",
    country: "Canada",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bcf0476bce84db971de13ea639c52bdc-1519481126797/355eff90-e307-4556-aac0-2463996a3883.jpg",
    rating: 5
  }
])


// Carousel configuration
const config = {
   autoplay: 3000,
   transition: 500,
  itemsToShow: 1,
  wrapAround: true,
  gap: 25,
  snapAlign: 'center',

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: 'carousel',

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
   600: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
  },
}
</script>

<template>
  <section class="testimonials relative">
    <div class="container">
      <SectionTitle class="mb-3" title="What Clients Say About Our Services" sub-title="Testimonials" />

  <Carousel v-if="reviews.length" v-bind="config">
        <Slide class="carousel-slide" v-for="(review, i) in reviews" :key="i">
          <TestimonialCard :review="review" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<style scoped>
.testimonials {
  padding: 3.75rem 0;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://webpoka.com/front/images/background/pattern-9.png') center no-repeat;
  z-index: -1;
}
.carousel-slide{
  min-height: 240px;
}
@media (min-width: 992px) {
  .testimonials::before {
    top: -50px;
    left: -100px;
  }
}
</style>
