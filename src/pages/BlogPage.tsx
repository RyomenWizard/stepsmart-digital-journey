
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts, BlogPost } from "@/data/blogData";
import { useToast } from "@/hooks/use-toast";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Filter posts based on search query and active tag
  const filteredPosts = blogPosts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    .filter((post) => {
      if (activeTab === "all") return true;
      return post.tags.some(
        (tag) => tag.toLowerCase() === activeTab.toLowerCase()
      );
    });

  // Extract unique tags from all posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags.map((tag) => tag)))
  );

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      toast({
        title: "Blog post submitted",
        description: "Your blog post has been submitted for review.",
      });
      setNewBlogTitle("");
      setNewBlogContent("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container py-8 px-4 md:px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:space-y-8 mb-8 md:mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading animate-in">
            StepSmart Blog
          </h1>
          <p className="text-lg text-muted-foreground mt-2 animate-in" style={{animationDelay: "0.1s"}}>
            Insights, tips, and stories to enhance your learning journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center animate-in" style={{animationDelay: "0.2s"}}>
          <div className="relative flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-5 h-5 my-auto text-muted-foreground left-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tags filter */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="animate-in"
          style={{animationDelay: "0.3s"}}
        >
          <TabsList className="mb-4 flex flex-wrap h-auto">
            <TabsTrigger value="all" className="mb-1">
              All Posts
            </TabsTrigger>
            {allTags.map((tag) => (
              <TabsTrigger key={tag} value={tag.toLowerCase()} className="mb-1">
                {tag}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 staggered-animate">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">
                  No posts found matching your search
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Admin Blog Upload Form (simulated) */}
      <div className="border-t border-border pt-8 mt-16 animate-in" style={{animationDelay: "0.4s"}}>
        <h2 className="text-2xl font-bold font-heading mb-6">
          Submit a New Blog Post
        </h2>
        <Card>
          <form onSubmit={handleBlogSubmit}>
            <CardHeader>
              <CardTitle>New Article</CardTitle>
              <CardDescription>
                Share your knowledge and insights with the StepSmart community.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Title
                </label>
                <Input
                  id="title"
                  placeholder="Enter the title of your blog post"
                  value={newBlogTitle}
                  onChange={(e) => setNewBlogTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="image"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cover Image
                </label>
                <Input id="image" type="file" accept="image/*" />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="content"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Write your blog content here..."
                  value={newBlogContent}
                  onChange={(e) => setNewBlogContent(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="tags"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tags (comma separated)
                </label>
                <Input id="tags" placeholder="Education, Learning, Technology" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Post"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-muted-foreground">
            {post.author.name}
          </span>
        </div>
        <CardTitle className="line-clamp-2">
          <Link to={`/blog/${post.id}`} className="hover:text-primary">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2 mb-4">
          {post.excerpt}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPage;
