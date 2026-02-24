<script setup>
import VideoPlayModal from '@/components/Widget/VideoPlayModal.vue'
import { ref } from 'vue'

const isModalOpen = ref(false)

const handleOpenModal = () => {
  isModalOpen.value = true
}
const handleCloseModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <section class="video relative">
    <div class="video-play flex-center">
      <div class="video-box"></div>
      <BaseButton @click="handleOpenModal" class="flex-center btn-circle"><i class="fa-solid fa-play fa-2x"></i></BaseButton>
    </div>

    <!-- popup -->
    <VideoPlayModal :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal" />
  </section>
</template>
<style scoped>
.video {
  padding: 3.75rem 0;
}
.video .btn i{
  opacity: .8;
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
  height: 50vh;
  margin: 0 auto;
  background: url('https://www.webpoka.com/front/images/background/pattern-6.png') center no-repeat, linear-gradient(to right, var(--highlight-color), var(--primary-color));
  border-radius: 1rem;
}

@media (min-width: 768px) {
  .video-play {
    max-width: 800px;
    height: 60vh;
  }
}

@media (min-width: 1200px) {
  .video-play {
    max-width: 950px;
    height: 80vh;
  }
}
</style>
