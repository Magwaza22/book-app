<template>
  <div id="sell-a-book" class="container">
    <main>
      <section class="hero">
        <div class="book-image"></div>
        <h1>SELL YOURS AND MAKE THE WORLD EDUCATED</h1>
        <p>
          Connect with a wider audience and contribute to the world of knowledge. Sign in or sign up to get started.
        </p>
        <div class="buttons">
          <button @click="navigateTo('SignIn')">Sign In</button>
          <button @click="navigateTo('SignUp')">Sign Up</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap');


:root {
  --primary-color: #8c7851;
  --secondary-color: #d4c6a9;
  --text-color: #333;
  --background-color: #f8f4ef;
  --light-gray: #f0f0f0;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--light-gray);
}

.hero {
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--background-color);
}

.book-image {
  width: 100%;
  height: 300px;
  background-image: url('../assets/stack.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto 1rem;
  border-radius: 8px;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.buttons button {
  background-color: var(--secondary-color);
  border: none;
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
