<script lang="ts" setup>
import { mdiGithub, mdiCheck, mdiInformationSlabCircleOutline } from '@mdi/js'

interface Project {
    id: number
    title: string
    techStack: string[]
    image: { src: string, alt: string }
    liveSiteLink: string
    githubLink: string
    modal: {
        title: string
        text: string
    }
}

const iconPath = reactive({
    github: mdiGithub,
    check: mdiCheck,
    info: mdiInformationSlabCircleOutline
})

const isModalOpen = ref<boolean>(false)

const modal = reactive({
    title: '',
    text: ''
})

const projects = ref<Project[]>([
    { 
        id: 1,
        title: 'Portfolio Site',  
        techStack: ['Nuxt3', 'TailWind CSS', 'DaisyUI', 'TypeScript'],
        image: { src: '/images/foxbecoding-sq.png', alt: 'FoxBeCoding' },
        liveSiteLink: 'https://foxbecoding.com',
        githubLink: 'https://github.com/foxbecoding/portfolio',
        modal: {
            title: 'Porfolio Site',
            text: `Simple portfolio website that displays my projects and skillsets.`
        }
    },

    { 
        id: 2,
        title: 'EasyBeatz',  
        techStack: ['Nuxt3','Vuetify','TypeScript','Python','Django Rest'],
        image: { src: '/images/easybeatz-sq.png', alt: 'FoxBeCEasyBeatzoding' },
        liveSiteLink: 'https://easybeatz.com',
        githubLink: 'https://github.com/foxbecoding/easybeatz',
        modal: {
            title: 'EasyBeatz',
            text:  `
                    EasyBeatz is a freelance full stack project that I developed for their company.  
                    The system utilizes the Stripe API that allows users to sign up, 
                    subscribe and purchase instrumentals.  The company is able to manage their 
                    customer base and manage their content throughout the website. 
                   `
        }
    }
])

const openModal = (data: any): void => {
    isModalOpen.value = true
    modal.title = data.title
    modal.text = data.text
    document.body.style.setProperty('overflow', 'hidden');
}

const closeModal = (): void => {
    isModalOpen.value = false
    modal.title = ''
    modal.text = ''
    document.body.style.removeProperty("overflow");
}

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
                        <div class="flex">
                            <h2 class="card-title flex-1">{{ project.title }}</h2>
                            <label
                                @click="openModal(project.modal)" 
                                class="flex-none btn btn-sm btn-ghost btn-circle text-info"
                                 
                            >
                                <svg-icon type="mdi" :path="iconPath.info" :size="24" />
                            </label>
                        </div>
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
        <teleport to="body">
            <div class="modal" :class="isModalOpen ? 'modal-open' : ''">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{{ modal.title }}</h3>
                    <p class="py-4">{{ modal.text }}</p>
                    <div class="modal-action">
                        <label class="btn btn-sm bg-neutral" @click="closeModal()">Close</label>
                    </div>
                </div>
            </div>
        </teleport>  
    </div>
</template>