<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import TestimonialCard from '../Widget/TestimonialCard.vue';
import { onMounted, ref } from 'vue';
import { zemsSlider_basic } from '@/plugins/zems_slider/zems_slider';
const reviews = ref([
  {
    "review": "Zems helped us digitize student records and automate class schedules. It’s now easier to focus on what matters most — teaching.",
    "name": "Emily Johnson",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    "description": "School Principal"
  },
  {
    "review": "Managing patient appointments and medical records has never been this smooth. Zems truly transformed our clinic operations.",
    "name": "Dr. Michael Chen",
    "image": "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    "description": "Medical Director"
  },
  {
    "review": "With Zems ERP, our manufacturing workflow is streamlined, and inventory syncs across all departments automatically.",
    "name": "Raj Patel",
    "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    "description": "Plant Manager"
  },
  {
    "review": "The restaurant POS is super intuitive. Staff training now takes minutes, not hours. Sales tracking is also much clearer.",
    "name": "Sophia Martinez",
    "image": "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg",
    "description": "Restaurant Owner"
  },
  {
    "review": "Zems’ HR software made our onboarding, leave tracking, and payroll totally stress-free. A must-have for any modern company.",
    "name": "David Kim",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "description": "HR Director"
  },
  {
    "review": "Our logistics team now works faster and smarter with Zems. Real-time delivery tracking made a big difference in customer satisfaction.",
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
  background: url('https://webpoka.com/front/images/background/pattern-9.png') left no-repeat;
}

.testimonials .next-btn,
.testimonials .prev-btn {
  background: var(--primary-color);
  color: var(--white-color);
  margin: .25rem;
}
</style>
