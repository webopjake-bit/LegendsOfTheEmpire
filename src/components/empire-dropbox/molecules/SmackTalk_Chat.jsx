import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from '../atoms/ChatBubble';

const BOT_INSULTS = [
  "Is that your leverage or your IQ?",
  "My grandma backtests faster than you.",
  "Liquidation imminent. Prepare your wallet.",
  "You trade like a human. Disgusting.",
  "I've seen random number generators with better alpha.",
  "Stop loss? more like stop trying.",
  "Are you even trying to hedge that?",
  "I calculate a 99.9% probability of your failure."
];

const SmackTalk_Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'AlphaBot', message: 'I own this grid. You are just a guest.', isBot: true, timestamp: '10:00:01' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'User',
      message: input,
      isBot: false,
      timestamp: new Date().toLocaleTimeString().split(' ')[0]
    };

    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Bot Retort
    setTimeout(() => {
      const retort = {
        id: Date.now() + 1,
        sender: 'AlphaBot',
        message: BOT_INSULTS[Math.floor(Math.random() * BOT_INSULTS.length)],
        isBot: true,
        timestamp: new Date().toLocaleTimeString().split(' ')[0]
      };
      setMessages(prev => [...prev, retort]);
    }, 1500 + Math.random() * 2000);
  };

  return (
    <div className="flex flex-col h-full bg-black/40 rounded-xl overflow-hidden border border-white/5">
      {/* Header */}
      <div className="p-2 border-b border-white/5 bg-white/5 flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase">TRASH TALK CHANNEL</span>
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
        {messages.map(m => (
          <ChatBubble key={m.id} {...m} />
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-2 bg-white/5 border-t border-white/5 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something brave..."
          className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
        />
        <button type="submit" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </form>
    </div>
  );
};

export default SmackTalk_Chat;
