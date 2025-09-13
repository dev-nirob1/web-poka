<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';
import { ref } from 'vue';
const process = ref([
  {
    id: 1,
    bg: "https://www.webpoka.com/front/images/resource/process-bg-1.png",
    icon: "https://webpoka.com/front/images/resource/process-1.png",
    title: "Data Integration",
    number: "01"
  },
  {
    id: 2,
    bg: "https://www.webpoka.com/front/images/resource/process-bg-2.png",
    icon: "https://webpoka.com/front/images/resource/process-2.png",
    title: "Content Management",
    number: "02"
  },
  {
    id: 3,
    bg: "https://www.webpoka.com/front/images/resource/process-bg-3.png",
    icon: "https://webpoka.com/front/images/resource/process-3.png",
    title: "Workflow Automation",
    number: "03"
  },
  {
    id: 4,
    bg: "https://www.webpoka.com/front/images/resource/process-bg-4.png",
    icon: "https://webpoka.com/front/images/resource/process-4.png",
    title: "Digital Transformation",
    number: "04"
  }
]);

</script>

<template>
  <section class="working-process">
    <div class="container">
      <SectionTitle class="text-center mb-3" subTitle="Our Process" title="Our Process to Success" />

      <div class="medium-2 large-4 align-center gap-1">
        <div v-for="item in process" :key="item.id" class="process">
          <div class="icon relative">
            <BaseImage class="bg" :image="item.bg" alt="image" />
            <BaseImage :image="item.icon" alt="image" />
          </div>
          <SubTitle>{{ item.title }}</SubTitle>
          <p class="number">{{ item.number }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.working-process {
  padding: 3.75rem 0;
  overflow: hidden;
}

.process {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.process .bg,
.process .number::before {
  position: absolute;
}

.process .bg {
  inset: 0;
  background: url('https://www.webpoka.com/front/images/resource/process-bg-1.png')center no-reapet;
  z-index: -1;
  animation: rotateAnim 15s linear infinite;
  background-origin: top left;
}

.process:nth-child(2),
.process:nth-child(4) {
  flex-direction: column-reverse;
}

.process .number {
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 50%;
  background: lightgray;
  font-size: 1.25rem;
  margin-top: 70px;
}

.process .number::before {
  content: '';
  left: 50%;
  top: -65px;
  height: 65px;
  width: 1px;
  background: var(--primary-color);
}

.process:nth-child(2) .number,
.process:nth-child(4) .number {
  margin-bottom: 70px;
}

.process:nth-child(2) .number::before,
.process:nth-child(4) .number::before {
  top: 40px;
}

@keyframes rotateAnim {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 768px) {
  .icon img {
    max-width: 240px;
  }
}

@media (min-width: 992px) {
  .icon img {
    max-width: 200px;
  }
}

@media (min-width: 1200px) {
  .icon img {
    max-width: 260px;
  }
}
</style>
