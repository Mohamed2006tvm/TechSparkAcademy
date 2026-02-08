import React from 'react'
import google from '../assets/google icon.png'
import logo from '../assets/Logo.jpeg'
import { MoveRight, Shield, Copyright } from 'lucide-react'
import { supabase } from '../database/supabase'

const LoginPage = () => {

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/'
      }
    })

    if (error) {
      alert('Error logging in')
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl border border-gray-200 shadow-lg">

        {/* Content */}
        <div className="flex flex-col items-center px-6 py-8 text-center gap-3">

          <img src={logo} className="w-[55px] h-[50px] rounded-lg mb-2" />

          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back
          </h1>

          <p className="text-sm text-gray-500">
            Enter your credentials to access your account
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="mt-6 w-full flex items-center justify-between gap-3 rounded-lg
                       border border-gray-300 bg-white px-4 py-3
                       text-gray-800 font-medium
                       hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-2">
              <img src={google} className="w-5" />
              <span>Continue with Google</span>
            </div>
            <MoveRight className="text-gray-500" />
          </button>

          {/* Security text */}
          <span className="mt-4 flex items-center gap-1 text-xs text-gray-500">
            <Shield size={14} />
            Secure authentication powered by Supabase
          </span>

          {/* Terms */}
          <span className="mt-4 text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </span>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 py-4">
          <span className="flex items-center justify-center gap-1 text-xs text-gray-400">
            <Copyright size={14} />
            2026 TechSpark Academy. All rights reserved
          </span>
        </div>

      </div>
    </div>
  )
}

export default LoginPage
