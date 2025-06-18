
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    window.open(facebookUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
          <button
            onClick={handlePlay}
            className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300"
          >
            <Play className="h-8 w-8 text-primary ml-1" />
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <ExternalLink className="h-5 w-5 text-white" />
        </div>
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-primary font-medium">
          {language === "en" ? "Dr." : "د."} {doctor}
        </p>
        <p className="text-sm text-muted-foreground">{date}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
