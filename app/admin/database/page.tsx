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
import { Progress } from "@/components/ui/progress"
import { Play, Download, Upload, RefreshCw, HardDrive, Activity, BarChart3, FileText, Trash2 } from "lucide-react"

const databaseStats = {
  totalSize: "2.4 GB",
  totalTables: 24,
  totalRecords: 156789,
  lastBackup: "2024-01-15T10:30:00Z",
  uptime: "99.9%",
  connections: 45,
}

const tables = [
  {
    name: "users",
    records: 12456,
    size: "245 MB",
    lastUpdated: "2024-01-15T14:30:00Z",
    status: "healthy",
  },
  {
    name: "videos",
    records: 8934,
    size: "1.2 GB",
    lastUpdated: "2024-01-15T14:25:00Z",
    status: "healthy",
  },
  {
    name: "campaigns",
    records: 2345,
    size: "89 MB",
    lastUpdated: "2024-01-15T14:20:00Z",
    status: "healthy",
  },
  {
    name: "transactions",
    records: 45678,
    size: "567 MB",
    lastUpdated: "2024-01-15T14:15:00Z",
    status: "warning",
  },
  {
    name: "notifications",
    records: 87654,
    size: "234 MB",
    lastUpdated: "2024-01-15T14:10:00Z",
    status: "healthy",
  },
]

const backups = [
  {
    id: "1",
    name: "daily_backup_20240115",
    size: "2.3 GB",
    type: "full",
    status: "completed",
    createdAt: "2024-01-15T02:00:00Z",
  },
  {
    id: "2",
    name: "daily_backup_20240114",
    size: "2.2 GB",
    type: "full",
    status: "completed",
    createdAt: "2024-01-14T02:00:00Z",
  },
  {
    id: "3",
    name: "weekly_backup_20240107",
    size: "2.1 GB",
    type: "full",
    status: "completed",
    createdAt: "2024-01-07T02:00:00Z",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "healthy":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Healthy</Badge>
    case "warning":
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Warning</Badge>
    case "error":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Error</Badge>
    case "completed":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Completed</Badge>
    case "running":
      return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Running</Badge>
    case "failed":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Failed</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function AdminDatabasePage() {
  const [isQueryDialogOpen, setIsQueryDialogOpen] = useState(false)
  const [isBackupDialogOpen, setIsBackupDialogOpen] = useState(false)
  const [sqlQuery, setSqlQuery] = useState("")
  const [queryResult, setQueryResult] = useState("")

  const executeQuery = () => {
    // Simulate query execution
    setQueryResult("Query executed successfully. 3 rows affected.")
    setTimeout(() => setIsQueryDialogOpen(false), 2000)
  }

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Database Management</h1>
          <p className="text-muted-foreground">Monitor database health, manage backups, and execute queries</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isQueryDialogOpen} onOpenChange={setIsQueryDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Execute Query
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Execute SQL Query</DialogTitle>
                <DialogDescription>Run custom SQL queries against the database</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="query">SQL Query</Label>
                  <Textarea
                    id="query"
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    placeholder="SELECT * FROM users WHERE..."
                    rows={6}
                    className="font-mono"
                  />
                </div>
                {queryResult && (
                  <div className="grid gap-2">
                    <Label>Result</Label>
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm">{queryResult}</p>
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsQueryDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={executeQuery}>
                  <Play className="mr-2 h-4 w-4" />
                  Execute
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog open={isBackupDialogOpen} onOpenChange={setIsBackupDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Create Backup
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Database Backup</DialogTitle>
                <DialogDescription>Create a new backup of the database</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="backupName">Backup Name</Label>
                  <Input id="backupName" placeholder="manual_backup_20240115" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="backupType">Backup Type</Label>
                  <Select defaultValue="full">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Backup</SelectItem>
                      <SelectItem value="incremental">Incremental</SelectItem>
                      <SelectItem value="differential">Differential</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsBackupDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsBackupDialogOpen(false)}>
                  <Download className="mr-2 h-4 w-4" />
                  Create Backup
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Database Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database Size</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{databaseStats.totalSize}</div>
            <p className="text-xs text-muted-foreground">{databaseStats.totalTables} tables</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{databaseStats.totalRecords.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all tables</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{databaseStats.uptime}</div>
            <p className="text-xs text-muted-foreground">{databaseStats.connections} active connections</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tables" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tables">Tables</TabsTrigger>
          <TabsTrigger value="backups">Backups</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Tables</CardTitle>
              <CardDescription>Overview of all database tables and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Table Name</TableHead>
                      <TableHead>Records</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tables.map((table) => (
                      <TableRow key={table.name}>
                        <TableCell className="font-medium">{table.name}</TableCell>
                        <TableCell>{table.records.toLocaleString()}</TableCell>
                        <TableCell>{table.size}</TableCell>
                        <TableCell>{new Date(table.lastUpdated).toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(table.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Backups</CardTitle>
              <CardDescription>Manage database backups and restore points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Backup Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {backups.map((backup) => (
                      <TableRow key={backup.id}>
                        <TableCell className="font-medium">{backup.name}</TableCell>
                        <TableCell className="capitalize">{backup.type}</TableCell>
                        <TableCell>{backup.size}</TableCell>
                        <TableCell>{getStatusBadge(backup.status)}</TableCell>
                        <TableCell>{new Date(backup.createdAt).toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Upload className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Query Performance</CardTitle>
                <CardDescription>Average query execution times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>SELECT queries</span>
                      <span>45ms avg</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>INSERT queries</span>
                      <span>23ms avg</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>UPDATE queries</span>
                      <span>67ms avg</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Storage Usage</CardTitle>
                <CardDescription>Database storage breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data</span>
                      <span>1.8 GB</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Indexes</span>
                      <span>0.4 GB</span>
                    </div>
                    <Progress value={17} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Logs</span>
                      <span>0.2 GB</span>
                    </div>
                    <Progress value={8} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
