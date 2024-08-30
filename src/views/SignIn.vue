<template>
  <div id="sign-in-container">
    <div id="sign-in">
      <h1>Sign In</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      this.$router.push({ name: 'SellerFunction' });
    },
  },
};
</script>

<style scoped>
/* Container for centering */
#sign-in-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

/* Sign-in box styles */
#sign-in {
  background-color: white; /* Change this to your desired background color */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2rem; /* Spacing inside the box */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  width: 400px; /* Set a fixed width for the box */
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%; /* Make button full-width */
}

button:hover {
  background-color: var(--secondary-color);
}
</style>
