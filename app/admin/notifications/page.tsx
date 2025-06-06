"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, Send, Users, MessageSquare, AlertCircle, CheckCircle, Clock, Trash2, Plus, Settings } from "lucide-react"

const notifications = [
  {
    id: "1",
    title: "System Maintenance Scheduled",
    message: "Scheduled maintenance will occur on Sunday, Jan 21st from 2-4 AM EST",
    type: "system",
    audience: "all",
    status: "sent",
    sentAt: "2024-01-15T10:00:00Z",
    recipients: 1234,
  },
  {
    id: "2",
    title: "New Feature: Video Analytics",
    message: "We've launched new video analytics tools for creators. Check them out!",
    type: "feature",
    audience: "creators",
    status: "scheduled",
    scheduledFor: "2024-01-16T09:00:00Z",
    recipients: 856,
  },
  {
    id: "3",
    title: "Payment Processing Update",
    message: "Important updates to our payment processing system",
    type: "important",
    audience: "vendors",
    status: "draft",
    recipients: 234,
  },
]

const templates = [
  {
    id: "1",
    name: "System Maintenance",
    subject: "Scheduled System Maintenance",
    content:
      "We will be performing scheduled maintenance on {date} from {time}. During this time, the platform may be temporarily unavailable.",
    type: "system",
  },
  {
    id: "2",
    name: "New Feature Announcement",
    subject: "Exciting New Feature: {feature_name}",
    content: "We're excited to announce our latest feature: {feature_name}. {feature_description}",
    type: "feature",
  },
  {
    id: "3",
    name: "Payment Reminder",
    subject: "Payment Due Reminder",
    content: "This is a friendly reminder that your payment of {amount} is due on {due_date}.",
    type: "billing",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "sent":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Sent</Badge>
    case "scheduled":
      return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Scheduled</Badge>
    case "draft":
      return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">Draft</Badge>
    case "failed":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Failed</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "system":
      return <Settings className="h-4 w-4" />
    case "feature":
      return <Bell className="h-4 w-4" />
    case "important":
      return <AlertCircle className="h-4 w-4" />
    case "billing":
      return <MessageSquare className="h-4 w-4" />
    default:
      return <Bell className="h-4 w-4" />
  }
}

export default function AdminNotificationsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("general")
  const [notificationData, setNotificationData] = useState({
    title: "",
    message: "",
    type: "general",
    audience: "all",
    scheduled: false,
    scheduledDate: "",
    scheduledTime: "",
  })

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Send and manage notifications to users across the platform</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Notification
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Notification</DialogTitle>
              <DialogDescription>Send a notification to users on the platform</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="template">Template (Optional)</Label>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">No template</SelectItem>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={notificationData.title}
                  onChange={(e) => setNotificationData({ ...notificationData, title: e.target.value })}
                  placeholder="Notification title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={notificationData.message}
                  onChange={(e) => setNotificationData({ ...notificationData, message: e.target.value })}
                  placeholder="Notification message"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={notificationData.type}
                    onValueChange={(value) => setNotificationData({ ...notificationData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="feature">Feature</SelectItem>
                      <SelectItem value="important">Important</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="audience">Audience</Label>
                  <Select
                    value={notificationData.audience}
                    onValueChange={(value) => setNotificationData({ ...notificationData, audience: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="creators">Creators Only</SelectItem>
                      <SelectItem value="vendors">Vendors Only</SelectItem>
                      <SelectItem value="admins">Admins Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="scheduled"
                  checked={notificationData.scheduled}
                  onCheckedChange={(checked) => setNotificationData({ ...notificationData, scheduled: checked })}
                />
                <Label htmlFor="scheduled">Schedule for later</Label>
              </div>
              {notificationData.scheduled && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={notificationData.scheduledDate}
                      onChange={(e) => setNotificationData({ ...notificationData, scheduledDate: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={notificationData.scheduledTime}
                      onChange={(e) => setNotificationData({ ...notificationData, scheduledTime: e.target.value })}
                    />
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>
                {notificationData.scheduled ? "Schedule" : "Send Now"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Pending delivery</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Receiving notifications</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="notifications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>View and manage all sent and scheduled notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Notification</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Audience</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {notifications.map((notification) => (
                      <TableRow key={notification.id}>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(notification.type)}
                            <div>
                              <div className="font-medium">{notification.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">{notification.message}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="capitalize">{notification.type}</TableCell>
                        <TableCell className="capitalize">{notification.audience}</TableCell>
                        <TableCell>{notification.recipients.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(notification.status)}</TableCell>
                        <TableCell>
                          {notification.sentAt
                            ? new Date(notification.sentAt).toLocaleDateString()
                            : notification.scheduledFor
                              ? new Date(notification.scheduledFor).toLocaleDateString()
                              : "Not scheduled"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Templates</CardTitle>
              <CardDescription>Pre-built templates for common notification types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                  <Card key={template.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription className="capitalize">{template.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium">Subject:</p>
                          <p className="text-sm text-muted-foreground">{template.subject}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Content:</p>
                          <p className="text-sm text-muted-foreground line-clamp-3">{template.content}</p>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button size="sm">Use Template</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
