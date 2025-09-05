<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <section class="working-process">
    <div class="container">
      <SectionTitle class="text-center mb-2" subTitle="Steps For Done" title="Our Working Process" />

      <div class="medium-2 large-4 gap-2">

        <div class="process">
          <div class="icon relative">
            <BaseImage image="https://webpoka.com/front/images/resource/process-1.png" alt="image" />
          </div>
          <SubTitle>Date Exchange</SubTitle>
          <p class="number">01</p>
        </div>
        <div class="process">
          <div class="icon relative">
            <BaseImage image="https://webpoka.com/front/images/resource/process-1.png" alt="image" />
          </div>
          <SubTitle>Date Exchange</SubTitle>
          <p class="number">01</p>
        </div>
        <div class="process">
          <div class="icon relative">
            <BaseImage image="https://webpoka.com/front/images/resource/process-1.png" alt="image" />
          </div>
          <SubTitle>Date Exchange</SubTitle>
          <p class="number">01</p>
        </div>
        <div class="process">
          <div class="icon relative">
            <BaseImage image="https://webpoka.com/front/images/resource/process-1.png" alt="image" />
          </div>
          <SubTitle>Date Exchange</SubTitle>
          <p class="number">01</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.working-process {
  padding: 3.75rem 0;
}

.process {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.process:nth-child(2),.process:nth-child(4){
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
  margin-top: 50px;
}

.number::before {
  content: '';
  height: 45px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: -45px;
  background: var(--primary-color);
}

.icon::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: url('https://www.webpoka.com/front/images/resource/process-bg-1.png') center center no-repeat;
  z-index: -1;
  animation: rotateAnim 15s linear infinite;
  background-origin: top left;
}

@keyframes rotateAnim {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
