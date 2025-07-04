"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Paperclip, ArrowLeft, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import useProject from "@/hooks/use-project";
import io, { Socket } from "socket.io-client";

// Message type definition for better type safety
type MessageType = "user" | "bot";

interface Message {
  id: string;
  content: string;
  type: MessageType;
}

let socket: Socket;

const Chat: React.FC = () => {
  // State management
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { project } = useProject();

  const roomId = project?.id ?? "global";

  useEffect(() => {
    socket = io("http://localhost:3001");

    console.log("Project:", project);
    socket.emit("join-room", roomId);
    console.log("Joined room:", roomId);

    (async () => {
      const res = await fetch(`/api/chat/${roomId}`);
      if (res.ok) {
        const history = (await res.json()) as Array<{
          id: string;
          content: string;
          senderType: "user" | "bot";
        }>;
        setMessages(
          history.map((m) => ({
            id: m.id,
            content: m.content,
            type: m.senderType,
          })),
        );
      }
    })();

    socket.on("message", async (msg: string) => {
      await fetch(`/api/chat/${roomId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: msg, senderType: "bot" }),
      });
      setMessages((prev) => [
        ...prev,
        { id: `bot-${Date.now()}`, content: msg, type: "bot" },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();

    socket.emit("message", { message: inputMessage, room: roomId });

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputMessage,
      type: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");

    if (!inputMessage.trim()) return;

    await fetch(`/api/chat/${roomId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: inputMessage, senderType: "user" }),
    });
  };

  const renderChatHeader = () => (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/95 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md">
            <span className="text-sm font-semibold text-white">A</span>
          </div> */}
          <div className="flex flex-col items-start">
            <span className="font-medium text-gray-900">
              {project?.name}'s Team Chat
            </span>
            <span className="text-xs text-green-500">Active</span>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 rounded-full border-gray-200 text-gray-700 hover:bg-gray-50"
        onClick={async () => {
          await fetch(`/api/chat/${roomId}`, { method: "DELETE" });
          setMessages([]);
        }}
      >
        <Plus size={16} />
        <span>New Chat</span>
      </Button>
    </div>
  );

  const renderMessage = (message: Message) => {
    const isUser = message.type === "user";

    return (
      <div
        key={message.id}
        className={cn(
          "mb-4 flex items-end",
          isUser ? "justify-end" : "justify-start",
        )}
      >
        {!isUser && (
          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm">
            <span className="text-xs font-semibold text-white">A</span>
          </div>
        )}

        <div
          className={cn(
            "max-w-[75%] rounded-2xl px-4 py-3 shadow-sm",
            isUser
              ? "rounded-br-none bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              : "rounded-bl-none border border-gray-100 bg-white text-gray-800",
          )}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>

        {isUser && (
          <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-600">U</span>
          </div>
        )}
      </div>
    );
  };

  const renderChatMessages = () => (
    <ScrollArea className="h-[calc(100vh-11rem)] px-6 py-4">
      <div className="flex min-h-full flex-col justify-end">
        {messages.map((message) => renderMessage(message))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );

  const renderChatInput = () => (
    <div className="border-t bg-white px-6 py-4">
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/20"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600"
        >
          <Paperclip size={18} />
        </Button>

        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border-none bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Button
          type="submit"
          className={cn(
            "rounded-full p-2 transition-all",
            inputMessage.trim()
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              : "bg-gray-200 text-gray-400",
          )}
          size="icon"
          disabled={!inputMessage.trim()}
        >
          <Send size={16} className="text-white" />
        </Button>
      </form>
    </div>
  );

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-md border border-gray-50 bg-white shadow-sm">
      {renderChatHeader()}
      {renderChatMessages()}
      {renderChatInput()}
    </div>
  );
};

export default Chat;
