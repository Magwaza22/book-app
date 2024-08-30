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
            <input type="radio" name="Book Condition" id="buyerRating5" value="5" v-model="ratings.buyerRating">
            <label for="buyerRating5">★</label>
            <input type="radio" name="Seller Reliability" id="buyerRating4" value="4" v-model="ratings.buyerRating">
            <label for="buyerRating4">★</label>
            <input type="radio" name="value Rating" id="buyerRating3" value="3" v-model="ratings.buyerRating">
            <label for="buyerRating3">★</label>
            <input type="radio" name="Delivery" id="buyerRating2" value="2" v-model="ratings.buyerRating">
            <label for="buyerRating2">★</label>
            <input type="radio" name="Overall Rating" id="buyerRating1" value="1" v-model="ratings.buyerRating">
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
            <input type="radio" name="Book Condition" id="bookCondition5" value="5" v-model="ratings.bookCondition">
            <label for="bookCondition5">★</label>
            <input type="radio" name="Seller Reliability" id="bookCondition4" value="4" v-model="ratings.bookCondition">
            <label for="bookCondition4">★</label>
            <input type="radio" name="value Rating" id="bookCondition3" value="3" v-model="ratings.bookCondition">
            <label for="bookCondition3">★</label>
            <input type="radio" name="Delivery" id="bookCondition2" value="2" v-model="ratings.bookCondition">
            <label for="bookCondition2">★</label>
            <input type="radio" name="Overall Rating" id="bookCondition1" value="1" v-model="ratings.bookCondition">
            <label for="bookCondition1">★</label>
          </div>
          <textarea class="form-control mt-3" v-model="ratings.bookFeedback" rows="3" placeholder="Feedback on the book's condition"></textarea>
        </div>
      </div>


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

      console.log('Ratings submitted:', this.ratings);


    }
  }
};
</script>
