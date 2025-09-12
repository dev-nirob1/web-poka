<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import TestimonialCard from '../Widget/TestimonialCard.vue';
import { onMounted, ref } from 'vue';
import { zemsSlider_basic } from '@/plugins/zems_slider/zems_slider';
const reviews = ref([
  {
    "review": "Webpoka streamlined our student record system and automated scheduling. It’s now effortless to stay organized and give more attention to learning.",
    "name": "Emily Johnson",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    "description": "School Principal"
  },
  {
    "review": "From patient bookings to digital reports, Webpoka made our clinic workflow smoother than ever. Managing healthcare has become stress-free.",
    "name": "Dr. Michael Chen",
    "image": "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    "description": "Medical Director"
  },
  {
    "review": "Webpoka’s ERP helped us track materials, optimize production, and sync inventory in real-time. Our manufacturing feels more connected than ever.",
    "name": "Raj Patel",
    "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    "description": "Plant Manager"
  },
  {
    "review": "Training new staff is quick thanks to Webpoka’s POS. Daily operations run smoothly, and revenue tracking is far clearer and more reliable.",
    "name": "Sophia Martinez",
    "image": "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg",
    "description": "Restaurant Owner"
  },
  {
    "review": "Payroll, attendance, and leave management are all easier with Webpoka HR tools. Our HR team now works faster and with complete confidence.",
    "name": "David Kim",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "description": "HR Director"
  },
  {
    "review": "Webpoka transformed our logistics. Real-time shipment updates improved delivery accuracy and gave us stronger customer trust and satisfaction.",
    "name": "Olivia Wilson",
    "image": "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    "description": "Logistics Head"
  }
])


onMounted(() => {
  zemsSlider_basic()
})
</script>

<template>
  <section class="testimonials relative">
    <div class="container">
      <SectionTitle class="mb-3" title="What Clients Say About Our Services" sub-title="Testimonials" />
      <div class="zems_slider" data-control="on" data-gap="20" data-play="on">
        <div class="zems_slider_container">
          <TestimonialCard class="zems_slide" v-for="(review, i) in reviews" :key="i" :review="review" />
        </div>
      </div>
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
@media (min-width: 992px){
  .testimonials::before {
    top: -50px;
    left: -100px;
  }
}
</style>
