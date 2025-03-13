<template>
  <n-message-provider>
    <n-layout>
      <!-- Header Navigation -->
      <n-layout-header bordered class="header">
        <n-space justify="center">
          <n-button text @click="$router.push('/')">Home</n-button>
          <n-button text @click="$router.push('/projects')">Projects</n-button>
          <n-button text @click="$router.push('/contact')">Contact</n-button>
        </n-space>
      </n-layout-header>

      <!-- Page Content -->
      <n-layout-content content-style="padding: 20px;">
        <router-view />
      </n-layout-content>

      <!-- Footer -->
      <n-layout-footer bordered class="footer">
        <span>© 2025 My Vue App. All rights reserved.</span>
      </n-layout-footer>
    </n-layout>
  </n-message-provider>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSpace, NButton, NMessageProvider } from 'naive-ui'
</script>

<style scoped>
.header {
  padding: 10px;
  background-color: #f5f5f5;
  text-align: center;
}

.footer {
  padding: 10px;
  background-color: #f5f5f5;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
