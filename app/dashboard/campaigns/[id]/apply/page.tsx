"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, LinkIcon, Calendar, DollarSign, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CampaignApplicationPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    portfolioLinks: [""],
    proposedContent: "",
    timeline: "",
    additionalNotes: "",
    agreedToTerms: false,
    preferredPlatform: "",
    audienceSize: "",
    audienceDemographics: "",
    previousBrandWork: "",
  })

  // Mock campaign data - in real app, fetch based on params.id
  const campaign = {
    id: Number.parseInt(params.id),
    title: "Fitness App Launch Campaign",
    brand: "FitLife Pro",
    image: "/placeholder.svg?height=200&width=300",
    description: "Promote our new fitness tracking app to health-conscious audiences",
    payPerView: 0.05,
    totalBudget: 5000,
    platform: "YouTube Shorts",
    category: "Fitness",
    deadline: "Dec 15, 2024",
    location: "Global",
    requirements: [
      "Must have 10K+ followers on chosen platform",
      "Content should be authentic and engaging",
      "Include app download link in description",
      "Post within 7 days of approval",
    ],
    deliverables: ["1 main video (60-90 seconds)", "3 story posts showcasing features", "App review and rating"],
  }

  const addPortfolioLink = () => {
    setFormData((prev) => ({
      ...prev,
      portfolioLinks: [...prev.portfolioLinks, ""],
    }))
  }

  const updatePortfolioLink = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      portfolioLinks: prev.portfolioLinks.map((link, i) => (i === index ? value : link)),
    }))
  }

  const removePortfolioLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      portfolioLinks: prev.portfolioLinks.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Application submitted:", formData)
    // Redirect to success page or show success message
    window.location.href = "/dashboard/campaigns/application-submitted"
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/dashboard/campaigns">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Link>
        </Button>
      </div>

      {/* Campaign Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={campaign.image || "/placeholder.svg"}
              alt={campaign.title}
              className="w-full md:w-48 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{campaign.title}</h1>
              <p className="text-gray-600 mb-3">{campaign.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold">${campaign.payPerView} per view</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Deadline: {campaign.deadline}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{campaign.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge>{campaign.platform}</Badge>
                <Badge variant="outline">{campaign.category}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Application Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Portfolio Links */}
            <div>
              <Label className="text-base font-semibold">Portfolio Links *</Label>
              <p className="text-sm text-gray-600 mb-3">
                Share links to your best content that's relevant to this campaign
              </p>
              {formData.portfolioLinks.map((link, index) => (
                <div key={index} className="flex space-x-2 mb-2">
                  <div className="flex-1 relative">
                    <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="https://..."
                      value={link}
                      onChange={(e) => updatePortfolioLink(index, e.target.value)}
                      className="pl-10"
                      required={index === 0}
                    />
                  </div>
                  {index > 0 && (
                    <Button type="button" variant="outline" onClick={() => removePortfolioLink(index)}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addPortfolioLink} className="mt-2">
                Add Another Link
              </Button>
            </div>

            {/* Audience Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="platform">Preferred Platform *</Label>
                <Select
                  value={formData.preferredPlatform}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredPlatform: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="audienceSize">Audience Size *</Label>
                <Input
                  id="audienceSize"
                  placeholder="e.g., 50K followers"
                  value={formData.audienceSize}
                  onChange={(e) => setFormData((prev) => ({ ...prev, audienceSize: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="audienceDemographics">Audience Demographics</Label>
              <Textarea
                id="audienceDemographics"
                placeholder="Describe your audience (age, interests, location, etc.)"
                value={formData.audienceDemographics}
                onChange={(e) => setFormData((prev) => ({ ...prev, audienceDemographics: e.target.value }))}
                rows={3}
              />
            </div>

            {/* Content Proposal */}
            <div>
              <Label htmlFor="proposedContent">Content Proposal *</Label>
              <p className="text-sm text-gray-600 mb-2">Describe your creative approach for this campaign</p>
              <Textarea
                id="proposedContent"
                placeholder="Explain your content idea, how you'll showcase the product/service, and what makes your approach unique..."
                value={formData.proposedContent}
                onChange={(e) => setFormData((prev) => ({ ...prev, proposedContent: e.target.value }))}
                rows={5}
                required
              />
            </div>

            {/* Timeline */}
            <div>
              <Label htmlFor="timeline">Proposed Timeline *</Label>
              <p className="text-sm text-gray-600 mb-2">When can you deliver the content?</p>
              <Input
                id="timeline"
                placeholder="e.g., Content ready within 5 days of approval"
                value={formData.timeline}
                onChange={(e) => setFormData((prev) => ({ ...prev, timeline: e.target.value }))}
                required
              />
            </div>

            {/* Previous Work */}
            <div>
              <Label htmlFor="previousBrandWork">Previous Brand Collaborations</Label>
              <Textarea
                id="previousBrandWork"
                placeholder="Share examples of previous brand partnerships or sponsored content (optional)"
                value={formData.previousBrandWork}
                onChange={(e) => setFormData((prev) => ({ ...prev, previousBrandWork: e.target.value }))}
                rows={3}
              />
            </div>

            {/* Additional Notes */}
            <div>
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Any additional information you'd like to share..."
                value={formData.additionalNotes}
                onChange={(e) => setFormData((prev) => ({ ...prev, additionalNotes: e.target.value }))}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Campaign Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {campaign.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {campaign.deliverables.map((deliverable, index) => (
                    <li key={index}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms and Submit */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreedToTerms: checked as boolean }))}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the campaign requirements and understand that my application will be reviewed by the brand.
                  I commit to delivering high-quality content that aligns with the brand's guidelines if selected.
                </Label>
              </div>

              <div className="flex space-x-4">
                <Button type="button" variant="outline" asChild className="flex-1">
                  <Link href="/dashboard/campaigns">Cancel</Link>
                </Button>
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 flex-1"
                  disabled={!formData.agreedToTerms}
                >
                  Submit Application
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
