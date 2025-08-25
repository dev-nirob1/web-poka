<script setup lang="ts">
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BlogCard from '../Widget/BlogCard.vue';

</script>

<template>
  <section class="blogs">
    <div class="container">

      <SectionTitle class="mb-2 text-center" subTitle="Latest News" title="Media Information" />

      <div class="medium-2 large-3 gap-2">
        <BlogCard v-for="blog in 3" :key="blog"/>
      </div>
    </div>
  </section>
</template>
<style scoped>
.blogs {
  padding: 3.75rem 0;
}

</style>
