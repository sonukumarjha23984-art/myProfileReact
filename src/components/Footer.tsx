import { LANDING_SECTION_DATA } from '@/config';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm font-mono text-gray-400">
      <div className="flex flex-col items-center gap-1">
        <p>Copyright © {new Date().getFullYear()} {LANDING_SECTION_DATA.greeting.fullname}</p>
        <p>Designed & Built with 💚</p>
      </div>
    </footer>
  );
};

export default Footer;