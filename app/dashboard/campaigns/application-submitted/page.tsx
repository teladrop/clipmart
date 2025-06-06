import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Eye, Bell } from "lucide-react"
import Link from "next/link"

export default function ApplicationSubmittedPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 p-6">
      {/* Success Message */}
      <Card>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-green-600 mb-2">Application Submitted Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Your campaign application has been sent to the brand for review. You'll receive a notification once they
            respond.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">What happens next?</h3>
            <div className="text-left space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Brand reviews your application (typically 2-3 business days)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>You'll receive an email and in-app notification with their decision</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>If approved, you can start creating content according to the guidelines</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button variant="outline" asChild className="w-full justify-start">
              <Link href="/dashboard/campaigns">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse More Campaigns
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full justify-start">
              <Link href="/dashboard/campaigns/my-applications">
                <Eye className="w-4 h-4 mr-2" />
                View My Applications
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full justify-start">
              <Link href="/dashboard/settings">
                <Bell className="w-4 h-4 mr-2" />
                Notification Settings
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Application Summary */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Application Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Campaign:</span>
              <span className="font-medium">Fitness App Launch Campaign</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Brand:</span>
              <span className="font-medium">FitLife Pro</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Submitted:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">Under Review</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">💡 Tips for Success</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Keep your notifications enabled to respond quickly to brand messages</p>
            <p>• Continue applying to other relevant campaigns to increase your chances</p>
            <p>• Update your portfolio regularly with your best recent work</p>
            <p>• Engage authentically with brands on social media</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
