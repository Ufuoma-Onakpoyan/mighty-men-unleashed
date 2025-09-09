import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Crown } from "lucide-react";
const ContactFooter = () => {
  return <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about the program or ready to apply? We're here to help guide you 
              on your journey to becoming a mighty scholar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle>WhatsApp Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3">Message us directly on WhatsApp</p>
                
                <p className="text-sm text-muted-foreground mt-4 mb-2">WhatsApp only - No calls</p>
                <p className="text-lg font-semibold">+234 912 124 5812</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3">Send us your questions</p>
                <p className="text-lg font-semibold">info@tmmscholars.com</p>
              </CardContent>
            </Card>

          </div>

          <div className="mt-16 text-center">
            <Card className="bg-secondary text-secondary-foreground max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Don't wait – your transformation journey begins with a single step. 
                  Apply now and join the community of mighty scholars.
                </p>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg rounded-full" onClick={() => window.open('https://tinyurl.com/tmmscholars', '_blank')}>
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Crown className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">TMMScholars2025</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transforming lives through faith-based education and empowerment. 
                Building a generation of mighty men and women for God's glory.
              </p>
              <div className="flex space-x-4 mt-6">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#mission" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Mission</a></li>
                <li><a href="#selection" className="text-primary-foreground/80 hover:text-accent transition-colors">Selection Process</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
                <li><button onClick={() => window.open('https://tinyurl.com/tmmscholars', '_blank')} className="text-primary-foreground/80 hover:text-accent transition-colors text-left">Apply Now</button></li>
              </ul>
            </div>

            {/* Program Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Program Information</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Full Educational Scholarships</li>
                <li>Spiritual & Academic Mentoring</li>
                <li>Leadership Development</li>
                <li>Entrepreneurial Training</li>
                <li>Life Skills Coaching</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              &copy; 2025 The Mighty Men Scholars Program (TMMScholars2025). All rights reserved.
            </p>
            <p className="text-primary-foreground/60 mt-2">
              Built with faith, hope, and love for the next generation.
            </p>
          </div>
        </div>
      </footer>
    </>;
};
export default ContactFooter;