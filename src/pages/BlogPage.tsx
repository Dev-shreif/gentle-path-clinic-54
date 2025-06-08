import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
const BlogPage = () => {
  const articles = [{
    id: 1,
    title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
    excerpt: "Learn to recognize the signs of anxiety and discover evidence-based techniques to manage symptoms effectively in your daily life.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Anxiety",
    featured: true
  }, {
    id: 2,
    title: "The Science of Sleep: How Quality Rest Impacts Mental Health",
    excerpt: "Explore the crucial connection between sleep patterns and mental wellness, plus practical tips for improving your sleep hygiene.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Michael Rodriguez",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Wellness",
    featured: false
  }, {
    id: 3,
    title: "Building Resilience: Strengthening Your Mental Health Foundation",
    excerpt: "Discover practical strategies for developing emotional resilience and bouncing back from life's challenges with greater strength.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Emily Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Mental Health",
    featured: false
  }, {
    id: 4,
    title: "Mindfulness in Daily Life: Simple Practices for Better Mental Health",
    excerpt: "Learn how to incorporate mindfulness techniques into your routine to reduce stress and improve overall well-being.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. James Thompson",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Mindfulness",
    featured: false
  }, {
    id: 5,
    title: "Breaking the Stigma: Talking About Mental Health Openly",
    excerpt: "How to have meaningful conversations about mental health and create supportive environments in your community.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Lisa Park",
    date: "March 5, 2024",
    readTime: "8 min read",
    category: "Mental Health",
    featured: false
  }, {
    id: 6,
    title: "Healthy Relationships: Communication Skills for Better Connections",
    excerpt: "Essential communication techniques that can transform your relationships and improve your emotional well-being.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. David Wilson",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Relationships",
    featured: false
  }];
  const categories = ["All", "Mental Health", "Anxiety", "Wellness", "Mindfulness", "Relationships"];
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => <Button key={category} variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
              {category}
            </Button>)}
        </div>

        {/* Featured Article */}
        {featuredArticle && <div className="mb-16">
            <h2 className="text-2xl font-medium mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden border-border/50 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="gradient-calm text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-3">
                      {featuredArticle.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-balance">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
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
                  </div>
                  
                  <Button className="gradient-calm hover:opacity-90 w-fit text-slate-950">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => <Card key={article.id} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border/50 overflow-hidden" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="relative overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors text-balance">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Stay Updated with Mental Health Insights
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest articles, tips, and mental health resources 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg border border-border/50 flex-1 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <Button className="gradient-calm hover:opacity-90 text-gray-950">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default BlogPage;