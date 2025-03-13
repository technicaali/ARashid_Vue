<template>
  <div class="home-container">
    <n-card title="Welcome to My Vue App">
      <p>This is the home page. Click the button below to increase the counter.</p>

      <!-- Counter Button -->
      <n-button class="counter-button" @click="counter++">
        Clicked {{ counter }} times
      </n-button>

      <hr />

      <!-- Secret Message Toggle -->
      <n-button class="secret-button" @click="toggleMessage">
        Secret Message
      </n-button>
      <p v-show="showMessage" class="secret-text">You have revealed my secret</p>
    </n-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NButton } from 'naive-ui'

const counter = ref(0)
const showMessage = ref(false)

const toggleMessage = () => {
  showMessage.value = !showMessage.value
}
</script>

<style scoped>
.home-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.counter-button {
  background-color: #007bff;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
}

.secret-button {
  background-color: #e63946;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
}

.secret-text {
  margin-top: 10px;
  font-weight: bold;
  color: #e63946;
}
</style>
