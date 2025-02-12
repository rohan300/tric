import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Student Dashboard",
    description:
      "View of everything you need for different classes, including calendar, class details, grade management and AI suggestions.",
    image: "/Dashboard.png", 
  },
  {
    title: "Note Taking",
    description:
      "One button scans the Note doc, and turns the information you’ve written into study modes. User can pick if its automatic, or manual input is needed.",
    image: "/notes.png", 
  },
  {
    title: "Modular Design",
    description: "Customizable learning styles that fit to individual needs.",
    image: "/modular.png", 
  }
];

export default function FeaturesCarousel() {
  return (
    <div className="py-12 px-6 font-sans h-screen flex flex-col">
      <h2 className="text-[7vh] font-semibold text-[#494F62] mb-8 text-center">
        Explore our <span className="text-[#20B486]">features</span>
      </h2>
      <div className="w-full h-[80vh] flex items-center justify-center">
        <Carousel className="w-full max-w-7xl">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-row items-center justify-center gap-16">
                  <div className="text-left max-w-md">
                    <h3 className="text-5xl font-semibold text-[#494F62] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#6D737A] font-normal text-2xl">
                      {feature.description}
                    </p>
                  </div>
                  <Card className="shadow-lg rounded-xl overflow-hidden w-[40rem] h-auto">
                    <CardContent className="p-6 flex justify-center">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-md w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ChevronLeft size={32} />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <ChevronRight size={32} />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
