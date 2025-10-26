import { Mail, Github, Linkedin } from 'lucide-react';
import { CONTACT_SECTION_DATA } from '@/config';
import React from 'react';

const ContactSection = () => {
  const { contactInfo } = CONTACT_SECTION_DATA;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4" id="contact">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-12">
        I'm always open to discussing new projects, opportunities, or collaborations. 
        Feel free to reach out using the form or through any of my social profiles.
      </p>

      <div className="flex gap-8 mb-8">
        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-gray-300 hover:text-[#64ffda]">
          <Mail className="w-6 h-6" />
          <span>{contactInfo.email}</span>
        </a>
        <a href="https://github.com/sonukumarjha" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-[#64ffda]">
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/sonu-kumar-jha/" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-[#64ffda]">
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:border-[#64ffda] focus:outline-none"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:border-[#64ffda] focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:border-[#64ffda] focus:outline-none"
            placeholder="What is this regarding?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            rows={6}
            className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:border-[#64ffda] focus:outline-none"
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-[#64ffda] text-[#0a192f] font-semibold hover:bg-[#64ffda]/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;