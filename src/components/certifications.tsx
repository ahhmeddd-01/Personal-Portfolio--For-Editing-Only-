import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const certificationsData = [
  {
    title: "Delotte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "June 2025",
    description:
      "Completed a practical simulation analyzing business data using Excel and Power BI techniques.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/deloitte-cert.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "Tata - Gen AI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "June 2025",
    description:
      "Explored generative AI applications in data analytics through a hands-on corporate simulation.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/tata-genai-cert.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn",
    date: "May 2025",
    description:
      "Gained foundational understanding of data analytics workflows, tools, and use cases.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/simplilearn-analytics.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "Learning Microsoft Power BI",
    issuer: "Infosys Springboard",
    date: "June 2025",
    description:
      "Built dashboards and interactive reports using Power BI for visual data storytelling.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/powerbi-cert.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "Microsoft Excel for Data Analyst",
    issuer: "Infosys Springboard",
    date: "June 2025",
    description:
      "Learned advanced Excel features including pivot tables, lookups, and dynamic dashboards.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/excel-data-analyst.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "June 2025",
    description:
      "Covered core cloud concepts and AWS services including compute, storage, and databases.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/aws-cloud-cert.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    date: "May 2025",
    description:
      "Studied generative AI models and ethical implementation in real-world use cases.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/genai-microsoft-cert.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
  {
    title: "Python Programming",
    issuer: "Reliance Foundation",
    date: "May 2025",
    description:
      "Developed beginner-to-intermediate proficiency in Python syntax, logic, and applications.",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1680000000/python-cert.jpg",
    link: "https://www.linkedin.com/your-certificate-link",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated list of certifications that validate my knowledge and
            hands-on skills through practical and recognized learning paths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-1">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
                <Button size="sm" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
