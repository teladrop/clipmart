import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Upload, Youtube, Instagram, Music, Video, Camera, Gamepad2, Utensils, Dumbbell, Briefcase } from "lucide-react"

export default function CreatorOnboardingPage() {
  const categories = [
    { name: "Entertainment", icon: Video, color: "bg-purple-100 text-purple-600" },
    { name: "Education", icon: Briefcase, color: "bg-blue-100 text-blue-600" },
    { name: "Gaming", icon: Gamepad2, color: "bg-green-100 text-green-600" },
    { name: "Lifestyle", icon: Camera, color: "bg-pink-100 text-pink-600" },
    { name: "Food", icon: Utensils, color: "bg-orange-100 text-orange-600" },
    { name: "Fitness", icon: Dumbbell, color: "bg-red-100 text-red-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Video className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Welcome to ClipMart!</h1>
          <p className="text-gray-600">Let's set up your creator profile</p>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Upload a profile picture to personalize your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <Button className="bg-orange-500 hover:bg-orange-600 mb-2">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-sm text-gray-500">JPG, PNG up to 5MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media Accounts</CardTitle>
              <CardDescription>Connect your social media accounts to showcase your reach</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="youtube" className="flex items-center space-x-2">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>YouTube Channel</span>
                </Label>
                <Input id="youtube" placeholder="https://youtube.com/@yourchannel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok" className="flex items-center space-x-2">
                  <Music className="w-4 h-4 text-black" />
                  <span>TikTok Profile</span>
                </Label>
                <Input id="tiktok" placeholder="https://tiktok.com/@yourusername" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram" className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram Profile</span>
                </Label>
                <Input id="instagram" placeholder="https://instagram.com/yourusername" />
              </div>
            </CardContent>
          </Card>

          {/* Content Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Content Categories</CardTitle>
              <CardDescription>Select the categories that best describe your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-left"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${category.color}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{category.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Selected categories:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-100 text-orange-600">Entertainment</Badge>
                  <Badge className="bg-orange-100 text-orange-600">Education</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">
              Skip for Now
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 flex-1">Complete Setup</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
