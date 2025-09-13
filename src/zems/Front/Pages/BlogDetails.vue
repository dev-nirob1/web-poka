<script setup>
import BreadCrumb from '../Components/Section/BreadCrumb.vue';

</script>

<template>
  <BreadCrumb />
  <section class="blog-details">
    <div class="container">
      <div class="large-3 gap-2">

        <!-- Main content -->
        <div class="large-span-2 content">
          <div class="cover-image">
            <BaseImage image="https://img.freepik.com/free-vector/branding-concept-landing-page_23-2148248237.jpg"
              alt="cover image" />
          </div>

          <div class="p-2">
            <!-- Author info -->
            <div class="profile">
              <BaseImage image="https://randomuser.me/api/portraits/men/32.jpg" alt="profile image" />
              <div>
                <SubTitle>John Doe</SubTitle>
                <small>Posted on Sep 10, 2025</small>
              </div>
            </div>

            <!-- Blog title -->
            <HeroTitle>How to Build a Modern Admin Dashboard</HeroTitle>

            <!-- Tags -->
            <ul class="tags">
              <ListItem>#VueJS</ListItem>
              <ListItem>#WebDevelopment</ListItem>
              <ListItem>#Dashboard</ListItem>
            </ul>

            <!-- Blog content -->
            <div class="blog-data">
              <p>
                Building a modern admin dashboard requires clean design, responsive layout, and robust functionality.
                In this guide, we explore the best practices for creating dashboards that are both user-friendly and
                scalable.
              </p>
              <p>
                Key components include dynamic charts, role-based access, and efficient data handling. By leveraging
                Vue.js
                and modern web technologies, developers can create dashboards that enhance productivity and improve user
                experience.
              </p>
              <p>
                Remember to focus on both frontend aesthetics and backend performance for the best results.
              </p>
            </div>
          </div>
        </div>

        <!-- Author sidebar -->
        <div class="author bg-white">
          <div class="profile">
            <BaseImage image="https://randomuser.me/api/portraits/men/32.jpg" alt="profile image" />
            <SubTitle>John Doe</SubTitle>
          </div>

          <BaseButton class="bg-primary width-full">Follow</BaseButton>

          <BaseParagraph>
            Software engineer, home lab server enthusiast, passionate about online privacy and dark themes 😎
          </BaseParagraph>

          <div class="author-location">
            <h6>Location</h6>
            <BaseParagraph>United States</BaseParagraph>
          </div>

          <div class="author-joined">
            <h6>Joined</h6>
            <BaseParagraph>Jan 16, 2021</BaseParagraph>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.blog-details {
  padding: 3.75rem 0;
}

/* content css  */
.blog-details .content {
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: 1rem;
}

.blog-details .content .cover-image {
  max-height: 400px;
  width: 100%;
  box-sizing: border-box;
}

.blog-details .content .cover-image img {
  border-radius: 1rem 1rem 0 0;
  height: 100%;
  width: 100%;
}

.blog-details .content .tags {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-top: .5rem;
}

.blog-details .content .tags li {
  background: rgb(from var(--light-color) r g b / 5%);
}

/* author info css  */
.blog-details .author {
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow);
  padding: 1rem;
  border-radius: .75rem;
  height: fit-content;
  position: sticky;
  top: 7rem;
}
.blog-details .author .btn {
  color: var(--white-color);
  border-radius: .5rem;
}

.blog-details .profile img {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}

.blog-details .profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.blog-details .author .author-location p,
.blog-details .author .author-joined p {
  margin-top: .25rem;
}
</style>
