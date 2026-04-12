import { Gamepad2 } from 'lucide-react';
import logo from '../assets/trbg.png';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';

interface SignInPageProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export function SignInPage({ onSignIn, onSignUp }: SignInPageProps) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Decorative background elements - gaming themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-20 h-20 border-2 border-purple-900/30 rounded-full"></div>
        <div className="absolute top-32 left-10 w-16 h-16 border-2 border-purple-900/30 rounded-full"></div>
        <div className="absolute top-40 right-40 opacity-20">
          <Gamepad2 className="w-12 h-12 text-purple-600" />
        </div>
        <div className="absolute top-10 left-40 opacity-20">
          <Gamepad2 className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <Gamepad2 className="w-14 h-14 text-purple-600" />
        </div>
        <div className="absolute bottom-20 right-60 w-24 h-24 border-2 border-purple-900/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-purple-900/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border-2 border-pink-900/20 rounded-full"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <img src={logo} alt="Tour Arcade" className="h-12" />
        <div className="text-4xl">Sign In</div>
      </header>

      {/* Sign In Card */}
      <div className="relative z-10 flex items-center justify-center px-8 py-12">
        <div className="bg-white text-black rounded-3xl p-12 w-full max-w-xl">
          <h1 className="text-5xl mb-8">Sign In</h1>
          
          {/* Form */}
          <div className="space-y-6">
            {/* Email/Username */}
            <Input
              type="text"
              placeholder="Email address/ Username"
              className="w-full bg-gray-200 border-0 rounded-lg px-6 py-6 text-gray-600 placeholder:text-gray-500"
            />

            {/* Password */}
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-200 border-0 rounded-lg px-6 py-6 text-gray-600 placeholder:text-gray-500"
              />
              <div className="text-right">
                <button className="text-pink-600 hover:text-pink-700 transition-colors">
                  Forgot Password?
                </button>
              </div>
            </div>

            {/* Sign In button */}
            <button 
              onClick={onSignIn}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-lg hover:opacity-90 transition-opacity text-xl text-center"
            >
              Sign In
            </button>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-gray-400" 
              />
              <label htmlFor="remember" className="text-gray-700">
                Remember me
              </label>
            </div>

            {/* Sign up link */}
            <p className="text-center text-gray-700">
              New to TourArcade?{' '}
              <button 
                onClick={onSignUp}
                className="hover:underline"
              >
                Sign up now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}