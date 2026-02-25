<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import BlogCard from '@zems/Front/Components/Widget/BlogCard.vue';
import { ref } from 'vue';
import BreadCrumb from '../Components/Section/BreadCrumb.vue';
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
  <div class="all-blogs">
    <BreadCrumb title="Blogs" routeName="Blogs" url="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <section class="blogs">
      <div class="container">
        <SectionTitle class="text-center mb-2" title="Explore Our Latest Blogs" sub-title="Fresh Ideas" />
        <div class="medium-2 large-3 gap-2">
          <BlogCard v-for="blog in blogs" :blog="blog" :key="blog.id" />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.blogs {
  padding: 3.75rem 0;
}
</style>
