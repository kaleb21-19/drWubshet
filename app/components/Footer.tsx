export default function Footer() {
    return (
<footer className="bg-dark text-white pt-20 pb-10">
  <div className="max-w-6xl mx-auto px-6">
    
 

    {/* 2. THE LINKS GRID: 1 column on mobile, 3 on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-8 text-center md:text-left">
      
      {/* Info Section */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-xl font-bold mb-4">Dr. Wubshet Assefa</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Specialist Pathologist focused on diagnostic excellence.
        </p>
      </div>

      {/* Navigation - Stacked vertically */}
      <div>
        <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-6 md:mb-4">Navigation</h4>
        <ul className="space-y-4 md:space-y-2 text-gray-400 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Contact</li>
         
        </ul>
      </div>

      {/* Contact - Easy to read on phone */}
      <div>
        <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-6 md:mb-4">Contact</h4>
        <div className="text-gray-400 text-sm space-y-4 md:space-y-2">
          <p>📍 Addis Ababa, Ethiopia</p>
          <p>✉️ info@drwubshet.com</p>
        </div>
      </div>

    </div>

    {/* 3. COPYRIGHT: Stacks on mobile */}
    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500 gap-4">
      <p>© 2026 Dr. Wubshet Assefa.</p>
      <p>Designed for Medical Excellence.</p>
    </div>

  </div>
</footer>
    );
}