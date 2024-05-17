import { motion } from 'framer-motion'
import {
    Languages,
    SoftwaresTools,
    technologies,
} from '../../../../data/technologies.constant'
import { textVariant } from '../../../../utils/motion'
import StarsCanvas from '@/components/StarsCanvas'

const Technologies = () => {
    return (
        <section
            id="technologies"
            className="container sm:mt-44 mt-14 mx-auto "
        >
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

            <div className="flex flex-row flex-wrap justify-center sm:gap-10 gap-5 mt-16">
                {technologies.map((technology) => (
                    <div
                        className="sm:w-28 sm:h-28 w-14 h-14 flex justify-center items-center"
                        key={technology.name}
                        title={technology.name}
                    >
                        <img src={technology.image} alt={technology.name} />
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

            <div className="flex flex-row flex-wrap justify-center sm:gap-10 gap-5 mt-16">
                {Languages.map((language) => (
                    <div
                        className="sm:w-fit sm:h-auto w-fit h-auto text-white sm:text-[24px] text-[15px]  font-bold flex justify-center items-center"
                        key={language}
                        title={language}
                    >
                        {language}
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

            <div className="flex flex-row flex-wrap justify-center sm:gap-10 gap-5 mt-16">
                {SoftwaresTools.map((softwareTool) => (
                    <div
                        className="sm:w-fit sm:h-auto w-fit h-auto text-white sm:text-[24px] text-[15px]  font-bold flex justify-center items-center"
                        key={softwareTool}
                        title={softwareTool}
                    >
                        {softwareTool}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies
