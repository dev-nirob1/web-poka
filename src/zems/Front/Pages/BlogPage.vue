<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BlogCard from '../Components/Widget/BlogCard.vue';
import { ref } from 'vue';
const blogs = ref([
  {
    id: 1,
    image: "https://www.webpoka.com/front/images/resource/news-1.jpg",
    title: "Top aide possible contender forced to resign over creepy.",
    date: "20 March, 2018",
    author: {
      name: "Jhon Kenedy",
      avatar: "https://www.webpoka.com/front/images/resource/author-3.jpg"
    }
  },
  {
    id: 2,
    image: "https://www.webpoka.com/front/images/resource/news-2.jpg",
    title: "Economic growth remains steady in challenging times.",
    date: "05 April, 2018",
    author: {
      name: "Sarah Parker",
      avatar: "https://www.webpoka.com/front/images/resource/author-3.jpg"
    }
  },
  {
    id: 3,
    image: "https://www.webpoka.com/front/images/resource/news-3.jpg",
    title: "Technology trends that will define the next decade.",
    date: "12 May, 2018",
    author: {
      name: "Michael Lee",
      avatar: "https://www.webpoka.com/front/images/resource/author-3.jpg"
    }
  }
])
</script>

<template>
  <div class="blogs">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="blogs" sub-title="all of our blogs"/>
      <div class="medium-2 large-3 gap-2">
        <BlogCard v-for="blog in blogs" :blog="blog" :key="blog.id"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
.blogs {
  padding: 3.75rem 0;
}
</style>
