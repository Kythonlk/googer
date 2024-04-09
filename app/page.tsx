"use client";

import Component from "@/components/block/postLayout";
import {
  Home as HomeIcon,
  Search,
  MessageSquare,
  PlusCircle,
  Bell,
  ShoppingBag,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex bg-black">
      <div className="fixed max-h-screen h-screen w-1/5 bg-gray-900 flex flex-col justify-between">
        <div>
          <div className="flex p-4 text-white">
            <span className="ml-2 text-2xl pt-4 font-bold">Googer</span>
          </div>
          <div className="flex flex-col justify-start pl-2 pt-10">
            <div className="flex p-4 text-white">
              <HomeIcon className="h-6 w-6" />
              <span className="ml-2">Home</span>
            </div>
            <div className="flex items-center p-4 text-white">
              <Search className="h-6 w-6" />
              <span className="ml-2">Search</span>
            </div>
            <div className="flex items-center p-4 text-white">
              <MessageSquare className="h-6 w-6" />
              <span className="ml-2">Message</span>
            </div>
            <div className="flex items-center p-4 text-white">
              <PlusCircle className="h-6 w-6" />
              <span className="ml-2">Create</span>
            </div>
            <div className="flex items-center p-4 text-white">
              <ShoppingBag className="h-6 w-6" />
              <span className="ml-2">Ads</span>
            </div>
            <div className="flex items-center p-4 text-white">
              <Bell className="h-6 w-6" />
              <span className="ml-2">Notification</span>
            </div>
          </div>
        </div>
        <div className="flex p-4 text-white m-4 text-center bg-black rounded-xl">
          Kavindu harshana
        </div>
      </div>
      <Component />
    </main>
  );
}
