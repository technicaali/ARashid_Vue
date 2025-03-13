<template>
    <div class="projects-container">
      <n-card title="My Projects">
        <n-list bordered>
          <n-list-item v-for="project in projects" :key="project.id">
            <n-space vertical>
              <n-thing :title="project.title" :description="project.shortDescription">
                <template #header-extra>
                  <n-button text @click="toggleExpand(project.id)">
                    {{ expandedProject === project.id ? 'Hide Details' : 'View Details' }}
                  </n-button>
                </template>
              </n-thing>
  
              <n-collapse-transition>
                <div v-if="expandedProject === project.id" class="project-details">
                  <p>{{ project.details }}</p>
                  <n-button strong secondary type="primary" @click="visitProject(project.link)">
                    Visit Project
                  </n-button>
                </div>
              </n-collapse-transition>
            </n-space>
          </n-list-item>
        </n-list>
      </n-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { NCard, NList, NListItem, NButton, NThing, NSpace, NCollapseTransition } from 'naive-ui'
  
  const expandedProject = ref(null)
  
  const projects = ref([
    {
      id: 1,
      title: 'Thistle - Note-taking App',
      shortDescription: 'A cross-platform note-taking app with a clean UI.',
      details: 'Thistle combines features from popular note-taking apps, ensuring a focused writing experience.',
      link: 'https://github.com/example/thistle'
    },
    {
      id: 2,
      title: 'Silent Light - Action-Adventure Game',
      shortDescription: 'A third-person game set in the cursed island of Eirengard.',
      details: 'Play as Kael, a Spirithunter, and battle spirits to restore peace to the island.',
      link: 'https://github.com/example/silent-light'
    },
    {
      id: 3,
      title: 'Vue Portfolio Website',
      shortDescription: 'A responsive portfolio built with Vue 3, Pinia, and Naive UI.',
      details: 'Showcasing projects and experience with modern frontend development tools.',
      link: 'https://github.com/example/vue-portfolio'
    }
  ])
  
  const toggleExpand = (projectId) => {
    expandedProject.value = expandedProject.value === projectId ? null : projectId
  }
  
  const visitProject = (url) => {
    window.open(url, '_blank')
  }
  </script>
  
  <style scoped>
  .projects-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .project-details {
    margin-top: 10px;
    padding: 10px;
    border-left: 3px solid #18a058;
    background-color: #f6fef9;
  }
  </style>
  