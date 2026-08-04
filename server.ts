import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini API lazily on server
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", role: "React Web Development Team Lead Portfolio API" });
  });

  // AI Architecture & Component Optimization Endpoint
  app.post("/api/ai-optimize", async (req, res) => {
    try {
      const { codeOrPrompt, mode = "optimize" } = req.body;
      if (!codeOrPrompt) {
        return res.status(400).json({ error: "Code snippet or prompt required" });
      }

      const ai = getGeminiClient();
      if (!ai) {
        // High quality deterministic simulated analysis fallback if API key is not present
        return res.json({
          source: "simulated",
          mode,
          analysis: `### Lokesh Binkam AI Agent Analysis (${mode.toUpperCase()})\n\n` +
            `**1. Micro-Frontend & Bundle Optimization:**\n` +
            `- Deconstruct monolithic imports into lazy-loaded module federation boundaries.\n` +
            `- Preload key chunk dependencies during Figma-to-code design tokens compilation.\n` +
            `- Achieved 30% reduction in initial load time for Microsoft Azure UI modules.\n\n` +
            `**2. AI Workflow Enhancement:**\n` +
            `- Automated React 19 memoization analysis and strict state immutability audit.\n` +
            `- Embedded automated unit test suite generation for high-throughput enterprise portals.\n` +
            `- Achieved 2x productivity acceleration across development sprints.`
        });
      }

      const systemPrompt = `You are an AI assistant persona representing Lokesh Binkam, a seasoned React Web Development Team Lead with 8 years of experience in Micro-Frontend Architecture, Azure UI Modules, and AI-Driven Development Workflows. Provide expert, actionable, and structured technical insights formatted in Markdown.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `${mode === 'optimize' ? 'Optimize this React/TypeScript code for Micro-Frontend performance, accessibility, and clean state management:' : 'Provide an architectural review and unit test suite recommendation for:'}\n\n${codeOrPrompt}`,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      return res.json({
        source: "gemini",
        mode,
        analysis: response.text || "No response generated.",
      });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({
        error: "Failed to process AI optimization request",
        details: err?.message || String(err),
      });
    }
  });

  // Vite middleware for development vs Static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lokesh Binkam Portfolio Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
