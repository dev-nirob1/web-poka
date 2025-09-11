<template>
  <div class="hero relative flex-center">
    <div class="container">
      <div class="medium-2 gap-5 medium-gap-2 align-center">
        <div class="content">
          <HeroTitle>Smart Software <br> Smarter Solutions</HeroTitle>
          <BaseParagraph> We build modern web, mobile, and cloud applications for businesses and
            startups across the globe.</BaseParagraph>
          <BaseButton class="btn-primary">Watch Video <i class="fa-solid fa-arrow-right"></i></BaseButton>
        </div>
        <div class="image">
          <BaseImage image="https://www.webpoka.com/front/images/resource/2.png" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 210px 0 150px 0;
  color: var(--white-color);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('https://www.webpoka.com/front/images/background/3.png') bottom / cover no-repeat;
  z-index: -1;
}

.hero .image {
  width: 100%;
  height: 100%;
}

.hero .image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (min-width: 768px) {
  .hero::before {
    bottom: -120px;
  }

  .hero p {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
</style>
