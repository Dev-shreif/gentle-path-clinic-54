
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  caption: string;
  date: string;
  event?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  language: string;
}

const PhotoGallery = ({ photos, language }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.caption}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{photo.caption}</h3>
                  {photo.event && (
                    <p className="text-sm text-primary font-medium mb-1">{photo.event}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{photo.date}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="relative">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{photo.caption}</h3>
                  {photo.event && (
                    <p className="text-primary font-medium mb-1">{photo.event}</p>
                  )}
                  <p className="text-muted-foreground">{photo.date}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default PhotoGallery;
