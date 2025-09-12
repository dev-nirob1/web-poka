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
      <i class="bg-graphic fa-solid fa-quote-right fa-10x"></i>
      <div class="flex align-center gap-1">
        <div>
          <SubTitle>{{ review.name }}</SubTitle>
          <span>{{ review.description }}</span>
        </div>
        <BaseImage class="height-full width-full" :image="review.image" :alt="review.description" />
      </div>
    </div>
    <div class="flex">
      <BaseParagraph>
        <i class="fa-solid fa-quote-left fa-2x"></i>
        {{ review.review }}
      </BaseParagraph>
    </div>
  </div>
</template>

<style>
.testimonial-card {
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  scroll-snap-align: start;
  width: 100%;
}

.testimonial-card img {
  height: 6rem;
  width: 6rem;
  object-fit: cover;
  border-radius: 1rem;
}

.bg-graphic {
  position: absolute;
  right: 1rem;
  bottom: 0;
  opacity: .1;
}


@media (min-width: 992px) {
  .testimonial-card {
    padding: 3rem;
  }

  .testimonial-card p,
  .testimonial-card span {
    font-size: 1.15rem;
  }

  .bg-graphic {
    right: 1rem;
    top: 1rem;
  }
}
</style>
