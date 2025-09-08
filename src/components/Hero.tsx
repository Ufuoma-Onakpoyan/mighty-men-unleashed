import { Button } from "./ui/button";
import { Crown, Users, Award } from "lucide-react";
const Hero = () => {
  return <section id="hero" className="relative min-h-screen hero-bg flex items-center justify-center text-center px-4 pt-16">
      {/* Logo/Brand Section */}
      <div className="max-w-6xl mx-auto animate-fade-in-up">
        <div className="flex items-center justify-center mb-8">
          <img src="/lovable-uploads/4933243a-2089-47db-9bf5-8bfcd6bff00a.png" alt="The Mighty Men Scholars Program Logo" className="h-32 w-auto mb-6" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-glow">
          THE MIGHTY MEN
          
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Transforming underprivileged yet academically sound young individuals into 
          <span className="text-accent font-semibold"> spiritually vibrant</span> and 
          <span className="text-accent font-semibold"> economically influential</span> citizens.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold rounded-full">
            Apply Now
            <Award className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full">
            Learn More
            <Users className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scripture Foundation */}
        <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-primary/10">
          <Crown className="h-8 w-8 text-accent mx-auto mb-4" />
          <blockquote className="text-lg text-foreground/70 italic">
            "And everyone that was in distress, and everyone that was in debt, and everyone that was discontented, 
            gathered themselves unto him; and he became a captain over them..."
          </blockquote>
          <cite className="text-accent font-semibold mt-2 block">— 1 Samuel 22:1-2</cite>
        </div>
      </div>
    </section>;
};
export default Hero;