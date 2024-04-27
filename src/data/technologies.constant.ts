import react from '../assets/tech/reactjs.png'
import nextjs from '../assets/tech/nextjs.png'
import nodejs from '../assets/tech/nodejs.png'
import javascript from '../assets/tech/javascript.png'
import kafka from '../assets/tech/material.png'
import tailwind from '../assets/tech/tailwind.png'
import mongodb from '../assets/tech/mongodb.png'
import vite from '../assets/tech/vite.png'
import redux from '../assets/tech/redux.png'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import scss from '../assets/tech/scss.png'
import bootstrap from '../assets/tech/bootstrap.png'

export interface ITechnologies {
    name: string
    image: string
}

export const technologies: ITechnologies[] = [
    {
        name: 'HTML-5',
        image: html,
    },
    {
        name: 'Css',
        image: css,
    },
    {
        name: 'Scss',
        image: scss,
    },
    {
        name: 'javascript',
        image: javascript,
    },
    {
        name: 'React',
        image: react,
    },
    {
        name: 'Redux',
        image: redux,
    },
    {
        name: 'Nextjs',
        image: nextjs,
    },
    {
        name: 'bootstrap',
        image: bootstrap,
    },
    {
        name: 'vite',
        image: vite,
    },
    {
        name: 'MIUI',
        image: kafka,
    },
    {
        name: 'tailwind',
        image: tailwind,
    },
    {
        name: 'Node.js',
        image: nodejs,
    },
    {
        name: 'mongodb',
        image: mongodb,
    },
]

export const Languages = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'typeScript']

export const SoftwaresTools = [
    'REACTJS',
    'NEXTJS',
    'Redux',
    'Bootstrap',
    'vite',
    'Material UI',
    'Shadcn UI',
    'GitLab',
    'GitHub',
]
