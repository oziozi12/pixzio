
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateImageContent = async (imageDataBase64: string, mimeType: string): Promise<GeneratedContent> => {
  const model = 'gemini-3-flash-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: {
      parts: [
        {
          inlineData: {
            data: imageDataBase64.split(',')[1],
            mimeType: mimeType,
          },
        },
        {
          text: `Analyze this image and generate the following for a professional creator tool: 
          1. A engaging social media caption.
          2. A list of 5 relevant hashtags.
          3. A SEO meta description.
          4. Descriptive accessibility alt text.
          5. A catchy video title suggestion.
          
          Provide the output as a clean JSON object.`
        },
      ],
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          caption: { type: Type.STRING },
          hashtags: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          seoDescription: { type: Type.STRING },
          altText: { type: Type.STRING },
          titleSuggestion: { type: Type.STRING }
        },
        required: ["caption", "hashtags", "seoDescription", "altText", "titleSuggestion"],
      },
    },
  });

  return JSON.parse(response.text || '{}');
};
