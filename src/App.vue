<template>
  <div id="app">
    <header>
      <h1>Budgeting App</h1>
      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/expenses">Track Expenses</router-link>
        <router-link to="/budget">Manage Budget</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #10002B; 
  color: #E0AAFF; 
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
}

header {
  background-color: #240046; 
  color: #E0AAFF;
  padding: 20px 40px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

nav {
  margin-top: 10px;
}

nav a {
  color: #C77DFF;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1rem;
}

nav a:hover {
  color: #5A189A;
  text-decoration: underline;
}

main {
  padding: 20px;
  width: 80%;
  max-width: 900px;
  background-color: #3C096C; 
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
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

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>



