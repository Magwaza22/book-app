<template>
  <header>
    <a href="#" class="back-arrow" @click.prevent="goBack">&larr; Back</a>
    <div class="logo">
      <img src="../assets/logo.jpg" alt="Book Junction Logo" />
      Book Junction
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
  /* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

/* CSS variables */
:root {
  --primary-color: #8c7851;
  --secondary-color: #d4c6a9;
  --text-color: #333;
  --background-color: #f8f4ef;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}

/* Header specific styles */
header {
  background-color: var(--primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--background-color);
}

.logo img {
  height: 2.5rem;
  margin-right: 0.5rem;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-left: 1.5rem;
}

nav a {
  text-decoration: none;
  color: var(--background-color);
  font-weight: 500;

  .back-arrow {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    margin-right: 15px;
    cursor: pointer;
  }
}

</style>
