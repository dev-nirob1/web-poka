<template>
  <div class="hero">
    <div class="container">
      <div class="medium-2 gap-1 align-center">
        <div class="content">
          <h1>A Software <br> Development Agency</h1>
          <p>We work with International brands and Countries Watch Video</p>
          <button>Watch Video</button>
        </div>
        <div class="image">
          <img src="https://www.webpoka.com/front/images/resource/2.png" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.hero {
  background: url('https://www.webpoka.com/front/images/background/3.png') bottom / cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 0 210px 0;
  color: var(--white-color);
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
</style>
