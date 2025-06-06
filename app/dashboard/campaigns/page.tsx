"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, DollarSign, Eye, Clock, Users, Star, MapPin } from "lucide-react"

export default function CampaignsPage() {
  const campaigns = [
    {
      id: 1,
      title: "Fitness App Launch Campaign",
      brand: "FitLife Pro",
      image: "/placeholder.svg?height=200&width=300",
      description: "Promote our new fitness tracking app to health-conscious audiences",
      fullDescription:
        "We're launching our revolutionary fitness tracking app that uses AI to create personalized workout plans. We need authentic creators who are passionate about fitness and health to showcase the app's features through engaging short-form content.",
      requirements: [
        "Must have 10K+ followers on chosen platform",
        "Content should be authentic and engaging",
        "Include app download link in description",
        "Post within 7 days of approval",
      ],
      deliverables: ["1 main video (60-90 seconds)", "3 story posts showcasing features", "App review and rating"],
      payPerView: 0.05,
      totalBudget: 5000,
      platform: "YouTube Shorts",
      category: "Fitness",
      deadline: "Dec 15, 2024",
      applicants: 45,
      rating: 4.8,
      location: "Global",
      status: "Active",
    },
    {
      id: 2,
      title: "Sustainable Fashion Brand",
      brand: "EcoWear",
      image: "/placeholder.svg?height=200&width=300",
      description: "Showcase our eco-friendly clothing line to environmentally conscious creators",
      fullDescription:
        "EcoWear is committed to sustainable fashion. We're looking for creators who share our values to showcase our latest eco-friendly clothing collection made from recycled materials.",
      requirements: [
        "Must align with sustainability values",
        "Show clothing in natural settings",
        "Mention eco-friendly materials",
        "Tag @EcoWear in all posts",
      ],
      deliverables: ["1 outfit showcase video", "2 styling tip posts", "Behind-the-scenes content"],
      payPerView: 0.08,
      totalBudget: 3000,
      platform: "TikTok",
      category: "Fashion",
      deadline: "Dec 20, 2024",
      applicants: 32,
      rating: 4.9,
      location: "US & Canada",
      status: "Active",
    },
    {
      id: 3,
      title: "Tech Gadget Review",
      brand: "TechNova",
      image: "/placeholder.svg?height=200&width=300",
      description: "Create authentic reviews of our latest wireless earbuds",
      fullDescription:
        "TechNova's new wireless earbuds feature cutting-edge noise cancellation and 48-hour battery life. We need tech enthusiasts to create honest, detailed reviews highlighting the product's key features.",
      requirements: [
        "Must be tech-focused creator",
        "Honest and detailed review",
        "Show product in use",
        "Compare with competitors",
      ],
      deliverables: ["1 detailed review video (3-5 minutes)", "Unboxing content", "Feature demonstration posts"],
      payPerView: 0.12,
      totalBudget: 8000,
      platform: "YouTube",
      category: "Technology",
      deadline: "Jan 5, 2025",
      applicants: 78,
      rating: 4.7,
      location: "Worldwide",
      status: "Active",
    },
  ]

  const [selectedCampaign, setSelectedCampaign] = React.useState(null)
  const [showModal, setShowModal] = React.useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Campaign Marketplace</h1>
        <p className="text-gray-600">Discover brand campaigns and start earning from your content</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search campaigns..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline">All Categories</Badge>
            <Badge variant="outline">Fitness</Badge>
            <Badge variant="outline">Technology</Badge>
            <Badge variant="outline">Fashion</Badge>
            <Badge variant="outline">Food</Badge>
            <Badge variant="outline">Gaming</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Avg. Pay/View</p>
                <p className="text-2xl font-bold">$0.08</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold">$45K</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">My Applications</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign List */}
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="lg:w-48 lg:flex-shrink-0">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-32 lg:h-24 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold">{campaign.title}</h3>
                    <Badge className="bg-green-100 text-green-600">{campaign.status}</Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{campaign.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{campaign.brand}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{campaign.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Deadline: {campaign.deadline}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right space-y-2">
                  <div className="flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-1">
                    <div>
                      <p className="text-2xl font-bold text-orange-500">${campaign.payPerView}</p>
                      <p className="text-sm text-gray-500">per view</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">${campaign.totalBudget.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">total budget</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{campaign.platform}</Badge>
                    <Badge variant="outline">{campaign.category}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">{campaign.applicants} applicants</p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 w-full lg:w-auto"
                    onClick={() => {
                      setSelectedCampaign(campaign)
                      setShowModal(true)
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="px-8">
          Load More Campaigns
        </Button>
      </div>

      {/* Campaign Details Modal */}
      {showModal && selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedCampaign.title}</h2>
                <Button
                  variant="ghost"
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              <img
                src={selectedCampaign.image || "/placeholder.svg"}
                alt={selectedCampaign.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Campaign Details</h3>
                  <p className="text-gray-600">{selectedCampaign.fullDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Pay per view:</p>
                    <p className="text-orange-500 text-xl">${selectedCampaign.payPerView}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Total Budget:</p>
                    <p className="text-lg">${selectedCampaign.totalBudget.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Platform:</p>
                    <p>{selectedCampaign.platform}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Deadline:</p>
                    <p>{selectedCampaign.deadline}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedCampaign.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Deliverables:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedCampaign.deliverables.map((deliverable, index) => (
                      <li key={index}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" onClick={() => setShowModal(false)} className="flex-1">
                    Cancel
                  </Button>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 flex-1"
                    onClick={() => {
                      window.location.href = `/dashboard/campaigns/${selectedCampaign.id}/apply`
                    }}
                  >
                    Apply for Campaign
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
