import { Menu, Search, Settings, Home, Users, Trophy, Gift, Sparkles, ShoppingCart, Crown, Zap, Bell, Check, X } from 'lucide-react';
import logo from 'src/assets/trbg.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface NotificationsPageProps {
  onBack: () => void;
  onOpenSettings?: () => void;
  onOpenProfile?: () => void;
  onNavigate: (page: string) => void;
}

const notifications = [
  { id: 1, type: 'achievement', title: 'Achievement Unlocked!', message: 'You earned the "Win Streak" achievement', time: '5m ago', icon: '🏆', read: false },
  { id: 2, type: 'match', title: 'Match Found', message: 'Your 1v1 match is starting in 2 minutes', time: '12m ago', icon: '⚔️', read: false },
  { id: 3, type: 'reward', title: 'Daily Reward Ready', message: 'Claim your Day 4 reward now!', time: '1h ago', icon: '🎁', read: false },
  { id: 4, type: 'friend', title: 'Friend Request', message: 'ProGamer_420 sent you a friend request', time: '2h ago', icon: '👥', read: true },
  { id: 5, type: 'tournament', title: 'Tournament Starting', message: 'Weekend Warrior Tournament begins in 30 minutes', time: '3h ago', icon: '🎯', read: true },
  { id: 6, type: 'level', title: 'Level Up!', message: 'Congratulations! You reached Level 43', time: '5h ago', icon: '⭐', read: true },
  { id: 7, type: 'coins', title: 'Coins Earned', message: 'You earned 500 coins from your last match', time: '1d ago', icon: '💎', read: true },
  { id: 8, type: 'event', title: 'New Event Available', message: 'Speed Run Challenge is now live!', time: '1d ago', icon: '⚡', read: true },
];

export function NotificationsPage({ onBack, onOpenSettings, onOpenProfile, onNavigate }: NotificationsPageProps) {
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
                placeholder="Search notifications..."
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

        {/* Notifications Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <motion.div 
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    rotate: [0, -15, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Bell className="w-10 h-10 text-blue-500" />
                </motion.div>
                <h1 className="text-4xl">Notifications</h1>
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
                  {notifications.filter(n => !n.read).length} new
                </span>
              </div>
              <motion.button
                className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mark all as read
              </motion.button>
            </motion.div>

            {/* Notifications List */}
            <div className="space-y-3">
              {notifications.map((notification, idx) => (
                <motion.div
                  key={notification.id}
                  className={`rounded-xl p-6 border ${
                    notification.read 
                      ? 'bg-[#1a1a1f] border-gray-800' 
                      : 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="text-4xl flex-shrink-0"
                      animate={{ scale: notification.read ? 1 : [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: notification.read ? 0 : Infinity }}
                    >
                      {notification.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-lg">{notification.title}</h3>
                        <span className="text-xs text-gray-400">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-400">{notification.message}</p>
                    </div>
                    <div className="flex gap-2">
                      {!notification.read && (
                        <motion.button
                          className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Check className="w-4 h-4" />
                        </motion.button>
                      )}
                      <motion.button
                        className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
