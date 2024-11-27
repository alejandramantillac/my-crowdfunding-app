"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "../../a/components/ui/button";
import { Mail, Phone, Facebook, Twitter, DollarSign, TrendingUp, Users, Globe, Menu } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/explore');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">BrickBase</h1>
        </div>
        <div className="flex items-center space-x-4">
          <select
            className="w-24 text-sm bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
            <option value="hi">हिन्दी</option>
            <option value="ar">العربية</option>
            <option value="sw">Kiswahili</option>
          </select>
          <Button className="md:hidden" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Invest Globally, Grow Locally</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Access international real estate markets with just a few clicks</p>
          </div>
          
          <div className="space-y-4">
            <Button onClick={handleNavigation} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" /> Register with Email
            </Button>
            <Button onClick={handleNavigation} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" /> Register with Phone
            </Button>
            <div className="flex space-x-4">
              <Button onClick={handleNavigation} className="flex-1 bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                <Facebook className="mr-2 h-5 w-5" /> Facebook
              </Button>
              <Button onClick={handleNavigation} className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                <Twitter className="mr-2 h-5 w-5" /> Twitter
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <a onClick={handleNavigation} className="text-blue-600 hover:underline dark:text-blue-400 font-medium cursor-pointer">Already have an account? Log in</a>
          </div>
        </div>
      </main>
      
      <section className="bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 md:px-8">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Why Choose BrickBase?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 dark:bg-gray-700 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <DollarSign className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Low Minimum Investment</h4>
            <p className="text-gray-600 dark:text-gray-300">Start your global portfolio with as little as $100</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 dark:bg-gray-700 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <TrendingUp className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">High Potential Returns</h4>
            <p className="text-gray-600 dark:text-gray-300">Access lucrative real estate markets worldwide</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 dark:bg-gray-700 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <Users className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Community-Driven</h4>
            <p className="text-gray-600 dark:text-gray-300">Join a global network of savvy investors</p>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 mb-4">© 2024 BrickBase. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">Contact Us</a>
          </div>
          <div className="flex justify-center space-x-4">
            <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300" />
            <Twitter className="h-6 w-6 text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300" />
          </div>
        </div>
      </footer>
    </div>
  );
}