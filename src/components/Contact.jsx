

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_cbox84o",   // replace with your EmailJS service ID
      "template_k2gjfo2",  // replace with your template ID
      formRef.current,
      "UG8AZVK0kXxUC4F1T"  // replace with your EmailJS public key
    )
    .then(
      () => {
        setLoading(false);
        formRef.current.reset();
        toast.success("Message sent successfully!", {
          duration: 4000,
          position: "bottom-left",
        });
      },
      (error) => {
        console.error("EmailJS error:", error);
        setLoading(false);
        toast.error("Failed to send message. Please try again.", {
          duration: 4000,
          position: "bottom-left",
        });
      }
    );
};


  return (
    <section id="contact" className="section-padding bg-background">
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          Get In <span style={{ color: "#e0f11f" }}>Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

          {/* LEFT SIDE - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#e0f11f] mr-4" />
                <span className="text-gray-300">ashankar637@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#e0f11f] mr-4" />
                <span className="text-gray-300">+91 8004875199</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#e0f11f] text-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/architshankar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#e0f11f] text-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/archit-shankar-815756262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#e0f11f] text-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://x.com/archit__shankar?t=pBR8mQiksXo75dJAsSsaIQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#e0f11f] text-[#e0f11f] hover:bg-[#e0f11f] hover:text-black transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/archit.shankar?igsh=NnR4M3U1eDdqcXdw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <Card className="bg-white dark:bg-neutral-800 relative">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1 text-gray-300">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-white dark:bg-neutral-700 border-[#e0f11f] focus:border-[#e0f11f]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-white dark:bg-neutral-700 border-[#e0f11f] focus:border-[#e0f11f]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    required
                    className="bg-white dark:bg-neutral-700 border-[#e0f11f] focus:border-[#e0f11f]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#e0f11f] text-black hover:bg-[#e0f11f]/90 flex items-center justify-center"
                >
                  {loading && (
                    <span className="loader border-2 border-t-transparent border-black rounded-full w-5 h-5 mr-2 animate-spin"></span>
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
