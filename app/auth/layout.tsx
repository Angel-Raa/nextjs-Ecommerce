import type React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  const session = await auth();
  console.log({ session });
  if (session?.user) redirect("/");
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-gray-200 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100 to-transparent rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-gray-200 to-transparent rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-light text-gray-900 tracking-wide hidden sm:block">
                E-Commerce SDD
              </span>
            </Link>

            {/* Back to Home */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 lg:py-12">
        <div className="w-full max-w-md lg:max-w-lg">
          {/* Content Container */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-gray-200/50 to-transparent rounded-full blur-xl"></div>

            {/* Main Content */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-black/5 border border-white/50 p-1">
              <div className="bg-white rounded-3xl p-8 lg:p-10">{children}</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-gray-100">
            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Support
              </Link>
            </div>

            {/* Copyright */}
            <div className="mt-4 sm:mt-0 text-sm text-gray-500">
              <p>&copy; 2025 Angel Aguero. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-gray-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-3/4 right-12 w-1 h-1 bg-gray-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50 animate-pulse delay-500"></div>
    </div>
  );
}
