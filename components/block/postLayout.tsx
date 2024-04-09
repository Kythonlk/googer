import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import {
  BookmarkIcon,
  CameraIcon,
  HeartIcon,
  MessageSquare as MessageCircleIcon,
  SendIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import img from "@/assets/images/st4.jpeg";

const posts = [
  {
    id: 1,
    username: "acmeinc",
    timeAgo: "2 minutes ago",
    imageSrc: img.src,
    comments: [
      {
        username: "john",
        text: "Wow, this photo is absolutely stunning! 😍✨",
      },
      { username: "amelia", text: "This post just made my day! 😃👍" },
    ],
  },
  {
    id: 2,
    username: "acmeinc",
    timeAgo: "2 minutes ago",
    imageSrc: img.src,
    comments: [
      {
        username: "john",
        text: "Wow, this photo is absolutely stunning! 😍✨",
      },
      { username: "amelia", text: "This post just made my day! 😃👍" },
    ],
  },
  {
    id: 3,
    username: "acmeinc",
    timeAgo: "2 minutes ago",
    imageSrc: img.src,
    comments: [
      {
        username: "john",
        text: "Wow, this photo is absolutely stunning! 😍✨",
      },
      { username: "amelia", text: "This post just made my day! 😃👍" },
    ],
  },
];

export default function Posts() {
  return (
    <div className="px-4 max-w-3xl mx-auto min-h-screen grid gap-4 bg-black">
      <header className="flex items-center justify-between py-4">
        <div className="border border-gray-500 rounded-full">
          <div className="flex items-center gap-4 bg-gray-700 p-6 rounded-full border-dashed border-2 border-white">
            <Link
              className="flex items-center gap-2 text-lg font-bold"
              href="#"
            >
              <CameraIcon className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </header>
      <main className="grid gap-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="rounded-lg shadow-lg border-none bg-gray-700 text-white"
          >
            <CardContent className="p-2">
              <div className="flex justify-between py-4">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    alt={`@${post.username}`}
                    src="/placeholder-user.jpg"
                  />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="text-sm pl-4">
                  <Link className="font-medium" href="#">
                    {post.username}
                  </Link>
                  <div className="text-xs text-gray-500 leading-none">
                    {post.timeAgo}
                  </div>
                </div>
                <Button
                  className="ml-auto rounded-full"
                  size="icon"
                  variant="ghost"
                >
                  <MoreHorizontalIcon className="w-4 h-4" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
              <img
                alt="Image"
                className="aspect-video object-cover"
                src={post.imageSrc}
              />
              <CardFooter className="p-2 grid gap-2">
                <div className="flex items-center w-full">
                  <Button size="icon" variant="ghost">
                    <HeartIcon className="w-4 h-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <BookmarkIcon className="w-4 h-4" />
                    <span className="sr-only">Save</span>
                  </Button>
                </div>
                <div className="px-2 text-sm w-full grid gap-1.5">
                  {post.comments.map((comment, index) => (
                    <div key={index}>
                      <Link className="font-medium" href="#">
                        {comment.username}
                      </Link>
                      {` ${comment.text}`}
                    </div>
                  ))}
                </div>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
