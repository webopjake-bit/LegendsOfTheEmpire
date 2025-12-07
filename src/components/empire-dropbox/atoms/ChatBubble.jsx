import React from 'react';

const ChatBubble = ({ sender, message, isBot = false, timestamp }) => {
  return (
    <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className={`flex items-end gap-2 max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border border-white/10 shrink-0
          ${isBot ? 'bg-red-500/20 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'}`}>
          {isBot ? 'BOT' : 'YOU'}
        </div>
        
        {/* Bubble */}
        <div className={`p-2 rounded-xl text-xs leading-relaxed border backdrop-blur-sm
          ${isBot 
            ? 'bg-zinc-900/80 border-white/5 text-zinc-300 rounded-bl-none' 
            : 'bg-cyan-950/40 border-cyan-500/20 text-cyan-100 rounded-br-none'}`}>
          {message}
        </div>
      </div>
      <span className="text-[9px] text-white/20 mt-1 px-9 font-mono">{timestamp}</span>
    </div>
  );
};

export default ChatBubble;
