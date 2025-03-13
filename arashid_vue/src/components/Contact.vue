<template>
    <div class="contact-container">
      <n-card title="Contact Us">
        <n-form ref="formRef" :model="form" :rules="rules">
          <n-form-item label="Name" path="name">
            <n-input v-model:value="form.name" placeholder="Enter your name" />
          </n-form-item>
  
          <n-form-item label="Email" path="email">
            <n-input v-model:value="form.email" type="email" placeholder="Enter your email" />
          </n-form-item>
  
          <n-form-item label="Message" path="message">
            <n-input v-model:value="form.message" type="textarea" placeholder="Write your message..." />
          </n-form-item>
  
          <n-button type="primary" @click="submitForm">Submit</n-button>
        </n-form>
      </n-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useMessage } from 'naive-ui'
  
  const message = useMessage()
  const formRef = ref(null)
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  })
  
  const rules = {
    name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
    email: [{ required: true, message: 'Please enter a valid email', trigger: 'blur' }],
    message: [{ required: true, message: 'Message cannot be empty', trigger: 'blur' }],
  }
  
  const submitForm = () => {
    formRef.value?.validate((errors) => {
      if (!errors) {
        message.success('Your message has been sent!')
        form.value = { name: '', email: '', message: '' } // Reset form
      } else {
        message.error('Please fill out all fields correctly.')
      }
    })
  }
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  