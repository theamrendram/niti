type Chat = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  profilePicture: string;
};

type Conversation = {
  id: number;
  chatId: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  profilePicture: string;
  messages: Message[];
};

type Message = {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
};

export type { Chat, Conversation, Message };