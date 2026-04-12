import { Menu, Search, Settings, Home, Users, Trophy, Gift, Sparkles, ShoppingCart, Crown, Zap, MessageCircle, Send, Bell, Wallet } from 'lucide-react';
import logo from '../assets/trbg.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';
import { useState } from 'react';
import { motion } from 'motion/react';

interface MessagesPageProps {
  onBack: () => void;
  onOpenSettings?: () => void;
  onOpenProfile?: () => void;
  onNavigate: (page: string) => void;
}

const conversations = [
  { id: 1, name: 'ProGamer_420', lastMessage: 'GG! That was intense', time: '2m ago', unread: 3, avatar: '🎮', online: true },
  { id: 2, name: 'SpeedRunner', lastMessage: 'Want to team up for the tournament?', time: '15m ago', unread: 1, avatar: '⚡', online: true },
  { id: 3, name: 'NeonKing', lastMessage: 'Thanks for the tips!', time: '1h ago', unread: 0, avatar: '👑', online: false },
  { id: 4, name: 'CyberNinja', lastMessage: 'See you in the finals', time: '3h ago', unread: 0, avatar: '🥷', online: true },
  { id: 5, name: 'RetroMaster', lastMessage: 'Nice win streak!', time: '1d ago', unread: 0, avatar: '🕹️', online: false },
];

export function MessagesPage({ onBack, onOpenSettings, onOpenProfile, onNavigate }: MessagesPageProps) {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const messages = [
    { id: 1, sender: 'ProGamer_420', message: 'Hey! Ready for the tournament?', time: '10:23 AM', isOwn: false },
    { id: 2, sender: 'You', message: 'Yeah! Been practicing all week', time: '10:24 AM', isOwn: true },
    { id: 3, sender: 'ProGamer_420', message: 'Nice! Want to do a warm-up match?', time: '10:25 AM', isOwn: false },
    { id: 4, sender: 'You', message: 'Sure, let\'s do it!', time: '10:26 AM', isOwn: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-[#0f0f13] flex flex-col items-center py-6 gap-6 border-r border-gray-800">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Home className="w-5 h-5" />
        </button>
        <button 
          onClick={onOpenProfile}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Users className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate('tournaments')}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Trophy className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate('marketplace')}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Gift className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate('events')}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Sparkles className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate('shop')}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate('premium')}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Crown className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate('quickmatch')}
          className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Zap className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-[#0f0f13] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
            <img src={logo} alt="Tour Arcade" className="h-8" />
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full bg-[#2a2a32] border-0 rounded-full pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-xl">
              😎
            </div>
            <button 
              onClick={onOpenSettings}
              className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenProfile}
              className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1591259441514-f3f61c4915c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmFjaW5nJTIwc3Vuc2V0fGVufDF8fHx8MTc2MDA4MTAyNnww&ixlib=rb-4.1.0&q=80&w=100"
                alt="User"
                className="w-full h-full rounded-full object-cover"
              />
            </button>
          </div>
        </header>

        {/* Messages Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Conversations List */}
          <div className="w-80 bg-[#0f0f13] border-r border-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Messages
                {conversations.reduce((acc, c) => acc + c.unread, 0) > 0 && (
                  <span className="bg-red-600 px-2 py-0.5 rounded-full text-xs">
                    {conversations.reduce((acc, c) => acc + c.unread, 0)}
                  </span>
                )}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv, idx) => (
                <motion.div
                  key={conv.id}
                  className={`p-4 border-b border-gray-800 cursor-pointer ${
                    selectedChat === conv.id ? 'bg-[#1a1a1f]' : 'hover:bg-[#1a1a1f]'
                  }`}
                  onClick={() => setSelectedChat(conv.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-2xl">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0f0f13] rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="truncate">{conv.name}</span>
                        <span className="text-xs text-gray-400">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="bg-blue-600 px-2 py-0.5 rounded-full text-xs ml-2">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="bg-[#1a1a1f] border-b border-gray-800 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-xl">
                🎮
              </div>
              <div>
                <div>ProGamer_420</div>
                <div className="text-xs text-green-400">Online</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {!msg.isOwn && (
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      🎮
                    </div>
                  )}
                  <div className={`flex-1 max-w-md ${msg.isOwn ? 'text-right' : ''}`}>
                    <div className="text-xs text-gray-400 mb-1">{msg.time}</div>
                    <div className={`inline-block px-4 py-2 rounded-lg ${
                      msg.isOwn ? 'bg-blue-600 text-white' : 'bg-[#1a1a1f] text-white'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-[#1a1a1f] border-gray-700 text-white"
                />
                <motion.button 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
