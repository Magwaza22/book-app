<template>
  <footer>
    <div>&copy; 2024 Book Junction. All rights reserved.</div>
    <div class="social-media">
      <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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

/* Footer specific styles */
/* Footer styles */
footer {
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-media {
  display: flex;
  gap: 1rem;
}

.social-media a {
  color: var(--background-color);
  font-size: 1.5rem;
}
</style>
