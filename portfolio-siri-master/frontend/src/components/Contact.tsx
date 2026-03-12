import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden text-white">
      {/* Background animated orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Let's discuss how I can contribute to your team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:venukasirimanne1121@gmail.com"
              className="group glass-effect rounded-xl p-6 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg w-fit mb-3 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-cyan-300">Email</h3>
              <p className="text-gray-300 text-sm break-all">venukasirimanne1121@gmail.com</p>
            </a>

            <a
              href="tel:+94771292336"
              className="group glass-effect rounded-xl p-6 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg w-fit mb-3 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-cyan-300">Phone</h3>
              <p className="text-gray-300">+94 77 129 2336</p>
            </a>

            <div className="group glass-effect rounded-xl p-6 border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg w-fit mb-3">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-cyan-300">Location</h3>
              <p className="text-gray-300">Panagoda, Sri Lanka</p>
            </div>

            <a
              href="https://github.com/Siri200211"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect rounded-xl p-6 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg w-fit mb-3 group-hover:shadow-lg group-hover:shadow-slate-500/50 transition-all">
                <Github size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-cyan-300">GitHub</h3>
              <p className="text-gray-300">github.com/Siri200211</p>
            </a>
          </div>

          <div className="glass-effect rounded-2xl p-8 border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-white/30 transition-all backdrop-blur-sm text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-white/30 transition-all backdrop-blur-sm text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-white/30 transition-all backdrop-blur-sm text-white placeholder-gray-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-white/30 transition-all resize-none backdrop-blur-sm text-white placeholder-gray-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 glow-border"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Connect with me on social media</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Siri200211"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-effect rounded-full hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 glow-border"
              >
                <Github size={28} className="text-cyan-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/venuka-sirimanne21-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-effect rounded-full hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 glow-border"
              >
                <Linkedin size={28} className="text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
