import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Card } from "antd";
import { TrendingUp } from "lucide-react";
import React from "react";

type Props = {};

const PriceCompareTable = (props: Props) => {
  return (
    <div className="relative">
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Price Comparison Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Your Product</span>
              <span className="text-green-600 font-bold">$54.99</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Competitor A</span>
              <span className="text-red-600 font-bold">$59.99</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <span className="font-medium">Competitor B</span>
              <span className="text-orange-600 font-bold">Out of Stock</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceCompareTable;
