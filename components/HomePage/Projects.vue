<script lang="ts" setup>
interface Project {
    id: number
    title: string
    techStack: string
    image: { src: string, alt: string }
    liveSiteLink: string
    githubLink: string
}

const projects = ref<Project[]>([
    { 
        id: 1,
        title: 'Portfolio Site',  
        techStack: 'Nuxt3+TailWind CSS+DaisyUI+TypeScript',
        image: { src: '/images/foxbecoding-sq.png', alt: 'FoxBeCoding' },
        liveSiteLink: 'https://foxbecoding.com',
        githubLink: 'https://github.com/foxbecoding/portfolio'
    },

    { 
        id: 2,
        title: 'EasyBeatz',  
        techStack: 'Nuxt3+Vuetify+TypeScript+Python+Django Rest',
        image: { src: '/images/easybeatz-sq.png', alt: 'FoxBeCEasyBeatzoding' },
        liveSiteLink: 'https://easybeatz.com',
        githubLink: 'https://github.com/foxbecoding/easybeatz'
    }
])

</script>

<template>  
    <div class="py-4">
        <div class="text-center">
            <h1 class="text-5xl font-bold">My Projects</h1>
        </div>
        <div class="flex justify-center gap-4 mt-8">
            <div
                v-for="(project, i) in projects" 
                :key="i" 
                class="card w-96 bg-base-100 image-full"
            >
                <figure>
                    <img :src="project.image.src" :alt="project.image.alt" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ project.title }}</h2>
                    <p>Tech Stack: <br>{{ project.techStack }}</p>
                    <div class="card-actions justify-end">
                        <a 
                            class="btn btn-outline btn-sm"
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
                            GitHub
                        </a>
                        <!-- <a class="btn btn-outline btn-sm" @click="goToLink(project.liveSiteLink)">Live Site</a>
                        <a class="btn btn-accent btn-sm" @click="goToLink(project.githubLink)">GitHub</a> -->
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>