<template>
  <div>
    <h2>Track Your Expenses</h2>
    <p>Enter your expenses below:</p>
    <input v-model="expense" placeholder="Enter expense" class="expense-input" />
    <div class="buttons">
      <router-link to="/budget" class="btn">Manage Budget</router-link>
      <router-link to="/" class="btn">Back to Dashboard</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expense: ''
    };
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #E0AAFF; /* Lightest lavender */
}

p {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #C77DFF; /* Soft lavender */
}

.expense-input {
  padding: 10px;
  font-size: 1.1rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #7B2CBF; /* Lighter purple for border */
  background-color: #9D4EDD; /* Lighter purple for background */
  color: #E0AAFF; /* Light lavender text color */
}

.expense-input::placeholder {
  color: #F5F5F5; /* Light grey, close to white for the placeholder */
}

.expense-input:focus {
  outline: none;
  border-color: #5A189A; /* Focus color in vibrant purple */
}

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: #fff;
  background-color: #5A189A; /* Vibrant purple */
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #7B2CBF; /* Lighter purple for hover */
}
</style>

