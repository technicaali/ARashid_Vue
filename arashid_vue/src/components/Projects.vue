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
  
      <!-- Project Manager -->
      <n-card title="Project Manager">
        <n-form :model="newProject" :rules="rules" ref="formRef" label-placement="top">
          <n-space vertical>
            <!-- Project Title Input -->
            <n-form-item label="Project Title" prop="title">
              <n-input v-model="newProject.title" placeholder="Enter project title" />
            </n-form-item>
  
            <!-- Short Description Input -->
            <n-form-item label="Short Description" prop="shortDescription">
              <n-input v-model="newProject.shortDescription" placeholder="Enter short description" />
            </n-form-item>
  
            <!-- Project Details Input -->
            <n-form-item label="Project Details" prop="details">
              <n-input v-model="newProject.details" placeholder="Enter project details" />
            </n-form-item>
  
            <!-- Project Link Input -->
            <n-form-item label="Project Link" prop="link">
              <n-input v-model="newProject.link" placeholder="Enter project link" />
            </n-form-item>
  
            <!-- Add Project Button -->
            <n-space justify="center">
              <n-button @click="addProject" type="success">Add Project</n-button>
            </n-space>
          </n-space>
        </n-form>
  
        <!-- Remove Last Project Button -->
        <n-space justify="center">
          <n-button @click="removeLastProject" type="error" v-if="projects.length > 0">Remove Last Project</n-button>
        </n-space>
      </n-card>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { NCard, NList, NListItem, NButton, NThing, NSpace, NCollapseTransition, NInput, NForm, NFormItem } from 'naive-ui'
  
  // Reactive state for expanded project and form inputs
  const expandedProject = ref(null)
  const newProject = ref({
    title: '',
    shortDescription: '',
    details: '',
    link: ''
  })
  
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
  
  // Form validation rules
  const rules = {
    title: [{ required: true, message: 'Please enter a project title' }],
    shortDescription: [{ required: true, message: 'Please enter a short description' }],
    details: [{ required: true, message: 'Please enter project details' }],
    link: [{ required: true, message: 'Please enter a project link' }]
  }
  
  // Method to expand project details
  const toggleExpand = (projectId) => {
    expandedProject.value = expandedProject.value === projectId ? null : projectId
  }
  
  // Method to visit the project link
  const visitProject = (url) => {
    window.open(url, '_blank')
  }
  
  // Function to add a project
  const addProject = async () => {
    // Validate the form before adding the project
    const formRef = ref(null)
    const isValid = await formRef.value.validate()
  
    if (!isValid) {
      return
    }
  
    const newProj = {
      id: projects.value.length + 1,
      title: newProject.value.title,
      shortDescription: newProject.value.shortDescription,
      details: newProject.value.details,
      link: newProject.value.link
    }
  
    // Add the new project to the projects list
    projects.value.push(newProj)
  
    // Clear the form after adding
    newProject.value = {
      title: '',
      shortDescription: '',
      details: '',
      link: ''
    }
  
    console.log('New project added:', newProj)
  }
  
  // Function to remove the last project
  const removeLastProject = () => {
    if (projects.value.length > 0) {
      projects.value.pop()
    }
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
  
  .n-card {
    margin-bottom: 20px;
  }
  
  .n-button {
    width: 100%;
  }
  </style>  