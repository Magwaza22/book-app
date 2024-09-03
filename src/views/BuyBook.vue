<template>

  <div id="buy-a-book">

    <h1>Buy a Book</h1>
    <img :src="bookImage" alt="Books" class="book-image" />

    <p>Here you can list a book to sell or purchase one from the collection.</p>

    <div class="buttons">

      <button @click="navigateTo('BuyerLogin')">Login</button>

      <button @click="navigateTo('BuyerRegister')">Register</button>

    </div>

  </div>

</template>

<script>
import bookImage from '@/assets/stack.jpg';

export default {
  name: 'BuyABook',
  data() {
    return {
      bookImage,
    };
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
};

</script>

<style scoped>

#buy-a-book {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f8f4ef;
  color: #333;
}

#buy-a-book h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

#buy-a-book p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  background-color: #8c7851;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;

}

button:hover {

  background-color: #755d3f;
}

</style>