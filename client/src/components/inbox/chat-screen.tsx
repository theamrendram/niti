"use client";

import { useState, useEffect } from "react";
import { conversationData } from "@/data/mock-data";
import type { Conversation, Message } from "@/types/chat.types";
import { Ellipsis, Send, Paperclip, Smile } from "lucide-react";

const ChatScreen = ({ chatId }: { chatId: string }) => {
  const [chatData, setChatData] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const conversation = conversationData.find(
      (conversation) => conversation.id === parseInt(chatId)
    );
    setChatData(conversation ?? null);
  }, [chatId]);

  if (!chatData) {
    return (
      <div className="w-3/4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Select a conversation
            </p>
            <p className="text-sm text-gray-500">
              Choose a chat to start messaging
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-3/4 bg-white rounded-lg flex flex-col shadow-sm">
      <ChatHeader chatData={chatData} />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {chatData.messages?.map((message) => (
          <ChatItem key={message.id} message={message} />
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <button
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!newMessage.trim()}>
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;

const ChatHeader = ({ chatData }: { chatData: Conversation }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={chatData.profilePicture}
            alt={chatData.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{chatData.name}</p>
          <p className="text-sm text-green-600 font-medium">● Online</p>
        </div>
      </div>
      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
        <Ellipsis className="w-5 h-5" />
      </button>
    </div>
  );
};

const ChatItem = ({ message }: { message: Message }) => {
  const isOwn = message.isOwn;

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
          isOwn
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-white text-gray-900 rounded-bl-md shadow-sm border border-gray-200"
        }`}>
        <p className="text-sm leading-relaxed">{message.message}</p>
        <p
          className={`text-xs mt-1 ${
            isOwn ? "text-blue-100" : "text-gray-500"
          }`}>
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};
