import Chats from "@/components/inbox/chats";
import ChatScreen from "@/components/inbox/chat-screen";
import { useParams } from "react-router-dom";

const InboxPage = () => {
  const { chatId } = useParams();
  console.log(chatId);
  return (
    <div className="flex h-screen w-full bg-green-50 p-4">
      <div className="flex justify-between w-full rounded-lg">
        <Chats />
        <ChatScreen chatId={chatId ?? "1"} />
      </div>
    </div>
  );
};

export default InboxPage;
