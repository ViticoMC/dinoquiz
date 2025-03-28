import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Bell,
  BookOpen,
  Clock,
  Cog,
  Gamepad2,
  History,
  Home,
  Lightbulb,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import { inter } from "../fonts/fonts";



export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h1 className="text-xl font-bold">DinoQuiz</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>New quiz available!</DropdownMenuItem>
                <DropdownMenuItem>You completed 5 quizzes this week</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Cog className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-14 flex-col border-r bg-background md:flex lg:w-64">
          <nav className="grid gap-2 p-2 lg:px-4 lg:py-4">
            <Button variant="ghost" className="justify-start gap-2">
              <Home className="h-5 w-5" />
              <span className="hidden lg:inline-flex">Home</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <History className="h-5 w-5" />
              <span className="hidden lg:inline-flex">History</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="hidden lg:inline-flex">My Quizzes</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-2">
              <MessageSquare className="h-5 w-5" />
              <span className="hidden lg:inline-flex">Community</span>
            </Button>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/quiz/history" className="block">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <CardTitle>History</CardTitle>
                  <CardDescription>Test your knowledge on various topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>10 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm">Start Quiz</Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/quiz/animales" className="block">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Science & Technology</CardTitle>
                  <CardDescription>Explore the world of science and tech</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm">Start Quiz</Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/quiz/cine" className="block">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <CardTitle>History & Culture</CardTitle>
                  <CardDescription>Journey through time and traditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>12 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm">Start Quiz</Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/quiz/sports-entertainment" className="block">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Sports & Entertainment</CardTitle>
                  <CardDescription>Fun facts about games and media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>8 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm">Start Quiz</Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/quiz/geography" className="block">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Geography</CardTitle>
                  <CardDescription>Explore countries, cities, and landmarks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>10 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm">Start Quiz</Button>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/quiz/language-literature" className="block">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Language & Literature</CardTitle>
                  <CardDescription>Words, books, and literary knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>12 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm">Start Quiz</Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </main>
        <aside className="hidden w-64 flex-col border-l bg-background p-4 xl:flex">
          <h3 className="mb-4 text-lg font-semibold">Quiz Modes</h3>
          <Tabs defaultValue="standard">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="challenge">Challenge</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="mt-4 space-y-4">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Lightbulb className="h-4 w-4" />
                Learning Mode
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Clock className="h-4 w-4" />
                Timed Mode
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Gamepad2 className="h-4 w-4" />
                Practice Mode
              </Button>
            </TabsContent>
            <TabsContent value="challenge" className="mt-4 space-y-4">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Clock className="h-4 w-4" />
                Speed Challenge
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Gamepad2 className="h-4 w-4" />
                Survival Mode
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                Multiplayer
              </Button>
            </TabsContent>
          </Tabs>
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">Difficulty</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Easy
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Medium
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Hard
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Expert
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

