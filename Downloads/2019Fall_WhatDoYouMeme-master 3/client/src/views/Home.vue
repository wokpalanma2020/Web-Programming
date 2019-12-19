<template>
  <div class="home">
    
    <section class="hero is-large is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Primary bold title
        </h1>
        <v-select :options="options" @search="fetchOptions"></v-select>
        <h2 class="subtitle">
          Primary bold subtitle
        </h2>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
    options: ["London", "Tokyo", "Accra", "Lagos", "New York", "Los Angeles"],
  },
};
</script>
