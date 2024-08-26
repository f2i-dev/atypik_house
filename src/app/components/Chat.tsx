import { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface ChatProps {
  userId: string;
}

const Chat: React.FC<ChatProps> = ({ userId }) => {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className="chat">
      <MessageList userId={userId} key={refresh} />
      <MessageInput receiverId={userId} currentUserId={userId} onMessageSent={handleRefresh} />
    </div>
  );
};

export default Chat;
