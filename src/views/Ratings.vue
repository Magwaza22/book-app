<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Rate Your Experience</h2>
    <form @submit.prevent="submitRating">
      <!-- Seller Rating -->
      <div class="card mb-3">
        <div class="card-header">
          <h4>Rate the Seller</h4>
        </div>
        <div class="card-body">
          <div class="rating">
            <input type="radio" name="sellerRating" id="sellerRating5" value="5" v-model="ratings.sellerRating">
            <label for="sellerRating5">★</label>
            <input type="radio" name="sellerRating" id="sellerRating4" value="4" v-model="ratings.sellerRating">
            <label for="sellerRating4">★</label>
            <input type="radio" name="sellerRating" id="sellerRating3" value="3" v-model="ratings.sellerRating">
            <label for="sellerRating3">★</label>
            <input type="radio" name="sellerRating" id="sellerRating2" value="2" v-model="ratings.sellerRating">
            <label for="sellerRating2">★</label>
            <input type="radio" name="sellerRating" id="sellerRating1" value="1" v-model="ratings.sellerRating">
            <label for="sellerRating1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.sellerFeedback" rows="3" placeholder="Additional feedback for the seller"></textarea>
        </div>
      </div>

      <!-- Buyer Rating -->
      <div class="card mb-3">
        <div class="card-header">
          <h4>Rate the Buyer</h4>
        </div>
        <div class="card-body">
          <div class="rating">
            <input type="radio" name="buyerRating" id="buyerRating5" value="5" v-model="ratings.buyerRating">
            <label for="buyerRating5">★</label>
            <input type="radio" name="buyerRating" id="buyerRating4" value="4" v-model="ratings.buyerRating">
            <label for="buyerRating4">★</label>
            <input type="radio" name="buyerRating" id="buyerRating3" value="3" v-model="ratings.buyerRating">
            <label for="buyerRating3">★</label>
            <input type="radio" name="buyerRating" id="buyerRating2" value="2" v-model="ratings.buyerRating">
            <label for="buyerRating2">★</label>
            <input type="radio" name="buyerRating" id="buyerRating1" value="1" v-model="ratings.buyerRating">
            <label for="buyerRating1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.buyerFeedback" rows="3" placeholder="Additional feedback for the buyer"></textarea>
        </div>
      </div>

      <!-- Book Condition Rating -->
      <div class="card mb-3">
        <div class="card-header">
          <h4>Rate the Book Condition</h4>
        </div>
        <div class="card-body">
          <div class="rating">
            <input type="radio" name="bookCondition" id="bookCondition5" value="5" v-model="ratings.bookCondition">
            <label for="bookCondition5">★</label>
            <input type="radio" name="bookCondition" id="bookCondition4" value="4" v-model="ratings.bookCondition">
            <label for="bookCondition4">★</label>
            <input type="radio" name="bookCondition" id="bookCondition3" value="3" v-model="ratings.bookCondition">
            <label for="bookCondition3">★</label>
            <input type="radio" name="bookCondition" id="bookCondition2" value="2" v-model="ratings.bookCondition">
            <label for="bookCondition2">★</label>
            <input type="radio" name="bookCondition" id="bookCondition1" value="1" v-model="ratings.bookCondition">
            <label for="bookCondition1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.bookFeedback" rows="3" placeholder="Feedback on the book's condition"></textarea>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit Rating</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RatingsPage',
  data() {
    return {
      ratings: {
        sellerRating: '',
        sellerFeedback: '',
        buyerRating: '',
        buyerFeedback: '',
        bookCondition: '',
        bookFeedback: ''
      }
    };
  },
  methods: {
    submitRating() {
      // Logic to handle form submission
      console.log('Ratings submitted:', this.ratings);

      // Example: Redirect to a confirmation page or clear the form
      // this.$router.push({ name: 'ConfirmationPage' });
    }
  }
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

.slogan {
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