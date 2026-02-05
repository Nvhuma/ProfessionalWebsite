import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactNotification } from "./mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createMessage(validatedData);

      // Send email notification with sender details and message content
      await sendContactNotification(validatedData);
      
      return res.status(201).json({
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid data provided",
          errors: error.errors
        });
      }
      
      console.error("Error handling contact form:", error);
      return res.status(500).json({
        message: "Failed to send message"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
