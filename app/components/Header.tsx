'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-12">
            <Link href="/" className="flex items-center space-x-0">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/assets/logo1.png" 
                  alt="Finpedia Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">Finpedia</span>
                <span className="text-xs font-medium text-cyan-500 -mt-1">tutorials</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
            >
              <span className="group-hover:scale-105 inline-block transition-transform">Home</span>
            </Link>
            <Link 
              href="/topics" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
            >
              <span className="group-hover:scale-105 inline-block transition-transform">Topics</span>
            </Link>
            <Link 
              href="/qa" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
            >
              <span className="group-hover:scale-105 inline-block transition-transform">Q&A</span>
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
            >
              <span className="group-hover:scale-105 inline-block transition-transform">Resources</span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
            >
              <span className="group-hover:scale-105 inline-block transition-transform">About</span>
            </Link>
          </nav>


          {/* Right Side - Search and Action Buttons */}
          <div className="flex-1 flex items-center justify-end space-x-6">
            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-lg">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search topics, questions..."
                  className="block w-full h-12 pl-12 pr-20 border border-gray-200 rounded-l-lg border-r-0 leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white text-sm transition-all duration-200 hover:bg-white hover:shadow-sm"
                />
                <button className="absolute inset-y-0 right-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-r-lg border border-l-0 border-blue-500 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-200">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/premium" 
              className="flex items-center space-x-2 text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 group"
            >
              <svg className="h-4 w-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Get Premium</span>
            </Link>
            
            <Link 
              href="/certificate" 
              className="flex items-center space-x-2 text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 group"
            >
              <svg className="h-4 w-4 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>Get Certificate</span>
            </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src="/assets/logo1.png" 
                      alt="Finpedia Logo" 
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 leading-tight">Finpedia</span>
                    <span className="text-xs font-medium text-cyan-500 -mt-1">tutorials</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Mobile Search */}
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search topics, questions..."
                    className="block w-full h-12 pl-12 pr-20 border border-gray-200 rounded-l-lg border-r-0 leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white text-sm"
                  />
                  <button className="absolute inset-y-0 right-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-r-lg border border-l-0 border-blue-500 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-200">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Mobile Navigation Links */}
                <div className="space-y-2 mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h3>
                  <Link 
                    href="/" 
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                  <Link 
                    href="/topics" 
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Topics
                  </Link>
                  <Link 
                    href="/qa" 
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Q&A
                  </Link>
                  <Link 
                    href="/resources" 
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Resources
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About
                  </Link>
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
                  <Link 
                    href="/premium" 
                    className="flex items-center justify-center space-x-3 text-white bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>Get Premium</span>
                  </Link>
                  
                  <Link 
                    href="/certificate" 
                    className="flex items-center justify-center space-x-3 text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:scale-105 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Get Certificate</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
