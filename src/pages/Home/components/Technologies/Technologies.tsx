import { motion } from 'framer-motion'
import {
    Languages,
    SoftwaresTools,
    technologies,
} from '../../../../data/technologies.constant'
import { textVariant } from '../../../../utils/motion'
import BallCanvas from '../../../../components/BallCanvas'

const Technologies = () => {
    return (
        <section id="technologies" className="container mt-44 mx-auto">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center"
            >
                <h1 className="text-secondary text-4xl sm:text-7xl inline font-bold">
                    Technologies.
                </h1>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
                {technologies.map((technology) => (
                    <div
                        className="w-28 h-28"
                        key={technology.name}
                        title={technology.name}
                    >
                        <BallCanvas icon={technology.image} />
                    </div>
                ))}
            </div>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center mt-10"
            >
                <h1 className="text-secondary text-4xl sm:text-7xl inline font-bold">
                    Languages
                </h1>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
                {Languages.map((technology) => (
                    <div
                        className="w-28 h-28 text-white text-[24px] font-bold"
                        key={technology}
                        title={technology}
                    >
                        {technology}
                    </div>
                ))}
            </div>

            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center mt-10"
            >
                <h1 className="text-secondary text-4xl sm:text-7xl inline font-bold">
                    Softwares & Tools
                </h1>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
                {SoftwaresTools.map((technology) => (
                    <div
                        className="w-30 h-28 text-white text-[24px] font-bold"
                        key={technology}
                        title={technology}
                    >
                        {technology}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies
