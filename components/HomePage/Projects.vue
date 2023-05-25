<script lang="ts" setup>
import { mdiGithub, mdiCheck } from '@mdi/js'

interface Project {
    id: number
    title: string
    techStack: string[]
    image: { src: string, alt: string }
    liveSiteLink: string
    githubLink: string
}

const iconPath = reactive({
    github: mdiGithub,
    check: mdiCheck
})

const projects = ref<Project[]>([
    { 
        id: 1,
        title: 'Portfolio Site',  
        techStack: ['Nuxt3', 'TailWind CSS', 'DaisyUI', 'TypeScript'],
        image: { src: '/images/foxbecoding-sq.png', alt: 'FoxBeCoding' },
        liveSiteLink: 'https://foxbecoding.com',
        githubLink: 'https://github.com/foxbecoding/portfolio'
    },

    { 
        id: 2,
        title: 'EasyBeatz',  
        techStack: ['Nuxt3','Vuetify','TypeScript','Python','Django Rest'],
        image: { src: '/images/easybeatz-sq.png', alt: 'FoxBeCEasyBeatzoding' },
        liveSiteLink: 'https://easybeatz.com',
        githubLink: 'https://github.com/foxbecoding/easybeatz'
    }
])

</script>

<template>  
    <div class="py-8">
        <div class="text-center">
            <h1 class="text-4xl sm:text-5xl font-bold">My Projects</h1>
        </div>
        <AppFrame>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div
                    v-for="(project, i) in projects" 
                    :key="i" 
                    class="card bg-base-100 image-full"
                >
                    <figure>
                        <img :src="project.image.src" :alt="project.image.alt" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ project.title }}</h2>
                        <p>Tech Stack:</p>
                        <p 
                            class="flex gap-4"
                            v-for="(tech, t) in project.techStack" 
                            :key="t"
                        >
                            <svg-icon class="relative top-1" type="mdi" :path="iconPath.check" :size="18" />
                            <span>{{ tech }}</span>
                        </p>
                        <div class="card-actions justify-end">
                            <a 
                                class="btn btn-sm btn-outline"
                                target="_blank" 
                                :href="project.liveSiteLink"
                            >
                                Live Site
                            </a>
                            <a 
                                class="btn btn-accent btn-sm" 
                                target="_blank"
                                :href="project.githubLink"
                            >
                                <svg-icon class="mr-2" type="mdi" :path="iconPath.github" :size="24" />
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AppFrame>  
    </div>
</template>