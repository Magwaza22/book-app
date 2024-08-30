<!-- src/components/BackButton.vue -->
<template>
  <button @click="goBack" class="back-button">
    <!-- You can use an icon or text here -->
    ← Back
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1); // Navigates to the previous page
    }
  }
};
</script>

<style scoped>
.back-button {
  background-color: transparent;
  border: none;
  color: #283618; /* Text color */
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.back-button:hover {
  text-decoration: underline;
}
</style>
