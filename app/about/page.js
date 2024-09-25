'use client'
import React from 'react'
import { MapPin, Info, Users, Mail, Code } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Component from '../siginUp[[...rest]]/nav';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"





export default function AboutPage() {

  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <Component/>
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <h1 
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our Cadastral App
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { icon: MapPin, title: "Our Mission", content: "Our web-based cadastral app aims to revolutionize land management and property information access. We provide a user-friendly platform for viewing, analyzing, and managing cadastral data, making it easier for surveyors, government officials, and property owners to access critical land information." },
            { icon: Info, title: "Key Features", content: (
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Interactive cadastral maps</li>
                <li>Property boundary visualization</li>
                <li>Land parcel information lookup</li>
                <li>Integration with government databases</li>
                <li>User-friendly interface for all skill levels</li>
              </ul>
            ) },
            { icon: Users, title: "Who We Serve", content: (
              <>
                <p className="text-muted-foreground mb-2">Our app caters to a wide range of users, including:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Land surveyors and GIS professionals</li>
                  <li>Government agencies and urban planners</li>
                  <li>Real estate developers and agents</li>
                  <li>Property owners and potential buyers</li>
                  <li>Researchers and academics in land management</li>
                </ul>
              </>
            ) },
            { icon: Mail, title: "Contact Us", content: (
              <>
                <p className="text-muted-foreground mb-4">Have questions or need support? We're here to help! Reach out to our team for assistance with our cadastral app.</p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition-opacity">
                  Contact Support
                </Button>
              </>
            ) },
          ].map((item, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <item.icon className="h-6 w-6 text-blue-600" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {item.content}
              </CardContent>
            </div>
          ))}
        </div>

        <div
          className="mt-12 bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CardHeader>
            <CardTitle>Our Commitment to Accuracy</CardTitle>
            <CardDescription>Ensuring reliable cadastral data for all users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are committed to providing the most accurate and up-to-date cadastral information possible. Our team works tirelessly to ensure that our data is regularly updated and verified against official government records. We understand the critical nature of cadastral information in decision-making processes, and we strive to maintain the highest standards of data integrity and reliability.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Last data update: {new Date().toLocaleDateString()}
            </p>
          </CardFooter>
        </div>

        <div
          className="mt-12 bg-gradient-to-br from-blue-100 to-pink-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              Creators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              This cadastral app was designed and created by:
            </p>
            <ul className="mt-4 text-center text-blue-600 font-medium">
              <li>Ismail Muzammil</li>
              <li>Ibrahim Abdul Salam</li>
              <li>Abbass</li>
            </ul>
          </CardContent>
        </div>
      </div>
    </div>
  )
}