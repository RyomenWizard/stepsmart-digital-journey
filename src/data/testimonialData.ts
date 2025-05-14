
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophia Martinez",
    role: "Frontend Developer",
    company: "TechGrowth Inc.",
    avatar: "https://i.pravatar.cc/150?img=20",
    quote: "Working with my StepSmart mentor transformed my career trajectory. Within six months, I gained the confidence and skills to secure a senior developer position that I previously thought was years away.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Wilson",
    role: "MBA Student",
    company: "Global Business School",
    avatar: "https://i.pravatar.cc/150?img=21",
    quote: "The structured guidance and accountability I got from my mentor helped me balance my MBA studies with personal projects. The learning strategies we developed together improved my academic performance dramatically.",
    rating: 5,
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "UX Designer",
    company: "Creative Design Co.",
    avatar: "https://i.pravatar.cc/150?img=22",
    quote: "My mentor didn't just help me improve my design skills, but also navigated me through corporate politics and helped me position myself for leadership. This holistic approach to mentorship is what sets StepSmart apart.",
    rating: 4,
  },
  {
    id: "4",
    name: "Michael Chen",
    role: "Data Analyst",
    company: "Insight Analytics",
    avatar: "https://i.pravatar.cc/150?img=23",
    quote: "I was struggling to transition from academia to industry. My StepSmart mentor helped me translate my research experience into marketable skills, resulting in multiple job offers within weeks of our collaboration.",
    rating: 5,
  },
];
