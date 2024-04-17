import react from '../assets/tech/reactjs.png'
import docker from '../assets/tech/nextjs.png'
import nodejs from '../assets/tech/nodejs.png'
import redis from '../assets/tech/javascript.png'
import kafka from '../assets/tech/material.png'

export interface ITechnologies {
    name: string
    image: string
}

export const technologies: ITechnologies[] = [
    {
        name: 'React',
        image: react,
    },
    {
        name: 'Docker',
        image: docker,
    },
    {
        name: 'Node.js',
        image: nodejs,
    },
    {
        name: 'Redis',
        image: redis,
    },
    {
        name: 'Kafka',
        image: kafka,
    },
]

export const Languages = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'typeScript']

export const SoftwaresTools = [
    'REACTJS',
    'NEXTJS',
    'Bootstrap',
    'vite',
    'Material UI',
    'Shadcn UI',
    'GitLab',
    'GitHub',
]
