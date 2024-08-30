<template>
  <div id="sell-a-book">
    <h1>Sell a Book</h1>
    <p>Here you can list a book to sell.</p>
    <button @click="navigateTo('SignIn')">Login</button>
    <button @click="navigateTo('SignUp')">Register</button>
  </div>
</template>



<script>
export default {
  name: 'SellABook',
  methods:{
    navigateTo(page){
      this.$router.push({ name: page});
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
/* Homepage specific styles */
/* Main content styles */
.hero {
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
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
