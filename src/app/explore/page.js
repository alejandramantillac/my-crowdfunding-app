"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, MapPin, BarChart2, Star } from 'lucide-react';
import { Button } from "../../../a/components/ui/button";
import { Input } from "../../../a/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../../a/components/ui/card";

export default function Explore() {
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleProjectClick = (projectTitle) => {
    router.push(`/project?title=${encodeURIComponent(projectTitle)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Explore Projects</h1>
        <Button variant="outline" className="flex items-center space-x-2" onClick={toggleFilters}>
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </Button>
      </header>

      <div className="p-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <div className="flex w-full md:w-1/2">
          <Input
            className="flex-grow p-3 rounded-l-md border border-gray-300 dark:border-gray-700"
            placeholder="Search projects..."
          />
          <Button variant="outline" className="rounded-r-md">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2 md:w-1/3">
              <label className="text-gray-700 dark:text-gray-300">Countries</label>
              <div className="flex flex-col space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Kenya
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  India
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Brazil
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/3">
              <label className="text-gray-700 dark:text-gray-300">Types</label>
              <div className="flex flex-col space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Residential
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Commercial
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Industrial
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/3">
              <label className="text-gray-700 dark:text-gray-300">Expected Return</label>
              <div className="flex flex-col space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  High (&gt;15%)
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Medium (10-15%)
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Low (&lt;10%)
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Eco-friendly Apartments", location: "Nairobi, Kenya", return: "12-15%", rating: 4.5 },
          { title: "Tech Hub Complex", location: "Bangalore, India", return: "18-20%", rating: 4.8 },
          { title: "Sustainable Housing", location: "São Paulo, Brazil", return: "10-12%", rating: 4.2 },
        ].map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-transform transform hover:scale-105" onClick={() => handleProjectClick(project.title)}>
            <CardHeader className="p-4 bg-white dark:bg-gray-800 rounded-t-md">
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 bg-blue-50 dark:bg-gray-700">
              <img
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-3"
                src={`https://via.placeholder.com/320x160?text=${project.title.split(" ").join("+")}`}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {project.location}
                </span>
                <span>Return: {project.return}</span>
              </div>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span>{project.rating}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-4">
        <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Load More Projects
        </Button>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md mt-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Investment Statistics</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <BarChart2 className="h-10 w-10 text-blue-600" />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">150</span>
            <span className="text-gray-600 dark:text-gray-400">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart2 className="h-10 w-10 text-green-600" />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">12%</span>
            <span className="text-gray-600 dark:text-gray-400">Avg. Return</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart2 className="h-10 w-10 text-red-600" />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">5</span>
            <span className="text-gray-600 dark:text-gray-400">Countries</span>
          </div>
        </div>
      </div>
    </div>
  );
}