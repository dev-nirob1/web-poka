<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <div class="founder relative">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <BaseImage image="/founder.jpg" />
        </div>
        <div class="content">
          <SectionTitle class="mb-1" title="Behind Webpoka Vision" sub-title="Our Founder"></SectionTitle>

          <BaseParagraph>
            <strong>Afroz Al Azad</strong> is a technical consultant and software architecture specialist.
            He excels in designing scalable systems, with Python and PHP as his core languages.
            His expertise drives Webpoka’s commitment to building high-quality, modern web solutions.
          </BaseParagraph>

          <SubTitle>Vision</SubTitle>
          <BaseParagraph>
            The aim is to make Webpoka a platform that empowers businesses and individuals
            with modern, high-quality web solutions. The focus is on clean design, robust
            architecture, and seamless user experience.
          </BaseParagraph>

          <SubTitle>Fun Fact</SubTitle>
          <BaseParagraph>
            In free time, hobbies include exploring new technologies, contributing
            to open-source projects, and staying updated with emerging web trends.
          </BaseParagraph>

          <ul class="socials">
            <ListItem>
              <a href="https://www.facebook.com/afrojazad" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-facebook"></i>
              </a>
            </ListItem>
            <ListItem>
              <a href="" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/afrojazad" target="_blank" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
            </ListItem>
            <ListItem>
              <a href="" target="_blank" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </ListItem>
          </ul>

        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.founder {
  padding: 3.75rem 0;
}

.founder::before {
  content: '';
  position: absolute;
  left: 0;
  top: -200px;
  bottom: -100px;
  right: 0;
  background: url('https://webpoka.com/front/images/background/pattern-8.png') left / cover no-repeat;
  z-index: -1;
}

.founder .image {
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}

.founder .image::before,
.founder .image::after {
  content: '';
  position: absolute;
  height: 180px;
  width: 180px;
  z-index: -1;
}

.founder .image::after {
  right: -1rem;
  bottom: -1rem;
  background: linear-gradient(to bottom, var(--primary-color), var(--highlight-color));
}

.founder .image::before {
  top: -1rem;
  left: -1rem;
  background: linear-gradient(to top, var(--primary-color), var(--highlight-color));

}

.founder .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder p {
  margin-top: 0;
  padding-top: .25rem;
}

.founder .socials {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
}
.socials li {
 height: 2.5rem;
 width: 2.5rem;
 border-radius: .25rem;
 border: 1px solid var(--border-color);
 display: grid;
 place-content: center;
}

@media (min-width: 768px) {
  .founder .image {
    margin: 0;
  }

  .founder .image::before,
  .founder .image::after {
    height: 300px;
    width: 300px;
  }
}
</style>
