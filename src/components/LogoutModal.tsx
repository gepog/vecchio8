import React, { useState } from 'react';
import { X, User, Mail, Lock, ArrowRight } from 'lucide-react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmLogout: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirmLogout }) => {
  const [showSwitchAccount, setShowSwitchAccount] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleSwitchAccount = () => {
    setShowSwitchAccount(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    console.log('Switching to account:', loginForm.email);
    onClose();
    // In a real app, this would handle the account switch
  };

  const savedAccounts = [
    { email: 'mario.rossi@email.com', name: 'Mario Rossi', avatar: 'M' },
    { email: 'anna.verdi@email.com', name: 'Anna Verdi', avatar: 'A' },
    { email: 'luca.bianchi@email.com', name: 'Luca Bianchi', avatar: 'L' },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">
            {showSwitchAccount ? 'Cambia Account' : 'Esci dall\'Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors p-2"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {!showSwitchAccount ? (
            <div className="space-y-6">
              {/* Current User Info */}
              <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">John Doe</h3>
                  <p className="text-white/60 text-sm">john.doe@email.com</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/80 mb-6">
                  Sei sicuro di voler uscire dal tuo account?
                </p>

                <div className="space-y-3">
                  <button
                    onClick={handleSwitchAccount}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <ArrowRight size={20} />
                    <span>Cambia Account</span>
                  </button>

                  <button
                    onClick={onConfirmLogout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Esci
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full bg-transparent border border-gray-600 hover:border-gray-500 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Annulla
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Saved Accounts */}
              <div>
                <h3 className="text-white font-semibold mb-4">Account Salvati</h3>
                <div className="space-y-2">
                  {savedAccounts.map((account) => (
                    <button
                      key={account.email}
                      onClick={() => {
                        console.log('Switching to:', account.email);
                        onClose();
                      }}
                      className="w-full flex items-center space-x-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{account.avatar}</span>
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-white font-medium">{account.name}</h4>
                        <p className="text-white/60 text-sm">{account.email}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <div>
                <h3 className="text-white font-semibold mb-4">Accedi con un altro account</h3>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Accedi
                  </button>
                </form>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowSwitchAccount(false)}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  ← Torna indietro
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};