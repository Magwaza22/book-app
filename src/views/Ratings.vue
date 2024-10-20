<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Rate Your Experience</h2>
    <form @submit.prevent="submitRating">
      <div class="card mb-3">
        <div class="card-header">
          <h4>Rate the Seller</h4>
        </div>
        <div class="card-body">
          <div class="rating">
            <input type="radio" name="sellerRating" id="sellerRating5" value="5" v-model="ratings.sellerRating" />
            <label for="sellerRating5">★</label>
            <input type="radio" name="sellerRating" id="sellerRating4" value="4" v-model="ratings.sellerRating" />
            <label for="sellerRating4">★</label>
            <input type="radio" name="sellerRating" id="sellerRating3" value="3" v-model="ratings.sellerRating" />
            <label for="sellerRating3">★</label>
            <input type="radio" name="sellerRating" id="sellerRating2" value="2" v-model="ratings.sellerRating" />
            <label for="sellerRating2">★</label>
            <input type="radio" name="sellerRating" id="sellerRating1" value="1" v-model="ratings.sellerRating" />
            <label for="sellerRating1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.sellerFeedback" rows="3" placeholder="Additional feedback for the seller"></textarea>
        </div>
      </div>

      <div class="card mb-3">
        <div class="card-header">
          <h4>Rate the Buyer</h4>
        </div>
        <div class="card-body">
          <div class="rating">
            <input type="radio" name="buyerRating" id="buyerRating5" value="5" v-model="ratings.buyerRating" />
            <label for="buyerRating5">★</label>
            <input type="radio" name="buyerRating" id="buyerRating4" value="4" v-model="ratings.buyerRating" />
            <label for="buyerRating4">★</label>
            <input type="radio" name="buyerRating" id="buyerRating3" value="3" v-model="ratings.buyerRating" />
            <label for="buyerRating3">★</label>
            <input type="radio" name="buyerRating" id="buyerRating2" value="2" v-model="ratings.buyerRating" />
            <label for="buyerRating2">★</label>
            <input type="radio" name="buyerRating" id="buyerRating1" value="1" v-model="ratings.buyerRating" />
            <label for="buyerRating1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.buyerFeedback" rows="3" placeholder="Additional feedback for the buyer"></textarea>
        </div>
      </div>

      <div class="card mb-3">
        <div class="card-header">
          <h4>Rate the Book Condition</h4>
        </div>
        <div class="card-body">
          <div class="rating">
            <input type="radio" name="bookCondition" id="bookCondition5" value="5" v-model="ratings.bookCondition" />
            <label for="bookCondition5">★</label>
            <input type="radio" name="bookCondition" id="bookCondition4" value="4" v-model="ratings.bookCondition" />
            <label for="bookCondition4">★</label>
            <input type="radio" name="bookCondition" id="bookCondition3" value="3" v-model="ratings.bookCondition" />
            <label for="bookCondition3">★</label>
            <input type="radio" name="bookCondition" id="bookCondition2" value="2" v-model="ratings.bookCondition" />
            <label for="bookCondition2">★</label>
            <input type="radio" name="bookCondition" id="bookCondition1" value="1" v-model="ratings.bookCondition" />
            <label for="bookCondition1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.bookFeedback" rows="3" placeholder="Feedback on the book's condition"></textarea>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary" @click="submitRating">Submit Rating</button>
      </div>

      <b-modal id="confirmation-modal" title="Rating Submitted" centered>
        Your rating has been submitted successfully!
        <br>
        <button type="button" class="btn btn-primary" @click="$bvModal.hide('confirmation-modal')">Close</button>
      </b-modal>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

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
    async submitRating() {
      try {
        const response = await axios.post('http://localhost:5173/rating/create', this.ratings);
        console.log('Ratings submitted successfully:', response.data);

        // Display confirmation popup
        this.$bvModal.show('confirmation-modal');

        // Clear the form after successful submission
        this.ratings = {
          sellerRating: '',
          sellerFeedback: '',
          buyerRating: '',
          buyerFeedback: '',
          bookCondition: '',
          bookFeedback: ''
        };
      } catch (error) {
        console.error('Error submitting ratings:', error);
        // Display error message to the user (optional)
        alert('Error submitting ratings: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #F0EFEB;
  color: #283618;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #B7B7A4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0);
}

h1 {
  text-align: center;
  color:#283618;
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
  padding: 8px;
  margin-bottom: 5px;
  border: 3px solid #D4D4D4;
  border-radius: 4px;
  background-color: #F0EFEB;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #8c7851;
  color: #F0EFEB;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #D4D4D4;
  color: #8c7851;
}
</style>
