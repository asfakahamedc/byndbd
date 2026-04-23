"use client";

import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bynd-parchment flex items-center justify-center p-4 selection:bg-bynd-flame selection:text-white">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-black text-5xl tracking-tighter text-bynd-ink mb-4">
            Bynd BD <span className="text-bynd-flame font-light">CMS</span>
          </h1>
          <p className="text-bynd-ash text-[10px] uppercase tracking-[0.25em] font-bold">
            Administrative Access Portal
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-bynd-cream border-gradient-gold shadow-heavy rounded-panel p-10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {error && (
              <div className="p-4 text-[11px] text-bynd-flame-deep bg-bynd-flame-pale/10 border border-bynd-flame-pale/20 rounded-btn text-center font-bold uppercase tracking-widest">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-[10px] font-bold text-bynd-ash uppercase tracking-[0.2em] mb-3">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-bynd-mist" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  className="block w-full pl-12 pr-4 py-4 border-b-[1.5px] border-bynd-border bg-transparent text-bynd-ink placeholder-bynd-mist/50 text-sm transition-all focus:outline-none focus:border-bynd-flame"
                  placeholder="admin@byndbd.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-bynd-ash uppercase tracking-[0.2em] mb-3">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-bynd-mist" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                  className="block w-full pl-12 pr-4 py-4 border-b-[1.5px] border-bynd-border bg-transparent text-bynd-ink placeholder-bynd-mist/50 text-sm transition-all focus:outline-none focus:border-bynd-flame"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ember shadow-flame text-bynd-parchment py-5 rounded-btn font-heading font-black tracking-[0.2em] text-xs hover:bg-ember-hover transition-all duration-300 active:scale-[0.99] disabled:opacity-70 uppercase"
            >
              {loading ? "Authenticating..." : "Sign In Access →"}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-bynd-border text-center">
            <p className="text-[10px] text-bynd-ash font-bold uppercase tracking-widest">
              Secured Administrative Gateway
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
