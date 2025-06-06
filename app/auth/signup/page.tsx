"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Video, Mail, Users, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<"creator" | "vendor">("creator")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-black">ClipMart</span>
          </div>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>Choose your role and get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Role Selection */}
          <div className="space-y-3">
            <Label>Select your role</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedRole("creator")}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  selectedRole === "creator"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Creator</span>
                </div>
                <p className="text-sm text-gray-600">Create and monetize content</p>
                <Badge className="mt-2 bg-orange-100 text-orange-500">$2 lifetime</Badge>
              </button>
              <button
                onClick={() => setSelectedRole("vendor")}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  selectedRole === "vendor" ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <ShoppingCart className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Vendor</span>
                </div>
                <p className="text-sm text-gray-600">Run brand campaigns</p>
                <Badge className="mt-2 bg-orange-100 text-orange-500">$10 lifetime</Badge>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Create Account</Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            Continue with Google
          </Button>
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/auth/signin" className="text-orange-500 hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
