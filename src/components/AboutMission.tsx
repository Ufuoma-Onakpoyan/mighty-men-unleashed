import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Target, Eye, Heart, BookOpen } from "lucide-react";

const AboutMission = () => {
  const scriptureAnchors = [
    {
      verse: "Colossians 3:23",
      text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
    },
    {
      verse: "Psalm 127:1", 
      text: "Except the Lord build the house, they labour in vain that build it..."
    },
    {
      verse: "Isaiah 40:31",
      text: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles..."
    },
    {
      verse: "Matthew 5:14",
      text: "You are the light of the world. A city set on a hill cannot be hidden."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Vision & Mission */}
        <div id="mission" className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Eye className="mr-3 h-6 w-6 text-accent" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To raise a generation of mighty men and women who are spiritually vibrant, 
                academically sound, and economically empowered to make lasting impact in 
                their spheres of influence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 h-6 w-6 text-accent" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provide full educational scholarships to financially incapable youths, especially orphans
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mentor scholars into spiritually committed, morally upright individuals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Equip beneficiaries with entrepreneurial and leadership skills
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build a global network of transformational leaders
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Scripture Anchors */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Scriptural Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every aspect of our program is anchored in God's Word, ensuring spiritual growth 
            alongside academic and economic empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scriptureAnchors.map((scripture, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="mr-2 h-5 w-5 text-accent" />
                  {scripture.verse}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{scripture.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Introduction */}
        <Card className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl">
              <Heart className="mr-3 h-7 w-7 text-accent" />
              The Story Behind Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed mb-4">
              Inspired by <strong>1 Samuel 22:1-2</strong>, our program mirrors the story of David's men 
              who were distressed, indebted, and discontented but were transformed into mighty warriors.
            </p>
            <p className="text-lg leading-relaxed">
              In the same way, we believe these young scholars—though limited by background—can be 
              molded into leaders of great impact, becoming spiritually vibrant and economically 
              influential citizens who serve God and humanity.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutMission;