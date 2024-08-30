<template>
  <div id="about">
    <h1>About Us</h1>

    <section class="about-intro">
      <h2>Welcome to Book Junction</h2>
      <p>
        At Book Junction, we believe that education should be accessible to everyone.
        That’s why we’ve created a platform where students can easily buy and sell second-hand
        educational materials. Whether you’re looking for textbooks, study guides, or any other
        learning resources, we’re here to help you find what you need at affordable prices.
      </p>
    </section>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>
        Our mission is to support students by making educational resources more affordable and
        sustainable. We aim to reduce the financial burden on students by offering a marketplace
        where they can buy and sell second-hand books and materials. We also promote the reuse of
        educational resources, contributing to a more sustainable future.
      </p>
    </section>

    <section class="offerings">
      <h2>What We Offer</h2>
      <ul>
        <li><strong>Wide Selection of Books:</strong> From textbooks to reference books, we offer a wide range of second-hand books covering various subjects and educational levels.</li>
        <li><strong>Easy Buying and Selling:</strong> Our user-friendly platform makes it simple to list your books for sale or find the ones you need.</li>
        <li><strong>Affordable Prices:</strong> Save money by purchasing second-hand materials, and earn extra cash by selling the books you no longer need.</li>
        <li><strong>Quality Assurance:</strong> We ensure that all listed materials are in good condition, so you can buy with confidence.</li>
      </ul>
    </section>

    <section class="why-choose-us">
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>For Students, By Students:</strong> We understand the challenges students face, which is why we’ve designed our platform to be as helpful and accessible as possible.</li>
        <li><strong>Sustainable Choices:</strong> By buying and selling second-hand books, you’re contributing to a more sustainable environment.</li>
        <li><strong>Community Driven:</strong> Join a community of students who are all about helping each other succeed.</li>
      </ul>
    </section>

    <section class="our-story">
      <h2>Our Story</h2>
      <p>
        Book Junction was founded by a group of students who saw the need for a more affordable
        way to access educational resources. Frustrated by the high cost of textbooks, we decided
        to create a platform where students could easily buy and sell their books. Since our launch,
        we’ve helped countless students save money and succeed in their studies.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
/* About page specific styles */
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

@keyframes fadeIn {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
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
