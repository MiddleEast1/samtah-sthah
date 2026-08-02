import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI client safely on server
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (err) {
      console.warn("Gemini AI initialization warning:", err);
    }
  }

  // API Routes
  // 1. Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", company: "مؤسسة محيط الشرق الأوسط - سطحة صامطة جيزان" });
  });

  // 2. AI Assistant Chatbot (المساعد الفوري لسطحة صامطة جيزان)
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "يرجى كتابة رسالة صحيحة" });
      }

      if (!ai && process.env.GEMINI_API_KEY) {
        ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: { "User-Agent": "aistudio-build" },
          },
        });
      }

      if (!ai) {
        // Friendly fallback if API key is not configured yet
        return res.json({
          reply: `أهلاً بك! أنا المساعد الفوري لمؤسسة محيط الشرق الأوسط (سطحة صامطة جيزان). يسعدنا خدمتك على مدار 24 ساعة!
للتواصل المباشر والسريع عبر الواتساب أو الاتصال: 0551678924.
نوفر نقل سيارات، نقل عفش، فتح سيارات مغلقة، اشتراك بطارية، تبديل إطارات، وباقات اشتراك شهرية (799 ريال/5 مشاوير).`,
        });
      }

      const systemInstruction = `أنت المساعد الذكي اللبق والمحترف لـ "مؤسسة محيط الشرق الأوسط لخدمات النقل - سطحة صامطة جيزان".
بيانات المؤسسة والخدمات التي تقدمها:
- اسم المؤسسة: مؤسسة محيط الشرق الأوسط لخدمات النقل
- الخدمات الرئيسية:
  1. نقل وقرصنة وسحب السيارات (سطحة هيدروليك وعادية ومغلقة) في صامطة، جيزان، أبا العريش، صبيا، والدرب، وكل مدن المملكة.
  2. نقل العفش والأثاث المنزلي والمكتبي بفك وتركيب بأمان.
  3. فتح المركبات والأبواب المغلقة بأحدث المعدات دون أي خدوش (برسوم إضافية تحدد عند الطلب والاتصال).
  4. خدمة اشتراك وشحن بطاريات السيارات واستبدالها في موقع العميل.
  5. خدمة تبديل وإصلاح الإطارات والبنشر الميداني السريع.
  6. باقة الاشتراك الشهري لنقل المركبات: 5 مشاوير شهرياً بسعر 799 ريال سعودي فقط (بشرط ألا تتجاوز مسافة المشوار الواحد 80 كيلومتر).
- رقم الهاتف والواتساب المباشر: 0551678924
- رابط واتساب المباشر: https://wa.me/966551678924?text=السلام%20علیکم%20اريد%20مشوار
- موقع المؤسسة في جوجل ماب: صامطة - جيزان (https://maps.app.goo.gl/MybZ4BntZwnBUUgc7)
- التوثيق والحكومة الرقمية: موثق لدى وزارة التجارة والمركز السعودي للأعمال والمنصة الرقمية، وسجل تجاري رسمى.
- وسائل الدفع المقبولة: كاش، شبكة مدى (POS)، أبل باي Apple Pay، فيزا/ماستركارد، تحويل بنكي.

أسلوبك:
- أجِب باللغة العربية بأسلوب سعودي راقٍ، مهذب، سريع، ومباشر.
- شجع المستخدم دائماً على الضغط على زر الواتساب أو الاتصال مباشرة على 0551678924 لحجز المشوار فوراً.
- كن محدداً وإيجابياً جداً وضح الأسعار والاشتراكات.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: [
          { role: "user", parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || "يسعدنا خدمتك! يرجى التواصل معنا مباشرة على الرقم 0551678924 عبر الاتصال أو الواتساب.";
      return res.json({ reply });
    } catch (error: any) {
      console.error("Error in AI chat endpoint:", error);
      return res.status(500).json({
        reply: "أهلاً بك! يمكنك طلب سطحة أو نقل عفش مباشرة بالاتصال أو عبر الواتساب على الرقم 0551678924.",
      });
    }
  });

  // 3. Distance & Price Estimation API helper
  app.post("/api/estimate-trip", (req, res) => {
    const { fromCity, toCity, serviceType, isBroken } = req.body;
    let basePrice = 120; // Default local towing in Samtah/Jizan area

    if (serviceType === "furniture") {
      basePrice = 250;
    } else if (serviceType === "unlock") {
      basePrice = 100; // Unlock door fee estimate
    } else if (serviceType === "battery") {
      basePrice = 70;
    } else if (serviceType === "tire") {
      basePrice = 80;
    } else if (serviceType === "subscription") {
      basePrice = 799; // Monthly package
    }

    if (isBroken) {
      basePrice += 30; // Slightly higher care for stalled/broken cars
    }

    res.json({
      estimatedPrice: basePrice,
      currency: "SAR",
      note: "السعر تقديري مبدئي، يتحدد السعر النهائي بدقة عند التواصل وإفادتنا بالتفاصيل الدقيقة للموقع على 0551678924.",
    });
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
