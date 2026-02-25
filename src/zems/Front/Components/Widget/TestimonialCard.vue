<script setup>
defineProps({
  review: {
    type: Object
  }
})
</script>

<template>
  <div class="testimonial-card">
    <div class="flex justify-between gap-1">
      <i class="bg-graphic fa-solid fa-quote-right fa-6x"></i>
      <div class="flex align-center gap-1">
        <BaseImage class="height-full width-full" :image="review.image" :alt="review.description" />
        <div>
          <SubTitle>{{ review.name }}</SubTitle>
          <span>{{ review.description }}</span>
        </div>
      </div>
    </div>
    <div class="flex">
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
  box-shadow: var(--box-shadow);
}
.testimonial-card .sub-title{
  font-size: 1.25rem;
  color: var(--primary-color);
}

.testimonial-card img {
  height: 4rem;
  width: 4rem;
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
    padding: 3rem;
  }

  .testimonial-card p,
  .testimonial-card span {
    font-size: 1rem;
  }

  .bg-graphic {
    right: 2rem;
    top: 1rem;
  }
}
</style>
