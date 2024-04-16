// eslint-disable-next-line import/named
import { IconType } from 'react-icons'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
// BsInstagram, BsFacebook,
interface SocialMedia {
    name: string
    url: string
    icon: IconType
}

const socialMedias: SocialMedia[] = [
    {
        name: 'Github',
        url: 'https://github.com/BhautikDavariya',
        icon: BsGithub,
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/bhautik-davariya-15b2b722a/',
        icon: BsLinkedin,
    },
    // {
    //     name: 'Facebook',
    //     url: 'https://www.facebook.com/NivSvv/',
    //     icon: BsFacebook,
    // },
    // {
    //     name: 'Instagram',
    //     url: 'https://www.instagram.com/niv_sv/',
    //     icon: BsInstagram,
    // },
]

export default socialMedias
