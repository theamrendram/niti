"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { conversationData } from "@/data/mock-data";
import type { Conversation } from "@/types/index";
import { Link } from "react-router-dom";
import { Search, MoreVertical } from "lucide-react";
// import { truncate } from "@/lib/index";

const Chat = () => {
  const [conversations] = useState<Conversation[]>(conversationData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[300px] bg-white rounded-lg flex flex-col shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">Messages</h1>
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500">No conversations found </p>
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <Link to={`/inbox/${conversation.id}`} key={conversation.id}>
              <ChatItem conversation={conversation} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Chat;

const ChatItem = ({ conversation }: { conversation: Conversation }) => {
  return (
    <div className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group">
      {/* Profile Picture with Online Status */}
      <div className="relative flex-shrink-0">
        <img
          src={conversation.profilePicture}
          alt={conversation.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
      </div>

      {/* Conversation Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-semibold text-gray-900 truncate">
            {conversation.name}
          </h3>
          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
            {conversation.lastMessageTime}
          </span>
        </div>

        <p className="text-sm text-gray-600 truncate leading-relaxed">
          {conversation.lastMessage}
        </p>
      </div>

      {/* Unread Indicator */}
      <div className="flex-shrink-0">
        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};
