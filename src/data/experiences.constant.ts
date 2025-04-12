import oversight from '../assets/companies/infyom.png'
import netizens from '../assets/companies/netizens.svg'
import checkpoint from '../assets/companies/smixit_solutions_private_limited_logo.jpeg'
// import magshimim from '../assets/companies/magshimim.png'

export interface IExperience {
    title: string
    company_name: string
    icon: string
    iconBgColor: string
    date: string
    points: string[]
}

export const experiences: IExperience[] = [
    {
        title: 'Full Stack Developer',
        company_name: 'Netizens Technologies Private Limited',
        icon: netizens,
        iconBgColor: '#f0f0f0',
        date: 'Jul 2025- 2025(Present)',
        points: [
            `A skilled full stack developer with years of experience building web applications, especially focusing on web applications for Android, iOS using React Js, Next Js or Node Js, Capacitor. Strong understanding of frontend and backend technologies including React Bootstrap, Redux, custom hooks. Works seamlessly with teams to build great software.`,
        ],
    },
    {
        title: 'React And Next Js Developer',
        company_name: 'Smixit Solutions Private Limited',
        icon: checkpoint,
        iconBgColor: '#f0f0f0',
        date: 'Apr 2023- Jun 2024(Present)',
        points: [
            `I have over 1.3 year of expertise developing online
            applications, such as Meta-Snap-Editor, Udhyog
            Ecommerce, and Acclimetry. In addition, I work well
            in groups and enjoy collaborating with people
            from different departments to produce top-notch
            software.`,
        ],
    },
    {
        title: 'MERN Developer',
        company_name: 'Infyom Technologies Private Limited',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: 'Jan 2022 - Mar 2023',
        points: [
            `A skilled React.js developer with 1.3 years of
            experience in building web applications,
            specifically focused on POS systems and QR
            builder apps. Possesses a strong understanding of
            frontend technologies, including React Bootstrap,
            Redux, custom hooks. Works seamlessly with
            teams to build great software.`,
        ],
    },
]

// {
//     title: 'National Cyber Education Program',
//     company_name: 'Magshmim',
//     icon: magshimim,
//     iconBgColor: '#f0f0f0',
//     date: 'Nov 2015 - Nov 2018',
//     points: [
//         'Taught various programming languages, including the basics of different data structures, recursion, complexity, code conventions, client-server configuration, sockets, TCP/UDP, DNS, OSI model, encryption methods, dynamic memory, pointers, and assembly.',
//         'Provided a comprehensive curriculum that covered both fundamental and advanced topics in programming.',
//         'Encouraged hands-on learning and provided practical exercises and projects to reinforce learning.',
//         'Encouraged collaboration and teamwork among students to foster a supportive and engaging learning environment.',
//         'Emphasized the importance of good coding practices and conventions to ensure code quality and maintainability.',
//     ],
// },
