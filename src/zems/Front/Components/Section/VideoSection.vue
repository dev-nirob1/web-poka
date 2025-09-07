<template>
  <section class="video relative">
    <div class="video-play flex-center">
      <div class="video-box"></div>
      <BaseButton class="flex-center"><i class="fa-solid fa-play fa-2x"></i></BaseButton>
    </div>
  </section>
</template>
<style scoped>
.video {
  padding: 3.75rem 0;
}

.video::before {
  content: '';
  position: absolute;
  height: 70%;
  width: 50%;
  top: 5.5rem;
  bottom: 0;
  right: 0;
  left: 0;
  background: url('https://www.webpoka.com/front/images/background/pattern-7.png') left no-repeat;
  z-index: -1;
}

.video-play {
  max-width: 90%;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  background: url('https://www.webpoka.com/front/images/background/pattern-6.png') center no-repeat, linear-gradient(to right, #EA33A6, #6538D6);
  border-radius: 1rem;
}

.video .btn {
  border: none;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background: var(--white-color);
  animation: ripple 2s infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
  }

  70% {
    box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@media (min-width: 768px) {
  .video-play {
    max-width: 70%;
  }
}
</style>
