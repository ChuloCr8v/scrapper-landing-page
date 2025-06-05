import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Card } from "antd";
import React from "react";

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                Can you scrape Amazon without getting blocked?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes – we rotate proxies and mimic human behavior to avoid
                detection.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How often is data updated?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As often as hourly (for pricing) or weekly (for reviews).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do you handle CAPTCHAs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we automate solving CAPTCHAs so you don't have to.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
