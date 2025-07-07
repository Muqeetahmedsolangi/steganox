import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Contact data
const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "contact@mechnovate.com",
  address: "123 Innovation Drive, Tech City, TC 12345",
  hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
};

const officeLocations = [
  {
    id: 1,
    name: "Headquarters - New York",
    address: "123 Innovation Drive, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@mechnovate.com",
    manager: "John Smith",
    employees: "45+",
    specialties: ["Product Design", "Manufacturing", "R&D"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
  },
  {
    id: 2,
    name: "West Coast Office - San Francisco",
    address: "456 Tech Boulevard, San Francisco, CA 94102",
    phone: "+1 (555) 234-5678",
    email: "sf@mechnovate.com",
    manager: "Sarah Johnson",
    employees: "32+",
    specialties: ["Robotics", "AI Integration", "IoT"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50394.58351394529!2d-122.4693891!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1633024900000!5m2!1sen!2sus"
  },
  {
    id: 3,
    name: "Research Center - Boston",
    address: "789 Research Park, Boston, MA 02101",
    phone: "+1 (555) 345-6789",
    email: "boston@mechnovate.com",
    manager: "Dr. Michael Chen",
    employees: "28+",
    specialties: ["Advanced Materials", "Simulation", "Testing"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188990.26436246768!2d-71.2868145!3d42.3600825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sus!4v1633025000000!5m2!1sen!2sus"
  }
];

const contactMethods = [
  {
    id: 1,
    icon: "mdi:phone",
    title: "Phone Support",
    description: "Speak directly with our engineering team",
    value: contactInfo.phone,
    action: "Call Now"
  },
  {
    id: 2,
    icon: "mdi:email",
    title: "Email Support",
    description: "Send us your project requirements",
    value: contactInfo.email,
    action: "Send Email"
  },
  {
    id: 3,
    icon: "mdi:map-marker",
    title: "Visit Our Office",
    description: "Meet our team in person",
    value: contactInfo.address,
    action: "Get Directions"
  },
  {
    id: 4,
    icon: "mdi:clock",
    title: "Business Hours",
    description: "We're here when you need us",
    value: contactInfo.hours,
    action: "Schedule Meeting"
  }
];

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "Chief Technology Officer",
    email: "john.smith@mechnovate.com",
    phone: "+1 (555) 123-4567",
    avatar: "/src/assets/images/our-team5/p1.jpg",
    specialties: ["Product Strategy", "Team Leadership", "Innovation"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Lead Mechanical Engineer",
    email: "sarah.johnson@mechnovate.com",
    phone: "+1 (555) 234-5678",
    avatar: "/src/assets/images/our-team5/p2.jpg",
    specialties: ["CAD Design", "Manufacturing", "Quality Control"]
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    role: "Research Director",
    email: "michael.chen@mechnovate.com",
    phone: "+1 (555) 345-6789",
    avatar: "/src/assets/images/our-team5/p3.jpg",
    specialties: ["Advanced Materials", "R&D", "Testing"]
  }
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    serviceType: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const [selectedOffice, setSelectedOffice] = useState(0);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({
        name: "", email: "", phone: "", company: "", subject: "", message: "", serviceType: ""
      });

      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }, 2000);
  };

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="font-bold mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.1',
                color: '#ffffff'
              }}
            >
              Contact <span style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Us</span>
            </h1>
            <p 
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}
            >
              Ready to bring your mechanical engineering project to life? Get in touch with our expert team.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>Home</span>
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
              <span className="text-purple-400">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">Choose your preferred way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <div key={method.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon={method.icon} className="text-2xl text-purple-400" />
                      </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                  <p className="text-white font-medium mb-4">{method.value}</p>
                  <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-purple-400">Global</span> Offices</h2>
            <p className="text-gray-400">Visit us at any of our locations worldwide</p>
          </div>

          {/* Office Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {officeLocations.map((office, index) => (
              <button
                key={office.id}
                onClick={() => setSelectedOffice(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedOffice === index
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {office.name.split(' - ')[1]}
              </button>
                    ))}
      </div>

          {/* Selected Office Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Info */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                {officeLocations[selectedOffice].name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon icon="mdi:map-marker" className="text-purple-400 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-400">{officeLocations[selectedOffice].address}</p>
                    </div>
                  </div>

                <div className="flex items-start gap-3">
                  <Icon icon="mdi:phone" className="text-purple-400 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">{officeLocations[selectedOffice].phone}</p>
                      </div>
                    </div>

                <div className="flex items-start gap-3">
                  <Icon icon="mdi:email" className="text-purple-400 mt-1" />
            <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">{officeLocations[selectedOffice].email}</p>
              </div>
            </div>

                <div className="flex items-start gap-3">
                  <Icon icon="mdi:account" className="text-purple-400 mt-1" />
            <div>
                    <p className="font-medium">Manager</p>
                    <p className="text-gray-400">{officeLocations[selectedOffice].manager}</p>
              </div>
                    </div>

                <div className="flex items-start gap-3">
                  <Icon icon="mdi:account-group" className="text-purple-400 mt-1" />
                      <div>
                    <p className="font-medium">Team Size</p>
                    <p className="text-gray-400">{officeLocations[selectedOffice].employees} Engineers</p>
                      </div>
                      </div>
                    </div>

              <div className="mt-6">
                <p className="font-medium mb-3">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                  {officeLocations[selectedOffice].specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {specialty}
                          </span>
                        ))}
          </div>
        </div>
      </div>

            {/* Map */}
            <div className="bg-gray-800/50 p-2 rounded-xl border border-gray-700/50">
              <iframe
                src={officeLocations[selectedOffice].mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
          </div>
                  </div>
                  </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your <span className="text-purple-400">Project</span></h2>
            <p className="text-gray-400">Tell us about your engineering needs</p>
              </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
              {/* Success Message */}
              {formStatus.submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon icon="mdi:check-circle" className="text-green-400 text-xl" />
                    <div>
                      <p className="text-green-400 font-semibold">Message sent successfully!</p>
                      <p className="text-green-300 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                      placeholder="Your full name"
                      />
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                      placeholder="your@email.com"
                    />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                      placeholder="Your company name"
                    />
                    </div>
                  </div>

                      <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                        <select
                    name="serviceType"
                    value={formData.serviceType}
                          onChange={handleChange}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                        >
                    <option value="">Select a service</option>
                    <option value="product-design">Product Design</option>
                          <option value="manufacturing">Manufacturing</option>
                    <option value="prototyping">Prototyping</option>
                    <option value="testing">Testing & Validation</option>
                    <option value="consulting">Software Consulting</option>
                          <option value="other">Other</option>
                        </select>
                </div>

                  <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                      placeholder="Brief description of your project"
                    />
                  </div>

                    <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    rows={5}
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white resize-none"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    ></textarea>
                </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {formStatus.submitting ? (
                        <>
                      <Icon icon="mdi:loading" className="animate-spin" />
                      Sending...
                        </>
                      ) : (
                        <>
                      <Icon icon="mdi:send" />
                      Send Message
                        </>
                      )}
                    </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our <span className="text-purple-400">Team</span></h2>
            <p className="text-gray-400">Connect with our expert engineers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Icon icon="mdi:email" />
                      <span>{member.email}</span>
                </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Icon icon="mdi:phone" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {specialty}
                      </span>
              ))}
            </div>
          </div>
        </div>
            ))}
      </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-900/20 border-t border-red-500/30">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Icon icon="mdi:alert-circle" className="text-red-500 text-3xl animate-pulse" />
              <div>
                <h3 className="text-xl font-bold">Emergency Support</h3>
                <p className="text-gray-300">24/7 critical system support</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+15559111MECH"
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <Icon icon="mdi:phone" />
                Emergency: +1 (555) 911-MECH
              </a>
              <a
                href="mailto:emergency@mechnovate.com"
                className="px-6 py-3 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500/10 transition-colors flex items-center gap-2"
              >
                <Icon icon="mdi:email" />
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
