import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, LinkIcon, Scissors, Play, Settings } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RepurposePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Repurpose Video</h1>
        <p className="text-gray-600">Transform your long-form content into multiple formats with AI</p>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Video</TabsTrigger>
          <TabsTrigger value="link">From Link</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Video</CardTitle>
              <CardDescription>Upload a video file to start repurposing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-500 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Drop your video here</p>
                <p className="text-gray-600 mb-4">or click to browse files</p>
                <Button className="bg-orange-500 hover:bg-orange-600">Choose File</Button>
                <p className="text-sm text-gray-500 mt-4">Supports MP4, MOV, AVI up to 500MB</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="link" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Import from Link</CardTitle>
              <CardDescription>Paste a YouTube, TikTok, or Instagram link</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="videoLink">Video URL</Label>
                <div className="flex space-x-2">
                  <Input id="videoLink" placeholder="https://youtube.com/watch?v=..." className="flex-1" />
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2">
                <Badge variant="outline">YouTube</Badge>
                <Badge variant="outline">TikTok</Badge>
                <Badge variant="outline">Instagram</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Format Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Output Formats</CardTitle>
          <CardDescription>Select the formats you want to generate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-orange-500 bg-orange-50 rounded-lg p-4 cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">YouTube Shorts</h3>
                <Badge className="bg-orange-500 text-white">Selected</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">9:16 vertical, 60 seconds max</p>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center">
                <Play className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Instagram Reels</h3>
                <Badge variant="outline">Select</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">9:16 vertical, 90 seconds max</p>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center">
                <Play className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">TikTok</h3>
                <Badge variant="outline">Select</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">9:16 vertical, 3 minutes max</p>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center">
                <Play className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Settings */}
      <Card>
        <CardHeader>
          <CardTitle>AI Generation Settings</CardTitle>
          <CardDescription>Customize how AI processes your video</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="clipCount">Number of clips to generate</Label>
            <Input id="clipCount" type="number" defaultValue="5" min="1" max="10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords">Focus keywords (optional)</Label>
            <Input id="keywords" placeholder="e.g., marketing, tips, tutorial" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Video description (optional)</Label>
            <Textarea
              id="description"
              placeholder="Describe your video to help AI understand the content better"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button className="bg-orange-500 hover:bg-orange-600 flex-1">
          <Scissors className="w-4 h-4 mr-2" />
          Generate Clips
        </Button>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Advanced Settings
        </Button>
      </div>

      {/* Generated Clips Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Generated Clips</CardTitle>
          <CardDescription>Your AI-generated video clips will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-gray-500">
            <Scissors className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Upload a video and generate clips to see them here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
