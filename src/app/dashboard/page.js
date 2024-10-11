"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Bell, DollarSign, TrendingUp, Globe } from 'lucide-react';
import { Button } from "../../../a/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../a/components/ui/card";
import { Select } from "../../../a/components/ui/select";

export default function Dashboard() {
  const router = useRouter();

  const handleViewDetailsClick = (project) => {
    router.push(`/project?title=${encodeURIComponent(project)}`);
  };

  const handleCardClick = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6 text-gray-900 dark:text-white" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-xl rounded-lg bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Total Invested</CardTitle>
                <DollarSign className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white">$24,500</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="shadow-xl rounded-lg bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Portfolio Performance</CardTitle>
                <TrendingUp className="h-5 w-5 text-green-500 dark:text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white">+12.5%</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Annual return</p>
              </CardContent>
            </Card>
            <Card className="shadow-xl rounded-lg bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Active Projects</CardTitle>
                <Globe className="h-5 w-5 text-purple-500 dark:text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white">7</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Across 4 countries</p>
              </CardContent>
            </Card>
          </div>
          <Card className="shadow-xl rounded-lg bg-white dark:bg-gray-800" onClick={handleCardClick}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Investment Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Eco-friendly Apartments in Nairobi', 'Tech Hub in Bangalore', 'Beachfront Villas in Bali'].map((project) => (
                  <div key={project} className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-white">{project}</span>
                    <Button size="sm" className="text-black" onClick={() => handleViewDetailsClick(project)}>View Details</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}