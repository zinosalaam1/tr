import { useState, useEffect } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  coins: number;
  gems: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  wins: number;
  losses: number;
  totalGames: number;
  winRate: number;
  currentStreak: number;
  bestStreak: number;
  rank: number;
  totalEarnings: number;
  achievements: Achievement[];
  friends: Friend[];
  notifications: Notification[];
  messages: Message[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  total: number;
  unlocked: boolean;
  reward: number;
  date?: string;
}

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  online: boolean;
  level: number;
  lastSeen?: string;
}

export interface Notification {
  id: string;
  type: 'achievement' | 'friend' | 'tournament' | 'reward' | 'system';
  title: string;
  message: string;
  read: boolean;
  timestamp: Date;
  icon?: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Transaction {
  id: string;
  type: 'win' | 'loss' | 'purchase' | 'reward' | 'withdrawal';
  amount: number;
  description: string;
  timestamp: Date;
  balance: number;
}

export interface GameScore {
  id: string;
  gameName: string;
  score: number;
  leaderboardPoints: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timestamp: Date;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  totalPoints: number;
  gamesPlayed: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export function useGameState() {
  const [user, setUser] = useState<User>({
    id: '1',
    username: 'ProGamer2024',
    email: 'gamer@tourarcade.com',
    avatar: 'https://images.unsplash.com/photo-1591259441514-f3f61c4915c7?w=100',
    level: 47,
    xp: 8750,
    xpToNextLevel: 10000,
    coins: 15420,
    gems: 350,
    tier: 'platinum',
    wins: 287,
    losses: 143,
    totalGames: 430,
    winRate: 66.7,
    currentStreak: 12,
    bestStreak: 28,
    rank: 234,
    totalEarnings: 4580.50,
    achievements: [
      {
        id: '1',
        title: 'First Victory',
        description: 'Win your first game',
        icon: '🏆',
        progress: 1,
        total: 1,
        unlocked: true,
        reward: 100,
        date: '2024-01-15'
      },
      {
        id: '2',
        title: 'Win Streak Master',
        description: 'Win 10 games in a row',
        icon: '🔥',
        progress: 12,
        total: 10,
        unlocked: true,
        reward: 500,
        date: '2024-02-20'
      },
      {
        id: '3',
        title: 'Century Club',
        description: 'Win 100 games',
        icon: '💯',
        progress: 287,
        total: 100,
        unlocked: true,
        reward: 1000,
        date: '2024-03-10'
      },
      {
        id: '4',
        title: 'Tournament Champion',
        description: 'Win a tournament',
        icon: '👑',
        progress: 3,
        total: 1,
        unlocked: true,
        reward: 2000,
        date: '2024-03-25'
      },
      {
        id: '5',
        title: 'High Roller',
        description: 'Earn $5000 in total',
        icon: '💰',
        progress: 4580,
        total: 5000,
        unlocked: false,
        reward: 5000
      },
      {
        id: '6',
        title: 'Speed Demon',
        description: 'Win 50 quick matches',
        icon: '⚡',
        progress: 38,
        total: 50,
        unlocked: false,
        reward: 750
      }
    ],
    friends: [
      {
        id: '1',
        username: 'SkillMaster',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100',
        online: true,
        level: 52
      },
      {
        id: '2',
        username: 'SpeedRunner',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
        online: true,
        level: 41
      },
      {
        id: '3',
        username: 'ArcadeKing',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100',
        online: false,
        level: 38,
        lastSeen: '2 hours ago'
      },
      {
        id: '4',
        username: 'EliteGamer',
        avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100',
        online: false,
        level: 45,
        lastSeen: '1 day ago'
      }
    ],
    notifications: [
      {
        id: '1',
        type: 'achievement',
        title: 'Achievement Unlocked!',
        message: 'You unlocked "Win Streak Master"',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        icon: '🔥'
      },
      {
        id: '2',
        type: 'tournament',
        title: 'Tournament Starting Soon',
        message: 'Cyber Warriors Cup starts in 30 minutes',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        icon: '🏆'
      },
      {
        id: '3',
        type: 'friend',
        title: 'Friend Request',
        message: 'NeonBlast wants to be your friend',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 45),
        icon: '👥'
      },
      {
        id: '4',
        type: 'reward',
        title: 'Daily Reward Available',
        message: 'Claim your 500 coins now!',
        read: true,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
        icon: '🎁'
      },
      {
        id: '5',
        type: 'system',
        title: 'New Games Available',
        message: 'Check out 3 new games in the library',
        read: true,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
        icon: '🎮'
      }
    ],
    messages: [
      {
        id: '1',
        senderId: '2',
        senderName: 'SkillMaster',
        senderAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100',
        content: 'Great game! Rematch?',
        timestamp: new Date(Date.now() - 1000 * 60 * 10),
        read: false
      },
      {
        id: '2',
        senderId: '3',
        senderName: 'SpeedRunner',
        senderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
        content: 'Join my tournament team?',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        read: false
      }
    ]
  });

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'win',
      amount: 50.00,
      description: 'Tournament Victory - Cyber Warriors Cup',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      balance: 15420
    },
    {
      id: '2',
      type: 'win',
      amount: 25.00,
      description: 'Quick Match Win vs SkillMaster',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      balance: 15370
    },
    {
      id: '3',
      type: 'reward',
      amount: 10.00,
      description: 'Achievement Reward - Win Streak Master',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      balance: 15345
    },
    {
      id: '4',
      type: 'purchase',
      amount: -7.99,
      description: 'Premium Membership Monthly',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      balance: 15335
    },
    {
      id: '5',
      type: 'win',
      amount: 15.00,
      description: 'Ranked Match Victory',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      balance: 15343
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update online status of friends
      setUser(prev => ({
        ...prev,
        friends: prev.friends.map(friend => ({
          ...friend,
          online: Math.random() > 0.7 ? !friend.online : friend.online
        }))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const addCoins = (amount: number) => {
    setUser(prev => ({
      ...prev,
      coins: prev.coins + amount
    }));
  };

  const addXP = (amount: number) => {
    setUser(prev => {
      const newXP = prev.xp + amount;
      const levelsGained = Math.floor(newXP / prev.xpToNextLevel);
      return {
        ...prev,
        xp: newXP % prev.xpToNextLevel,
        level: prev.level + levelsGained
      };
    });
  };

  const markNotificationRead = (id: string) => {
    setUser(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    }));
  };

  const markMessageRead = (id: string) => {
    setUser(prev => ({
      ...prev,
      messages: prev.messages.map(msg =>
        msg.id === id ? { ...msg, read: true } : msg
      )
    }));
  };

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'timestamp' | 'balance'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      timestamp: new Date(),
      balance: user.coins + transaction.amount
    };
    setTransactions(prev => [newTransaction, ...prev]);
    if (transaction.type !== 'purchase') {
      addCoins(transaction.amount);
    }
  };

  return {
    user,
    setUser,
    transactions,
    addCoins,
    addXP,
    markNotificationRead,
    markMessageRead,
    addTransaction
  };
}