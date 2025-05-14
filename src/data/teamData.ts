
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jennifer Walsh",
    role: "Founder & CEO",
    bio: "Jennifer founded StepSmart with a vision to democratize access to mentorship and quality education. With a background in both education and technology, she bridges the gap between traditional learning and innovative approaches.",
    avatar: "https://i.pravatar.cc/300?img=10",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "2",
    name: "David Kim",
    role: "Chief Technology Officer",
    bio: "David oversees all technological aspects of StepSmart. His expertise in educational technology has been instrumental in developing our platform's innovative features that connect mentors and learners seamlessly.",
    avatar: "https://i.pravatar.cc/300?img=11",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    role: "Head of Mentor Relations",
    bio: "Maria brings over a decade of experience in professional development and coaching. She is passionate about curating our network of exceptional mentors and ensuring high-quality mentorship experiences.",
    avatar: "https://i.pravatar.cc/300?img=12",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "4",
    name: "Alex Thompson",
    role: "Content & Curriculum Director",
    bio: "Alex leads our educational content strategy with a focus on creating engaging, effective learning materials. His background in instructional design helps ensure our resources meet the highest pedagogical standards.",
    avatar: "https://i.pravatar.cc/300?img=13",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
];
