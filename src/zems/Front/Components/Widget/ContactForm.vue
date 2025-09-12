<script setup>
const handleSubmit = () => {
  alert('Thanks For Message!')
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="medium-2 align-center gap-1">
      <label>
        <InputField type="text" placeholder="Enter Your Name" required />
      </label>
      <label>
        <InputField type="email" placeholder="Enter Your Email" required />
      </label>
    </div>

    <label>
      <InputField type="number" placeholder="Enter Your number" required />
    </label>
    <label>
      <BaseTextArea rows="6" placeholder="Enter Message..." required></BaseTextArea>
    </label>
    <BaseButton class="btn-secondary">Send Message</BaseButton>
  </form>
</template>
<style>
form {
  background: rgb(from var(--highlight-color)r g b / 5%);
}

input,
select,
textarea {
  padding: 1.25rem;
  margin-bottom: 1rem;
  border: none;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: .5rem;
}

input:focus,
textarea:focus {
  outline: none;
}

input::placeholder,
textarea::placeholder,
select::placeholder {
  font-size: .9rem;
}

form .btn-secondary {
  border-radius: .5rem;
}
</style>
