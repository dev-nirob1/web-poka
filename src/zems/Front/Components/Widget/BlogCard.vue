<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  blog: {
    type: Object
  }
})
</script>

<template>
  <div class="blog-card">
    <div class="image">
      <BaseImage :image="blog.image" alt="blog image" />
    </div>
    <div class="blog-content">
      <RouterLink :to="`/blog/${blog.title}`">
        <SubTitle>{{blog.title}}</SubTitle>
      </RouterLink>
      <BaseParagraph>{{blog.date}}</BaseParagraph>
      <hr>
      <div class="card-footer">
        <div class="flex gap-1 align-center">
          <BaseImage :image="blog.author.avatar" alt="avatar"/>
          <h6>{{blog.author.name}}</h6>
        </div>
        <div class="flex gap-1">
          <i class="fa-regular fa-comment"></i>
          <i class="fa-solid fa-share-nodes"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.blog-card {
  border-radius: 1rem;
  background: var(--white-color);
}

.blog-card a {
  text-decoration: none;
  transition: .3s ease-in-out;
}
.blog-card a:hover {
  color: var(--secondary-color);
}

.blog-card p {
  margin: .5rem 0 1rem 0;
  ;
}

.blog-card .image {
  height: 260px;
  width: 100%;
}

.blog-card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem .5rem 0 0;
}

.blog-card .blog-content {
  text-align: center;
  padding: 1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .25rem 0;
}

.blog-card .card-footer img {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}
</style>
