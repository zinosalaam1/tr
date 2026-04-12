import { useState } from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Zap } from 'lucide-react';
import { FaTwitter, FaDiscord, FaYoutube, FaTiktok } from 'react-icons/fa';
import logo from './assets/trbg.png';
import { SignInPage } from './components/SignInPage';
import { HomePage } from './components/HomePage';
import { SettingsPage } from './components/SettingsPage';
import { ProfilePage } from './components/ProfilePage';
import { TournamentArena } from './components/TournamentArena';
import { TournamentDetails } from './components/TournamentDetails';
import { TournamentBracket } from './components/TournamentBracket';
import { LeaderboardsPage } from './components/LeaderboardsPage';
import { SocialsPage } from './components/SocialsPage';
import { RewardsPage } from './components/RewardsPage';
import { MarketplacePage } from './components/MarketplacePage';
import { EventsPage } from './components/EventsPage';
import { ShopPage } from './components/ShopPage';
import { PremiumPage } from './components/PremiumPage';
import { QuickMatchPage } from './components/QuickMatchPage';
import { NotificationsPage } from './components/NotificationsPage';
import { MessagesPage } from './components/MessagesPage';
import { WalletPage } from './components/WalletPage';
import { SignupPage } from './components/SignupPage';
import { EmailAuthPage } from './components/EmailAuthPage';
import { SubscriptionPage } from './components/SubscriptionPage';
import { PaymentPage } from './components/PaymentPage';
import { CardDetailsPage } from './components/CardDetailsPage';
import { GameLibraryPage } from './components/GameLibraryPage';
import { ToastManager } from './components/ToastManager';
import { useGameState } from './hooks/useGameState';
import { DuelMatchPage } from './components/DuelMatchPage';
import { TeamBattlePage } from './components/TeamBattlePage';
import { EventDetailsPage } from './components/EventDetailsPage';
import { MarketplacePurchasePage } from './components/MarketplacePurchasePage';
import { PacManLauncher } from './components/PacManLauncher';
import { PacManLeaderboard } from './components/PacManLeaderboard';
import { CreateTournamentPage } from './components/CreateTournamentPage';
import { AdvancedLeaderboardsPage } from './components/AdvancedLeaderboardsPage';
import { PlanSelectionPage } from './components/PlanSelectionPage';
import { FreeSignupComplete } from './components/FreeSignupComplete';
import { FreeHomePage } from './components/FreeHomePage';
import { GameComingSoon } from './components/GameComingSoon';
import { getGameById } from './utils/gameConfig';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'signup' | 'emailAuth' | 'planSelection' | 'freeComplete' | 'subscription' | 'payment' | 'cardDetails' | 'signIn' | 'home' | 'settings' | 'profile' | 'tournaments' | 'tournamentDetails' | 'tournamentBracket' | 'leaderboards' | 'socials' | 'rewards' | 'marketplace' | 'events' | 'shop' | 'premium' | 'quickmatch' | 'notifications' | 'messages' | 'wallet' | 'gamelibrary' | 'duelmatch' | 'teambattle' | 'pacman' | 'pacmanleaderboard' | string>('landing');
  const [selectedTournamentId, setSelectedTournamentId] = useState<string>('1');
  const [userTier, setUserTier] = useState<'free' | 'standard'>('free'); // Track user tier
  const gameState = useGameState();

  const handleNavigation = (page: string) => {
    console.log('Navigating to:', page);
    setCurrentPage(page as any);
  };

  // Handle event details pages
  if (currentPage.startsWith('eventdetails-')) {
    const eventId = currentPage.split('-')[1];
    return (
      <>
        <ToastManager />
        <EventDetailsPage 
          eventId={eventId}
          onBack={() => setCurrentPage('events')}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenProfile={() => setCurrentPage('profile')}
          onNavigate={handleNavigation}
        />
      </>
    );
  }

  // Handle marketplace purchase pages
  if (currentPage.startsWith('marketplacepurchase-')) {
    const itemId = currentPage.split('-')[1];
    return (
      <>
        <ToastManager />
        <MarketplacePurchasePage 
          itemId={itemId}
          onBack={() => setCurrentPage('marketplace')}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenProfile={() => setCurrentPage('profile')}
          onNavigate={handleNavigation}
        />
      </>
    );
  }

  // Handle individual game pages
  if (currentPage.startsWith('game-')) {
    const gameId = currentPage.split('-')[1];
    const game = getGameById(gameId);
    
    if (!game) {
      // Game not found, go back to library
      setCurrentPage('gamelibrary');
      return null;
    }

    // If game has a launcher, show it
    if (game.hasLauncher) {
      if (gameId === 'pacman') {
        return (
          <>
            <ToastManager />
            <PacManLauncher 
              onBack={() => setCurrentPage('gamelibrary')}
              onOpenSettings={() => setCurrentPage('settings')}
              onNavigateToLeaderboard={() => setCurrentPage('pacmanleaderboard')}
              onGameComplete={(score, leaderboardPoints, difficulty) => {
                console.log('Game completed:', { score, leaderboardPoints, difficulty });
              }}
            />
          </>
        );
      }
    }
    
    // Otherwise show coming soon page
    return (
      <>
        <ToastManager />
        <GameComingSoon 
          gameId={gameId}
          onBack={() => setCurrentPage('home')}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenProfile={() => setCurrentPage('profile')}
          onNavigate={handleNavigation}
        />
      </>
    );
  }

  if (currentPage === 'duelmatch') {
    return (
      <>
        <ToastManager />
        <DuelMatchPage 
          onBack={() => setCurrentPage('quickmatch')}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenProfile={() => setCurrentPage('profile')}
          onNavigate={handleNavigation}
        />
      </>
    );
  }

  if (currentPage === 'teambattle') {
    return (
      <>
        <ToastManager />
        <TeamBattlePage 
          onBack={() => setCurrentPage('quickmatch')}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenProfile={() => setCurrentPage('profile')}
          onNavigate={handleNavigation}
        />
      </>
    );
  }

  if (currentPage === 'pacman') {
    return (
      <>
        <ToastManager />
        <PacManLauncher 
          onBack={() => setCurrentPage('gamelibrary')}
          onOpenSettings={() => setCurrentPage('settings')}
          onNavigateToLeaderboard={() => setCurrentPage('pacmanleaderboard')}
          onGameComplete={(score, leaderboardPoints, difficulty) => {
            console.log('Game completed:', { score, leaderboardPoints, difficulty });
          }}
        />
      </>
    );
  }

  if (currentPage === 'pacmanleaderboard') {
    return (
      <>
        <ToastManager />
        <PacManLeaderboard 
          onBack={() => setCurrentPage('pacman')}
          onOpenSettings={() => setCurrentPage('settings')}
        />
      </>
    );
  }

  if (currentPage === 'createtournament') {
    return (
      <>
        <ToastManager />
        <CreateTournamentPage 
          onBack={() => setCurrentPage('tournaments')}
          onOpenSettings={() => setCurrentPage('settings')}
          onNavigate={handleNavigation}
          onTournamentCreated={(id) => {
            console.log('Tournament created:', id);
            setCurrentPage('tournaments');
          }}
        />
      </>
    );
  }

  if (currentPage === 'gamelibrary') {
    return (
      <>
        <ToastManager />
        <GameLibraryPage 
          onBack={() => setCurrentPage('home')}
          onOpenSettings={() => setCurrentPage('settings')}
          onOpenProfile={() => setCurrentPage('profile')}
          onNavigate={handleNavigation}
          onPlayGame={(gameId) => {
            if (gameId === 'pacman') {
              setCurrentPage('pacman');
            }
          }}
        />
      </>
    );
  }

  if (currentPage === 'wallet') {
    return (
      <WalletPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'messages') {
    return (
      <MessagesPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'notifications') {
    return (
      <NotificationsPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'quickmatch') {
    return (
      <QuickMatchPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'premium') {
    return (
      <PremiumPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'shop') {
    return (
      <ShopPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'events') {
    return (
      <EventsPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'marketplace') {
    return (
      <MarketplacePage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'rewards') {
    return (
      <RewardsPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'socials') {
    return (
      <SocialsPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'leaderboards') {
    return (
      <AdvancedLeaderboardsPage 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'tournamentBracket') {
    return (
      <TournamentBracket 
        onBack={() => setCurrentPage('tournamentDetails')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'tournamentDetails') {
    return (
      <TournamentDetails 
        tournamentId={selectedTournamentId}
        onBack={() => setCurrentPage('tournaments')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onViewBracket={() => setCurrentPage('tournamentBracket')}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'tournaments') {
    return (
      <TournamentArena 
        onBack={() => setCurrentPage('home')}
        onOpenSettings={() => setCurrentPage('settings')}
        onOpenProfile={() => setCurrentPage('profile')}
        onViewTournament={(id) => {
          setSelectedTournamentId(id);
          setCurrentPage('tournamentDetails');
        }}
        onNavigate={handleNavigation}
      />
    );
  }

  if (currentPage === 'profile') {
    return <ProfilePage onBack={() => setCurrentPage('home')} onOpenSettings={() => setCurrentPage('settings')} onNavigate={handleNavigation} />;
  }

  if (currentPage === 'settings') {
    return <SettingsPage onBack={() => setCurrentPage('home')} onOpenProfile={() => setCurrentPage('profile')} />;
  }

  if (currentPage === 'home') {
    // Route to appropriate home page based on user tier
    if (userTier === 'free') {
      return (
        <>
          <ToastManager />
          <FreeHomePage 
            onSignOut={() => {
              setCurrentPage('landing');
              setUserTier('free');
            }}
            onOpenSettings={() => setCurrentPage('settings')} 
            onOpenProfile={() => setCurrentPage('profile')} 
            onNavigate={handleNavigation}
            gameState={gameState}
          />
        </>
      );
    } else {
      return (
        <>
          <ToastManager />
          <HomePage 
            onSignOut={() => {
              setCurrentPage('landing');
              setUserTier('free');
            }}
            onOpenSettings={() => setCurrentPage('settings')} 
            onOpenProfile={() => setCurrentPage('profile')} 
            onOpenTournaments={() => setCurrentPage('tournaments')} 
            onNavigate={handleNavigation}
            gameState={gameState}
          />
        </>
      );
    }
  }

  if (currentPage === 'signIn') {
    return <SignInPage onSignIn={() => {
      setUserTier('standard');
      setCurrentPage('home');
    }} onSignUp={() => setCurrentPage('signup')} />;
  }

  if (currentPage === 'cardDetails') {
    return <CardDetailsPage onBack={() => setCurrentPage('payment')} onComplete={() => {
      setUserTier('standard');
      setCurrentPage('signIn');
    }} />;
  }

  if (currentPage === 'payment') {
    return <PaymentPage onNext={() => setCurrentPage('cardDetails')} />;
  }

  if (currentPage === 'subscription') {
    return <SubscriptionPage onNext={() => setCurrentPage('payment')} />;
  }

  if (currentPage === 'emailAuth') {
    return <EmailAuthPage onBackToLogin={() => setCurrentPage('signup')} onNext={() => setCurrentPage('planSelection')} />;
  }

  if (currentPage === 'signup') {
    return <SignupPage onNext={() => setCurrentPage('emailAuth')} />;
  }

  if (currentPage === 'planSelection') {
    return (
      <>
        <ToastManager />
        <PlanSelectionPage 
          onSelectFree={() => setCurrentPage('freeComplete')} 
          onSelectPremium={() => setCurrentPage('subscription')} 
        />
      </>
    );
  }

  if (currentPage === 'freeComplete') {
    return (
      <>
        <ToastManager />
        <FreeSignupComplete onComplete={() => setCurrentPage('home')} />
      </>
    );
  }

  return (
    <>
      <ToastManager />
      <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-20 w-20 h-20 border-2 border-purple-900/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-32 left-10 w-16 h-16 border-2 border-purple-900/30 rounded-full"
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-40 opacity-20"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gamepad2 className="w-12 h-12 text-purple-600" />
        </motion.div>
        <motion.div 
          className="absolute top-10 left-40 opacity-20"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gamepad2 className="w-10 h-10 text-purple-600" />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 opacity-20"
          animate={{ 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gamepad2 className="w-14 h-14 text-purple-600" />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-60 w-24 h-24 border-2 border-purple-900/30 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: 360
          }}
          transition={{ 
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        ></motion.div>
      </div>

      {/* Header */}
      <motion.header 
        className="relative z-10 flex items-center justify-between px-8 py-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src={logo} 
          alt="Tour Arcade" 
          className="h-12"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        />
        <motion.button 
          onClick={() => setCurrentPage('signup')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 text-center px-8 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 tracking-tight"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(168, 85, 247, 0.3)",
              "0 0 30px rgba(168, 85, 247, 0.5)",
              "0 0 20px rgba(168, 85, 247, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          TOUR ARCADE
        </motion.h1>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The ultimate skill-based gaming platform where talent meets rewards. Compete, climb rankings, and earn real cash prizes monthly
        </motion.p>
        <motion.button 
          onClick={() => setCurrentPage('signup')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity"
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 0px rgba(168, 85, 247, 0)",
              "0 0 20px rgba(168, 85, 247, 0.4)",
              "0 0 0px rgba(168, 85, 247, 0)"
            ]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Zap className="w-5 h-5 fill-current" />
          </motion.div>
          Start Earning Now
        </motion.button>
      </motion.section>

      {/* Game Cards */}
      <section className="relative z-10 px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { 
              title: 'SEGA Rally', 
              emoji: '🏎️',
              image: 'https://images.unsplash.com/photo-1620855522342-de6d0ad7c3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBhcmNhZGUlMjBnYW1lfGVufDF8fHx8MTc3NTcyMjIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
              gradient: 'from-blue-600 to-cyan-600'
            },
            { 
              title: 'Street Fighter', 
              emoji: '🥊',
              image: 'https://images.unsplash.com/photo-1759171053096-e7dbe7c36eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdodGluZyUyMGdhbWUlMjBhcmNhZGU8ZW58MXx8fHwxNzc1NzAyNDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
              gradient: 'from-red-600 to-orange-600'
            }
          ].map((game, idx) => (
            <motion.div 
              key={idx} 
              className="bg-[#1a1a24] rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-purple-600 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)"
              }}
              onClick={() => setCurrentPage('signup')}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-20" style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`
                }} />
                <motion.div
                  className="text-8xl z-10"
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {game.emoji}
                </motion.div>
              </div>
              <div className={`p-6 bg-gradient-to-br ${game.gradient} bg-opacity-10`}>
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">• 40K+ players</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Competition Text */}
      <section className="relative z-10 text-center px-8 py-8">
        <p className="text-gray-400 max-w-3xl mx-auto">
          Experience the thrill of elite competitions against others in our meticulously curated games and only pay when you win $1 USD
        </p>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 px-8 py-8">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Arcade Points System */}
          <motion.div 
            className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(250, 204, 21, 0.4)"
            }}
          >
            <motion.div 
              className="text-4xl mb-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👍
            </motion.div>
            <h3 className="text-xl mb-2">Arcade Points System</h3>
            <p className="text-sm text-yellow-100">
              Earn rewards, unlock VIP perks, climb tiers, and enhance your gaming journey with every play
            </p>
          </motion.div>

          {/* Elite Tournaments */}
          <motion.div 
            className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)"
            }}
          >
            <h3 className="text-xl mb-2">Elite Tournaments</h3>
            <p className="text-sm text-purple-100">
              Compete in team-based challenges for exclusive prizes and top-tier rewards
            </p>
          </motion.div>

          {/* Skill-Based Matching */}
          <motion.div 
            className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)"
            }}
          >
            <h3 className="text-xl mb-2">Skill-Based Matching</h3>
            <p className="text-sm text-blue-100">
              Fair play meets skill. Our dynamic matchmaking system pairs you with opponents of similar abilities
            </p>
          </motion.div>

          {/* Global Leaderboards */}
          <motion.div 
            className="bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(234, 179, 8, 0.4)"
            }}
          >
            <h3 className="text-xl mb-2">Global Leaderboards</h3>
            <p className="text-sm text-yellow-100">
              Track top players and see where you stand in the global rankings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prize Text */}
      <section className="relative z-10 text-center px-8 py-8">
        <p className="text-gray-400 max-w-3xl mx-auto">
          Compete for your share of our $800,000+ monthly prize pool. Rankings reset daily, giving you fresh daily chances to top the leaderboards
        </p>
      </section>

      {/* Icon Grid */}
      <section className="relative z-10 px-8 py-8">
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Top Row */}
          <motion.div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-square flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              🤑
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-square flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🥈
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-square flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🟠
            </motion.div>
          </motion.div>
          
          {/* Bottom Row */}
          <motion.div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-square flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🎯
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-square flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.div 
              className="text-6xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🎲
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-square flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Gamepad2 className="w-20 h-20 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Green CTA Button */}
      <motion.section 
        className="relative z-10 text-center px-8 py-8"
        whileInView={{ opacity: [0, 1], y: [30, 0] }}
        viewport={{ once: true }}
      >
        <motion.button 
          onClick={() => setCurrentPage('signup')}
          className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-3 rounded hover:opacity-90 transition-opacity"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(34, 197, 94, 0)",
              "0 0 20px rgba(34, 197, 94, 0.3)",
              "0 0 0px rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          Start Earning Now
        </motion.button>
      </motion.section>

      {/* Creators Section */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">
            Create Tour Content. All of your tracked games automatically stream affiliated streams. Fully partner with us
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#1a1a24] rounded-lg p-6 border border-gray-800">
              <h3 className="mb-4">Sign in to:</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Track stats</p>
              </div>
            </div>
            <div className="bg-[#1a1a24] rounded-lg p-6 border border-gray-800">
              <h3 className="mb-4">Distribute</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="relative z-10 px-8 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
          <div className="bg-[#1a1a24] rounded-lg p-6 border border-gray-800">
            <h3 className="mb-4">Information</h3>
          </div>
          <div className="bg-[#1a1a24] rounded-lg p-6 border border-gray-800">
            <h3 className="mb-4">Support Links</h3>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="relative z-10 text-center px-8 py-6">
        <button className="bg-white text-black px-8 py-2 rounded hover:opacity-90 transition-opacity">
          Terms of Service
        </button>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 text-center px-8 py-12">
        <p className="text-gray-400 mb-6">
          Join thousands of skilled gamers competing for real money. Your gaming skills deserve rewards
        </p>
        <button 
          onClick={() => setCurrentPage('signup')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join Tour Arcade
        </button>
      </section>

      {/* Bottom Section */}
      <section className="relative z-10 px-8 py-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Tour Arcade" className="h-8" />
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <FaDiscord className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <FaTiktok className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}