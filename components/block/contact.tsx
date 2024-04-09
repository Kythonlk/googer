import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <div className="pt-4 w-[600px]">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid ">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="first-name" placeholder="Enter your full name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button className="bg-gray-800 text-white" type="submit">
              Send message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
