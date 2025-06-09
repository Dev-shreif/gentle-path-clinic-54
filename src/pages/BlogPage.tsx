import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { motion, useMousePosition } from "framer-motion";
import { useState, useRef } from "react";

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const featuredRef = useRef<HTMLDivElement>(null);

  const articles = [
    {
      id: 1,
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt: "Learn to recognize the signs of anxiety and discover evidence-based techniques to manage symptoms effectively in your daily life.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Anxiety",
      featured: true,
      size: "large",
      quote: "Anxiety is not a weakness, it's a signal that you care deeply about something."
    },
    {
      id: 2,
      title: "The Science of Sleep: How Quality Rest Impacts Mental Health",
      excerpt: "Explore the crucial connection between sleep patterns and mental wellness, plus practical tips for improving your sleep hygiene.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Wellness",
      featured: false,
      size: "medium"
    },
    {
      id: 3,
      title: "Building Resilience: Strengthening Your Mental Health Foundation",
      excerpt: "Discover practical strategies for developing emotional resilience and bouncing back from life's challenges with greater strength.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Emily Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Mental Health",
      featured: false
    },
    {
      id: 4,
      title: "Mindfulness in Daily Life: Simple Practices for Better Mental Health",
      excerpt: "Learn how to incorporate mindfulness techniques into your routine to reduce stress and improve overall well-being.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. James Thompson",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Mindfulness",
      featured: false
    },
    {
      id: 5,
      title: "Breaking the Stigma: Talking About Mental Health Openly",
      excerpt: "How to have meaningful conversations about mental health and create supportive environments in your community.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Lisa Park",
      date: "March 5, 2024",
      readTime: "8 min read",
      category: "Mental Health",
      featured: false
    },
    {
      id: 6,
      title: "Healthy Relationships: Communication Skills for Better Connections",
      excerpt: "Essential communication techniques that can transform your relationships and improve your emotional well-being.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. David Wilson",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Relationships",
      featured: false
    }
  ];

  const tags = ["all", "anxiety", "therapy", "trauma", "wellness", "mindfulness", "relationships"];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getGridSize = (size: string, index: number) => {
    switch (size) {
      case "large": return "md:col-span-2 md:row-span-2";
      case "wide": return "md:col-span-2";
      case "tall": return "md:row-span-2";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Mental Health{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Insights & Articles
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Expert insights, practical tips, and evidence-based guidance to support 
            your mental health journey.
          </p>
        </motion.div>

        {/* Animated Tags Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tags.map((tag, index) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                selectedTag === tag 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-muted hover:bg-muted/80 border border-border/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {tag === "all" ? "All Topics" : tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article with Mouse Parallax */}
        {featuredArticle && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-medium mb-8 text-center">Featured Article</h2>
            <motion.div
              ref={featuredRef}
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-border/50 shadow-2xl bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-0">
                  <motion.div 
                    className="relative h-64 lg:h-auto overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="gradient-calm text-white shadow-lg">Featured</Badge>
                    </div>
                    
                    {/* Floating Quote */}
                    <motion.div
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <p className="text-sm italic text-gray-700">"{featuredArticle.quote}"</p>
                    </motion.div>
                  </motion.div>
                  
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Badge variant="secondary" className="mb-4">
                        {featuredArticle.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-balance">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-between mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="gradient-calm hover:opacity-90 w-fit text-slate-950">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Magazine Grid Layout */}
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className={`${getGridSize(article.size, index)}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-32 overflow-hidden">
                  <motion.img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <CardContent className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <span>{article.date}</span>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button size="sm" variant="outline" className="w-full border-primary/20 hover:bg-primary/5 text-xs">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-light mb-4">
                  Stay Updated with Mental Health Insights
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest articles, tips, and mental health resources 
                  delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <motion.input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-2 rounded-lg border border-border/50 flex-1 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background/80"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="gradient-calm hover:opacity-90 text-gray-950">
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
