import AboutSection from "@/components/About_section"
import AchievementsSection from "@/components/AchievementsSection"
import ConnectIcons from "@/components/ConnectIcons"
import ContactSection from "@/components/ContactSection"
import ExperienceSection from "@/components/ExperienceSection"
import Footer from "@/components/Footer"
import Landing_section from "@/components/landing_section"
import Navbar from "@/components/navbar"
import ProjectsGrid from "@/components/ProjectsGrid"
import SkillsSection from "@/components/SkillsSection"
import Cover from "@/components/ui/cover"


const Landing = () => {
    return (
        <div className="bg-[#0a192f] min-h-screen w-full overflow-hidden">
            <Cover />
            <Navbar />
            <ConnectIcons />
            <main className="px-5 md:px-[200px]">
                <Landing_section />
                <AboutSection />
                <div className="mt-8" />
                <SkillsSection />
                <div className="mt-8" />
                <ExperienceSection />
                <div className="mt-8" />
                <ProjectsGrid />
                <div className="mt-8" />
                <AchievementsSection />
                <div className="mt-8" />
                <ContactSection />
                <Footer />
            </main>
        </div>
    )
}

export default Landing