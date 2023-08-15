"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dwayne",
    avatar: "J",
    title: "Software Engineer",
    description: "As a developer, I'm constantly amazed by the capabilities of this AI tool. It has drastically reduced our development time and improved the quality of our code.",
  },
  {
    name: "Steve",
    avatar: "A",
    title: "Data Analyst",
    description: "Using the best AI tool has completely transformed the way we analyze data. It's like having an entire data science team at our fingertips!",
  },
  {
    name: "Mark",
    avatar: "P",
    title: "Marketing Manager",
    description: "In my role as a marketing manager, the insights provided by this AI tool have been invaluable. It has allowed us to target our campaigns more effectively and achieve impressive ROI.",
  },
  {
    name: "David",
    avatar: "M",
    title: "Content Creator",
    description: "As a content creator, the AI tool has been a game changer. It helps me generate ideas, proofreads content, and suggests improvements, making my work more engaging.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}