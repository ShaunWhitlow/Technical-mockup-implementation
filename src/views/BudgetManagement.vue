<template>
  <div>
    <h2>Budget Management</h2>
    <p>Set your budget limits below:</p>
    <input v-model="budget" placeholder="Enter your monthly budget" class="budget-input" />
    <p>Your budget: <strong>${{ budget }}</strong></p>
    <router-link to="/" class="btn">Back to Dashboard</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: ''
    };
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #E0AAFF; 
}

p {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #C77DFF; 
}

.budget-input {
  padding: 10px;
  font-size: 1.1rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #7B2CBF; 
  background-color: #9D4EDD; 
  color: #E0AAFF; 
}

.budget-input::placeholder {
  color: #F5F5F5; 
}

.budget-input:focus {
  outline: none;
  border-color: #5A189A; 
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: #fff;
  background-color: #5A189A; 
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #7B2CBF; 
}
</style>




