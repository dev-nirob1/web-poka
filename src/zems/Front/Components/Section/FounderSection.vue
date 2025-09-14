<script setup>
import SectionTitle from '@/components/Widget/SectionTitle.vue';

</script>

<template>
  <div class="founder relative">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <BaseImage
            image="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/494463877_10230442409430083_6634931321085281581_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGXnft4XdwM54TNxhVT1DnM3cfBiYqjVdXdx8GJiqNV1cjulR7trbc8PHXBC6eacUa90SkOzrr__YkMRW6-dbdB&_nc_ohc=Hwh0mWYUjBQQ7kNvwHAdJye&_nc_oc=AdltO_AxuXXBCla6C46E0H6ViqGxh5wkxlsmEtXk3gmdtF7MbE1EH8ViCSV_XlPOjVg&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AScqK64cNr3LgitmbhVY1A&oh=00_AfaWPozOSHsqJ4UYKrGmPwth56o7PST7W7jakcL1tHjDSQ&oe=68CC680B" />
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
  width: 100%;
  height: 100%;
}
.founder .image::after {
  content: '';
  
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
</style>
