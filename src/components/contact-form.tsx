"use client";

import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  recipientEmail: string;
  linkedinUrl: string;
  labels: {
    name: string;
    email: string;
    message: string;
    send: string;
    linkedin: string;
  };
}

export function ContactForm({ recipientEmail, linkedinUrl, labels }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Islamic Smart Door Collaboration - ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">{labels.name}</Label>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-11 rounded-lg"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">{labels.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-11 rounded-lg"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="min-h-32 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="h-11 bg-[#0f6f5b] text-white hover:bg-[#0b5949]">
          <Mail aria-hidden="true" />
          {labels.send}
        </Button>
        <a
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "h-11 border-[#d6c67a] bg-white text-[#151a17] hover:bg-[#fff8d6]",
          })}
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink aria-hidden="true" />
          {labels.linkedin}
        </a>
      </div>
    </form>
  );
}
