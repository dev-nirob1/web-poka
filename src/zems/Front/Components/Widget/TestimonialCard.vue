<script setup>
defineProps({
  review: {
    type: Object
  }
})
</script>

<template>
  <div class="testimonial-card">
      <i class="bg-graphic fa-solid fa-quote-right fa-6x"></i>
      <div class="card-header">
        <div class="flex align-center gap-1">
          <BaseImage :image="review.image" :alt="review.description" />
          <div>
            <SubTitle>{{ review.userName }}</SubTitle>
            <span>{{ review.country }} <span class="badge">Fiverr</span></span>
          </div>
        </div>
        <div class="stars">
          <i v-for="i in review.rating" :key="i" class="fa-solid fa-star"></i>
        </div>
      </div>
    <div>
      <BaseParagraph class="quote">
        <!-- <i class="fa-solid fa-quote-left fa-2x"></i> -->
        {{ review.review }}
      </BaseParagraph>

    </div>
  </div>
</template>

<style>
.testimonial-card {
  position: relative;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: var(--white-color);
  border: var(--border-color) 1px solid;
  height: 100%;
}
.testimonial-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.testimonial-card .badge {
  padding: .15rem .75rem;
  background: #59C65D;
  color: var(--white-color);
  border-radius: 1rem;
}

.testimonial-card .stars i {
  color: var(--accent-color);
}

.testimonial-card .sub-title {
  font-size: 1.25rem;
  color: var(--primary-color);
}

.testimonial-card img {
  height: 3.5rem;
  width: 3.5rem;
  object-fit: cover;
  border-radius: .5rem;
}

.bg-graphic {
  position: absolute;
  right: 1rem;
  bottom: 0;
  opacity: .1;
}

.testimonial-card .quote {
  font-size: 1.15rem;
}

@media (min-width: 992px) {
  .testimonial-card {
    padding: 3rem 3rem 2rem 3rem;
  }

  .testimonial-card p,
  .testimonial-card span {
    font-size: 1rem;
  }

  /* .bg-graphic {
    right: 2rem;
    top: 1rem;
  } */
}
</style>
