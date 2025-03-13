<template>
    <div class="projects-container">
      <n-card title="My Projects">
        <p>Total Projects: {{ totalProjects }}</p>
  
        <!-- Show "No projects available" message if list is empty -->
        <p v-if="projects.length === 0" class="no-projects">No projects available</p>
  
        <n-list v-else bordered>
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
  
      <n-card title="Project Manager">
        <n-input v-model="newProjectTitle" placeholder="Enter project title" />
        <n-button @click="addProject" type="success">Add Project</n-button>
        <n-button @click="removeLastProject" type="error" v-if="projects.length > 0">Remove Last Project</n-button>
      </n-card>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { NCard, NList, NListItem, NButton, NThing, NSpace, NCollapseTransition, NInput } from 'naive-ui'
  
  // Reactive state
  const expandedProject = ref(null)
  const newProjectTitle = ref("")
  
  // Project list
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
    }
  ])
  
  // Computed property to count total projects
  const totalProjects = computed(() => projects.value.length)
  
  // Watch for changes in the number of projects
  watch(totalProjects, (newValue, oldValue) => {
    if (newValue > oldValue) {
      console.log(`A new project was added! Total projects: ${newValue}`)
    } else {
      console.log(`A project was removed. Total projects: ${newValue}`)
    }
  })
  
  // Methods
  const toggleExpand = (projectId) => {
    expandedProject.value = expandedProject.value === projectId ? null : projectId
  }
  
  const visitProject = (url) => {
    window.open(url, '_blank')
  }
  
  const addProject = () => {
    if (newProjectTitle.value.trim() === "") return
    projects.value.push({
      id: projects.value.length + 1,
      title: newProjectTitle.value,
      shortDescription: 'A new project added by the user.',
      details: 'Details will be updated soon.',
      link: '#'
    })
    newProjectTitle.value = ""
  }
  
  const removeLastProject = () => {
    projects.value.pop()
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
  
  .no-projects {
    text-align: center;
    font-weight: bold;
    color: #e63946;
  }
  </style>
  