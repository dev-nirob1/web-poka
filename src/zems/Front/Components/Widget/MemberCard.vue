<script setup>
defineProps({
  memberData: {
    type: Object
  }
})
</script>

<template>
  <div class="member-card bg-light relative">
    <div class="image">
      <BaseImage :image="memberData.image" />
    </div>
    <div class="member-info">
      <SubTitle>{{ memberData.name }}</SubTitle>
      <BaseParagraph>{{ memberData.role }}</BaseParagraph>
    </div>
  </div>
</template>
<style scoped>
.member-card {
  position: relative;
  cursor:pointer;
  overflow: hidden;
}

.member-card .image {
  height: 350px;
  width: 100%;
}

.member-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .5rem;
}

.member-info{
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  border-radius: .5rem;
  background: var(--white-color);
  padding: .5rem 1rem;
}
.member-info p {
  margin: 0;
  padding-top: .25rem;
}
</style>
