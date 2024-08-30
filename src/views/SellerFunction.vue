<template>
  <div id="seller-functions" class="container">
    <main>
      <section class="hero">
        <div class="book-icon"></div>
        <h1>WELCOME TO THE SELLER'S HUB</h1>
        <div class="slogan">Empowering sellers, enriching students!</div>
        <p>
          As a seller, you can easily manage your listings and connect with students looking for books.
        </p>
        <div class="buttons">
          <button @click="navigateTo('AddBook')">Add Listing</button>
          <button @click="navigateTo('UpdateDetails')">Update Details</button>
          <button @click="navigateTo('ViewReviews')">View Reviews</button>
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
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

/* CSS variables */
:root {
  --primary-color: #8c7851;
  --secondary-color: #d4c6a9;
  --text-color: #333;
  --background-color: #f8f4ef;
  --light-gray: #f0f0f0;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}

/* General styles */
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--light-gray);
}

/* Main content styles */
.hero {
  padding: 4rem 2rem;
  text-align: center;
}

.book-icon {
  width: 60px;
  height: 80px;
  background-image: url('../assets/stack.jpg'); /* Replace with your book image */
  background-size: cover;
  margin: 0 auto 1rem;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slogan {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeIn 5s infinite alternate;
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