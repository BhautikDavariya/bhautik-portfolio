export interface IProject {
    title: string
    description: string
    technologies: string[]
    github: string | null
    demo: string | null
    image: string
}

export const ProjectsData: IProject[] = [
    {
        title: 'InfyPOS - Advanced Laravel POS with Inventory Management',
        description: `This is the Invoice Management System where users can manage all the invoices in one place and digitally. The client will get its separate login panel from where he can see the lists of his invoices and do payments.
        Here are some Key Features and Concepts that InfyInvoices provides.
        InfyInvoices – Laravel Invoice Management System.`,
        technologies: [
            'HTML',
            'Scss',
            'Laravel',
            'Mysql',
            'React',
            'Javascript',
            'Redux(toolkit)',
            'Axios',
        ],
        github: '',
        demo: 'https://infypos.infyom.com/',
        image: 'https://d37y9b4kfek2hl.cloudfront.net/products/point-of-sale-inline.png',
    },
    {
        title: 'LinkTracker: Building, Tracking, Elevating',
        description: `Developed a powerful QR code builder application with features like generating
        business IDs (bid codes), shortening URLs, and analyzing links. Users can easily sign in
        using their existing social media accounts, download generated QR codes, and
        customize them by changing the background or adding their own image. This project
        allowed me to build a full-featured application with React and gain experience in user
        authentication, data analysis, and user interface customization.`,
        technologies: [
            'React',
            'Redux(toolkit)',
            'HTML',
            'Scss',
            'Javascript',
            'Laravel',
            'Axios',
        ],
        github: '',
        demo: 'https://link-builder.infyom.com/',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
    {
        title: 'Udhyog Ecom.',
        description:
            'Built Udhyog Ecom, a comprehensive e-commerce website for Sand Selica product suppliers, using Next.js and Redux. The project features an intuitive interface for both customers and administrators. Customers can easily browse and purchase products, while administrators have the tools to manage inventory and orders. This project allowed me to gain experience with Next.js, Redux, and building user-friendly ecommerce platforms.',
        technologies: [
            'NestJS',
            'Axios',
            'Typescript',
            'Custom Hook',
            'Node Js',
            'Redux(persist)',
        ],
        github: '',
        demo: 'http://udyogtrade.com/',
        image: '',
    },
    {
        title: 'Asset Management',
        description:
            'Developed Asset Management, a React application to streamline asset and portfolio tracking. This user-friendly application allows users to easily perform asset analysis, manage portfolios, visualize data with reporting charts, and monitor their overall portfolio health. Through this project, I honed my React development skills and gained valuable experience in user-focused design and problem-solving.',
        technologies: [
            'React Js',
            'Vite',
            'Axios',
            'JavaScript',
            'Node Js',
            'Redux(persist)',
        ],
        github: '',
        demo: 'https://app.acclimetry.com',
        image: '',
    },
    {
        title: 'Meta-Snap-Editor',
        description: `Meta-snap, a web application, helps users manage metadata associated with canvas headings. This user-friendly tool facilitates the creation of dynamic meta URLs, which improve search engine ranking (SEO) for their content. Built with React's flexible components, Meta-snap streamlines metadata management specifically for canvas headings. This project solidified my expertise in building React applications and provided valuable insights into SEO optimization strategies.`,
        technologies: [
            'React Js',
            'Axios',
            'JavaScript',
            'Node Js',
            'Redux(toolkit)',
        ],
        github: '',
        demo: 'https://app.metasnap.io',
        image: '',
    },
    {
        title: 'ToneCompass',
        description: `Developed Tone Compass, a user-friendly React application to simplify color
            selection for designers. This tool empowers users to pick color shades, explore
            patterns, and receive personalized color recommendations. Through Tone Compass,
            designers can effortlessly build visually stunning and harmonious color palettes.`,
        technologies: [
            'React Js',
            'Vite',
            'Axios',
            'JavaScript',
            'Node Js',
            'Redux(persist)',
        ],
        github: '',
        demo: 'https://app.tonecompass.com/',
        image: '',
        
    },
]
