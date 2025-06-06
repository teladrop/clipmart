"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Target, DollarSign, Users, Globe } from "lucide-react"
import { useState } from "react"

export default function CreateCampaignPage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const platforms = ["YouTube", "TikTok", "Instagram", "Twitter", "LinkedIn"]
  const categories = ["Technology", "Fashion", "Fitness", "Food", "Gaming", "Lifestyle", "Education", "Entertainment"]

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-black">Create New Campaign</h1>
        <p className="text-gray-600">Set up your campaign to reach the right creators</p>
      </div>

      {/* Campaign Basic Info */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Details</CardTitle>
          <CardDescription>Basic information about your campaign</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Campaign Title</Label>
            <Input id="title" placeholder="e.g., Fitness App Launch Campaign" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Campaign Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your campaign goals, target audience, and what you're looking for from creators..."
              rows={4}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand/Company Name</Label>
              <Input id="brand" placeholder="Your brand name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website (optional)</Label>
              <Input id="website" placeholder="https://yourbrand.com" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Assets */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Assets</CardTitle>
          <CardDescription>Upload your brand assets and sample content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Brand Logo</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Upload your logo</p>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Sample Video/Banner</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Upload sample content</p>
                <p className="text-xs text-gray-500">MP4, PNG, JPG up to 50MB</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Target Platforms */}
      <Card>
        <CardHeader>
          <CardTitle>Target Platforms</CardTitle>
          <CardDescription>Select which platforms you want to target</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => togglePlatform(platform)}
                className={`p-3 border-2 rounded-lg text-center transition-colors ${
                  selectedPlatforms.includes(platform)
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Globe className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm font-medium">{platform}</span>
              </button>
            ))}
          </div>
          {selectedPlatforms.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Selected platforms:</p>
              <div className="flex flex-wrap gap-2">
                {selectedPlatforms.map((platform) => (
                  <Badge key={platform} className="bg-orange-100 text-orange-600">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Target Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Content Categories</CardTitle>
          <CardDescription>Select content categories that align with your brand</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`p-3 border-2 rounded-lg text-center transition-colors ${
                  selectedCategories.includes(category)
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Target className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm font-medium">{category}</span>
              </button>
            ))}
          </div>
          {selectedCategories.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Selected categories:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((category) => (
                  <Badge key={category} className="bg-orange-100 text-orange-600">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Budget & Pricing */}
      <Card>
        <CardHeader>
          <CardTitle>Budget & Pricing</CardTitle>
          <CardDescription>Set your campaign budget and payout structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="payPerView">Pay Per View ($)</Label>
              <Input id="payPerView" type="number" step="0.01" placeholder="0.05" />
              <p className="text-xs text-gray-500">Amount paid per view</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalBudget">Total Budget ($)</Label>
              <Input id="totalBudget" type="number" placeholder="5000" />
              <p className="text-xs text-gray-500">Maximum campaign spend</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Campaign Duration</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="2weeks">2 Weeks</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-orange-600">Budget Estimate</span>
            </div>
            <p className="text-sm text-gray-600">
              With $0.05 per view and a $5,000 budget, you can reach up to 100,000 views
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Requirements</CardTitle>
          <CardDescription>Specify what you expect from creators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="requirements">Content Requirements</Label>
            <Textarea
              id="requirements"
              placeholder="Describe what type of content you want creators to produce, any specific messaging, hashtags, or call-to-actions..."
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minFollowers">Minimum Followers</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select minimum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">1,000+</SelectItem>
                  <SelectItem value="5000">5,000+</SelectItem>
                  <SelectItem value="10000">10,000+</SelectItem>
                  <SelectItem value="50000">50,000+</SelectItem>
                  <SelectItem value="100000">100,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Application Deadline</Label>
              <Input id="deadline" type="date" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1">
          Save as Draft
        </Button>
        <Button className="bg-orange-500 hover:bg-orange-600 flex-1">
          <Users className="w-4 h-4 mr-2" />
          Launch Campaign
        </Button>
      </div>
    </div>
  )
}
