
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, ExternalLink } from "lucide-react";

interface VideoPlayerProps {
  id: string;
  title: string;
  doctor: string;
  date: string;
  description: string;
  facebookUrl: string;
  thumbnail: string;
  language: string;
}

const VideoPlayer = ({ 
  title, 
  doctor, 
  date, 
  description, 
  facebookUrl, 
  thumbnail,
  language 
}: VideoPlayerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract video ID from Facebook URL for embedding
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/videos\/(\d+)/);
    if (videoIdMatch) {
      return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(url)}&show_text=false&width=560&t=0`;
    }
    return url;
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <div className="relative">
              <img 
                src={thumbnail} 
                alt={title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <div className="bg-white/95 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="h-10 w-10 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 rounded-full p-2">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <div className="aspect-video w-full">
              <iframe
                src={getEmbedUrl(facebookUrl)}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-lg text-primary font-medium mb-2">
                {language === "en" ? "Dr." : "د."} {doctor}
              </p>
              <p className="text-muted-foreground mb-3">{date}</p>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </DialogContent>
        </Dialog>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-sm text-primary font-medium">
            {language === "en" ? "Dr." : "د."} {doctor}
          </p>
          <p className="text-sm text-muted-foreground">{date}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoPlayer;
