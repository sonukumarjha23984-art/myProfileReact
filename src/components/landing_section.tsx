import { LANDING_SECTION_DATA, SOCIAL_ICONS } from '@/config';
// Use the uploaded photo from the public folder
const profilePic = '/sonu_pic.jpg';
import React, { useState } from 'react';
import { Download, FileText, File, Moon, Sun } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/Dailog';

const ResumeOption = ({ icon: Icon, title, subtitle, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-800 transition-colors w-full text-left group"
    >
        <div className="p-2 rounded-full bg-[#22ea4b] bg-opacity-10 group-hover:bg-opacity-20 transition-all">
            <Icon className="w-6 h-6 text-[#22ea4b] group-hover:scale-110 transition-transform" />
        </div>
        <div>
            <h3 className="text-md text-slate-900 group-hover:text-[#22ea4b] transition-colors">{title}</h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{subtitle}</p>
        </div>
    </button>
);

const Landing_section: React.FC = () => {
    const { greeting, description, socialLinks } = LANDING_SECTION_DATA;
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = (format: string, theme: string) => {
        const fileName = `sonuJha_Fullstack.pdf`;
        // Replace these with actual file paths
        const filePath = `${import.meta.env.BASE_URL}/resumes/${fileName}`;
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsOpen(false);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 bg-[#0a192f]">
            <div className="flex flex-col md:flex-row items-start gap-10 pt-16 md:pt-0">
                <div className="flex-shrink-0 mt-8 md:mt-20">
                    <img 
                        src={profilePic}
                        alt="Profile"
                        className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-[#00caf9] shadow-lg"
                    />
                </div>
                <div className="space-y-5">
                    <h1 className="font-calibre font-semibold text-[40px] md:text-7xl text-slate-300">
                        {greeting.name}
                    </h1>
                    <h2 className="font-calibre font-bold text-[32px] md:text-5xl text-[#00caf9]">
                        {greeting.title}
                    </h2>
                    <p className="font-calibre font-thin text-[18px] md:text-[20px] text-slate-300 max-w-2xl">
                        {description}
                    </p>
                </div>
            </div>

                <div className="flex items-center gap-6">


                    <div className='flex gap-3 md:hidden'>
                        <a
                            href={socialLinks.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.github} />
                            </svg>
                        </a>
                        <a
                            href={socialLinks.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.linkedin} />
                            </svg>
                        </a>
                        <a
                            href={`mailto:${socialLinks.email.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 hover:translate-y-[-2px] transition-transform"
                        >
                            <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
                                <path d={SOCIAL_ICONS.email} />
                            </svg>
                        </a>
                    </div>
                     <button onClick={() => handleDownload('pdf', 'light')} className="inline-flex items-center gap-2 rounded p-2 md:px-6 md:py-3  font-mono text-sm text-[#22ea4b] border border-[#22ea4b] rounded hover:bg-[#22ea4b] hover:bg-opacity-10 transition-all duration-300">
                                <Download size={16} />
                                <span className='hidden md:inline'>Download Resume</span>
                            </button>
                    {}
                </div>
        </section>
    );
};

export default Landing_section;