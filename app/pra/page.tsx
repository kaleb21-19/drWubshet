
const experience = [
  {
    year: "2018 - Present",
    role: "Senior Pathologist",
    location: "National Referral Hospital",
    details: "Specializing in oncological histopathology and laboratory quality management."
  },
  {
    year: "2015 - 2018",
    role: "Clinical Researcher",
    location: "Medical Research Institute",
    details: "Focused on cytopathology and early detection patterns in cellular structures."
  },
  {
    year: "2012 - 2015",
    role: "Resident Pathologist",
    location: "University Teaching Hospital",
    details: "Comprehensive training in forensic and surgical pathology."
  }
];
export default function Pra() {
    return (
       <section className="p-6 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Pra</h1>
                <p className="text-gray-600">Pathologist & Medical Researcher</p>
            </div>
            {/* 2. The Timeline Wrapper */}
            <div className="relative">
                {/* THE SPINE: This is the vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
                
            </div>

          
        </div>
       
       </section>
    );
}