<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="blog-card">
    <div class="image"><img src="https://www.webpoka.com/front/images/resource/news-1.jpg" alt="blog image"></div>
    <div class="blog-content">
      <RouterLink to="">
        <h5>Top aide possible contender forced to resign over creepy.</h5>
      </RouterLink>
      <p>20 March, 2018</p>
      <hr>
      <div class="card-footer">
        <div class="flex gap-1 align-center">
          <img src="https://www.webpoka.com/front/images/resource/author-3.jpg" alt="avatar">
          <h6>by Jhon Kenedy</h6>
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
