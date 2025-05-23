/* eslint-disable react/no-unescaped-entities */
// hello
import { motion } from 'framer-motion'
import { fadeIn, slideIn, textVariant } from '@/utils/motion'
import me from '@/assets/bhautik_d.jpeg'
// import StarsCanvas from '@/components/StarsCanvas'

const AboutMe = () => {
    return (
        <section id="about" className="sm:mt-44 mt-15 container mx-auto">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center"
            >
                <h1 className="text-secondary text-4xl sm:text-7xl inline font-bold">
                    About Me.
                </h1>
            </motion.div>
            <div className="flex flex-col items-center md:justify-center md:flex-row sm:gap-24 gap-14 sm:mt-10 mt-5 overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn({
                        direction: 'left',
                        type: 'spring',
                        delay: 0,
                        duration: 0.5,
                    })}
                    className="mx-3 md:w-[40%]"
                >
                    <p className="text-primary break-words text-lg md:text-2xl">
                        {/* I am an autodidact, and I believe that staying current
                        with the latest technologies is essential to success in
                        this field. In my free time, I enjoy engaging in online
                        gaming, traveling, and spending time with loved ones. I
                        bring a unique perspective and a drive for innovation to
                        every project, and I am always eager to learn and grow
                        as a developer. */}
                        Bringing web ideas to life with ReactJS And NextJs! I'm
                        a passionate frontend developer with over 3.3 years of
                        hands-on work experience. I enjoy building interactive
                        web applications that delight users Let's collaborate
                        and build something amazing!
                    </p>
                    <p className="text-primary break-words  text-lg md:text-2xl pt-4">
                        {/* My main focus these days is building accessible,
                        inclusive shopify applications and web services at{' '}
                        <a
                            href="https://oversight.co.il/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-callToAction inline-block underline-link"
                        >
                            oversight
                        </a>{' '}
                        . */}
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={slideIn({
                        direction: 'right',
                        type: 'spring',
                        delay: 0,
                        duration: 0.5,
                    })}
                    className="mb-4"
                >
                    <div className="w-[200px] md:w-[300px]">
                        <img src={me} alt="as" className="rounded-full"></img>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMe
