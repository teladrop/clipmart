"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, LinkIcon, Languages, Play, Settings, Volume2, Download } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function TranslatePage() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["spanish", "french"])
  const [preserveVoice, setPreserveVoice] = useState(true)

  const languages = [
    { code: "spanish", name: "Spanish", flag: "🇪🇸", speakers: "500M+" },
    { code: "french", name: "French", flag: "🇫🇷", speakers: "280M+" },
    { code: "german", name: "German", flag: "🇩🇪", speakers: "100M+" },
    { code: "italian", name: "Italian", flag: "🇮🇹", speakers: "65M+" },
    { code: "portuguese", name: "Portuguese", flag: "🇵🇹", speakers: "260M+" },
    { code: "japanese", name: "Japanese", flag: "🇯🇵", speakers: "125M+" },
    { code: "korean", name: "Korean", flag: "🇰🇷", speakers: "77M+" },
    { code: "chinese", name: "Chinese", flag: "🇨🇳", speakers: "1.1B+" },
    { code: "arabic", name: "Arabic", flag: "🇸🇦", speakers: "420M+" },
    { code: "hindi", name: "Hindi", flag: "🇮🇳", speakers: "600M+" },
  ]

  const translatedVideos = [
    {
      id: 1,
      originalTitle: "10 Minute Morning Workout",
      language: "Spanish",
      flag: "🇪🇸",
      status: "Completed",
      views: 8900,
      duration: "10:24",
      completedDate: "2024-12-05",
    },
    {
      id: 2,
      originalTitle: "Healthy Breakfast Ideas",
      language: "French",
      flag: "🇫🇷",
      status: "Processing",
      views: 0,
      duration: "8:15",
      completedDate: null,
    },
    {
      id: 3,
      originalTitle: "Tech Review: Latest Phone",
      language: "German",
      flag: "🇩🇪",
      status: "Completed",
      views: 5600,
      duration: "15:32",
      completedDate: "2024-12-03",
    },
  ]

  const toggleLanguage = (languageCode: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(languageCode) ? prev.filter((lang) => lang !== languageCode) : [...prev, languageCode],
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Translate Video</h1>
        <p className="text-gray-600">Translate your videos to any language while preserving your voice</p>
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
              <CardDescription>Upload a video file to start translation</CardDescription>
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

      {/* Language Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Target Languages</CardTitle>
          <CardDescription>Choose which languages you want to translate your video into</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => toggleLanguage(language.code)}
                className={`p-4 border-2 rounded-lg text-center transition-colors ${
                  selectedLanguages.includes(language.code)
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-2xl mb-2">{language.flag}</div>
                <div className="font-semibold text-sm">{language.name}</div>
                <div className="text-xs text-gray-500">{language.speakers}</div>
              </button>
            ))}
          </div>
          {selectedLanguages.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Selected languages ({selectedLanguages.length}):</p>
              <div className="flex flex-wrap gap-2">
                {selectedLanguages.map((langCode) => {
                  const lang = languages.find((l) => l.code === langCode)
                  return (
                    <Badge key={langCode} className="bg-orange-100 text-orange-600">
                      {lang?.flag} {lang?.name}
                    </Badge>
                  )
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Translation Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Translation Settings</CardTitle>
          <CardDescription>Customize how your video is translated</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 text-orange-500" />
              <div>
                <h3 className="font-semibold">Preserve Original Voice</h3>
                <p className="text-sm text-gray-600">Keep your voice tone and style in translations</p>
              </div>
            </div>
            <button
              onClick={() => setPreserveVoice(!preserveVoice)}
              className={`w-12 h-6 rounded-full transition-colors ${preserveVoice ? "bg-orange-500" : "bg-gray-300"}`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  preserveVoice ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="voiceStyle">Voice Style</Label>
              <Select defaultValue="natural">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Natural</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="speed">Speaking Speed</Label>
              <Select defaultValue="normal">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slow">Slow</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="fast">Fast</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customInstructions">Custom Instructions (optional)</Label>
            <Textarea id="customInstructions" placeholder="Add any specific translation notes or context..." rows={3} />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button className="bg-orange-500 hover:bg-orange-600 flex-1">
          <Languages className="w-4 h-4 mr-2" />
          Start Translation
        </Button>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Advanced Settings
        </Button>
      </div>

      {/* Translated Videos */}
      <Card>
        <CardHeader>
          <CardTitle>Your Translated Videos</CardTitle>
          <CardDescription>Previously translated videos and their performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {translatedVideos.map((video) => (
              <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{video.originalTitle}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{video.flag}</span>
                      <span>{video.language}</span>
                      <span>•</span>
                      <span>{video.duration}</span>
                      {video.completedDate && (
                        <>
                          <span>•</span>
                          <span>Completed {video.completedDate}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    className={
                      video.status === "Completed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    }
                  >
                    {video.status}
                  </Badge>
                  <p className="text-sm text-gray-600 mt-1">{video.views.toLocaleString()} views</p>
                  {video.status === "Completed" && (
                    <Button variant="outline" size="sm" className="mt-2">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
