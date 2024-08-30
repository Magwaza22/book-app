<template>
  <div id="buy-a-book">
    <h1>Buy a Book</h1>
    <p>Here you can list a book to sell.</p>
    <div class="buttons">
      <button @click="navigateTo('SignIn')">Login</button>
      <button @click="navigateTo('SignUp')">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyABook',
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
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

/* General styles */
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Buy a Book page specific styles */
#buy-a-book {
  display: flex;
  flex-direction: column;
  align-items: center;  /* Center elements horizontally */
  justify-content: center; /* Center elements vertically */
  min-height: 100vh; /* Full viewport height */
  padding: 2rem;
}

#buy-a-book h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

#buy-a-book p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center; /* Center text */
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
