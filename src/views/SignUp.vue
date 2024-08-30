<script >
export default {
  methods: {
    handleLogin() {
      this.$router.push({ name: 'AddBook' });
    },
  },
};
</script>

<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />

      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" id="confirmPassword" required />

      <button @click="navigateTosubmit('SellABook')">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #F0EFEB; /* Background color */
  color: #283618; /* Primary text color */
  margin: 0;
  padding: 0;
}
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #B7B7A4; /* Form background color */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  color: #283618;
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #283618;
}
input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #D4D4D4;
  border-radius: 4px;
  background-color: #F0EFEB;
}
button {
  width: 100%;
  padding: 12px;
  background-color: #283618; /* Button background */
  color: #F0EFEB; /* Button text color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #D4D4D4; /* Button hover color */
  color: #283618;
}
</style>