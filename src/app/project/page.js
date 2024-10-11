"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, DollarSign, Globe, MapPin } from 'lucide-react';
import { Button } from "../../../a/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../a/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../a/components/ui/tabs";
import { Input } from "../../../a/components/ui/input";

export default function ProjectDetail() {
  const router = useRouter();
  const [investment, setInvestment] = useState(0);
  const minReturn = 0.12; // 12% retorno mínimo
  const maxReturn = 0.15; // 15% retorno máximo

  // Calcula el retorno potencial
  const calculateReturn = (amount) => {
    const minPotentialReturn = amount * (1 + minReturn);
    const maxPotentialReturn = amount * (1 + maxReturn);
    return [minPotentialReturn.toFixed(2), maxPotentialReturn.toFixed(2)];
  };

  const [minPotentialReturn, maxPotentialReturn] = calculateReturn(investment);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={() => router.back()}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Eco-friendly Apartments</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Imagen del proyecto */}
        <div className="relative">
          <img
            alt="Project Image"
            className="w-full h-64 object-cover rounded-lg"
            height="256"
            src="https://via.placeholder.com/512x256.png?text=Eco-friendly+Apartments"
            style={{ aspectRatio: "512/256", objectFit: "cover" }}
            width="512"
          />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button variant="outline" size="icon" className="bg-white/80 dark:bg-gray-800/80">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/80 dark:bg-gray-800/80">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Detalles del proyecto */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>Nairobi, Kenya</span>
          </div>
          <Button variant="outline" size="sm">
            <Globe className="h-4 w-4 mr-2" /> View on Map
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This eco-friendly apartment complex features 200 units with solar panels, rainwater harvesting, and energy-efficient appliances. Located in a prime area of Nairobi, it offers modern living with a focus on sustainability.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Solar-powered common areas</li>
                  <li>Rainwater harvesting system</li>
                  <li>Energy-efficient appliances</li>
                  <li>Rooftop garden and community spaces</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Expected Return:</span>
                    <span className="font-bold">12-15% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investment Period:</span>
                    <span className="font-bold">36 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minimum Investment:</span>
                    <span className="font-bold">$500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Simulator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4" />
                    <Input
                      type="number"
                      placeholder="Enter investment amount"
                      onChange={(e) => setInvestment(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Potential Return:</span>
                    <span className="text-2xl font-bold">
                      ${minPotentialReturn} - ${maxPotentialReturn}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Legal Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Project Prospectus</span>
                    <Button variant="outline" size="sm">Download</Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Investment Agreement</span>
                    <Button variant="outline" size="sm">Download</Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Risk Disclosure</span>
                    <Button variant="outline" size="sm">Download</Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Funding Progress: 65%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push('/dashboard')}>
            Invest Now
          </Button>
        </div>
      </footer>
    </div>
  );
}