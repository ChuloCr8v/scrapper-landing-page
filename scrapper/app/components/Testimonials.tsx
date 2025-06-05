import { CardContent } from "@/components/ui/card";
import { Card } from "antd";
import { Star } from "lucide-react";
import React from "react";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section
      id="testimonials"
      className="py-24 mt-24 bg-muted/50 bg-gradient-to-b from-green-600/20 to-transparent"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
          eCommerce Brands <br></br> We've Empowered
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-4">
                "We found 12% of our products were priced too high – fixed it in
                a day and saw a 22% sales bump."
              </blockquote>
              <cite className="text-muted-foreground">
                – Lisa T., Amazon FBA Seller
              </cite>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-4">
                "Caught a competitor dumping inventory at 40% below MAP. Sent a
                cease-and-desist the same day."
              </blockquote>
              <cite className="text-muted-foreground">– DTC Brand Owner</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
