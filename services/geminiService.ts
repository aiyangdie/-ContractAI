import { GoogleGenAI } from "@google/genai";
import { ContractRequestData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContractContent = async (
  data: ContractRequestData
): Promise<string> => {
  const { category, targetLanguage, formData } = data;

  // Construct a clear and robust prompt
  const detailsString = Object.entries(formData)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join('\n');

  const prompt = `
    Role: You are a senior legal expert and contract specialist with international experience.
    Task: Write a complete, professional, and legally sound contract.
    
    Contract Type: ${category}
    Output Language: ${targetLanguage}
    
    Specific Details provided by user:
    ${detailsString}

    Requirements:
    1. Structure the contract with standard clauses (Definitions, Obligations, Payment, Confidentiality, Termination, Dispute Resolution, etc.) relevant to the ${category} type.
    2. Use professional legal terminology appropriate for the target language (${targetLanguage}).
    3. If specific details (like specific dates or law jurisdiction) are missing, use standard placeholders like "[_______]" or reasonable defaults based on general law, but allow the user to fill them in later.
    4. Ensure the tone is formal and binding.
    5. Output format: Markdown. Use headers (##) for sections.
    6. Do NOT include any conversational filler (e.g. "Here is your contract"). Just output the contract text directly.
    7. If the language is Right-to-Left (like Arabic or Uyghur), ensure the formatting supports it logically, though the raw text will be handled by the UI.

    Crucial: The contract MUST be written entirely in ${targetLanguage}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.3, // Low temperature for more deterministic/factual output
      }
    });

    return response.text || "Error: No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate contract. Please check your connection or try again.");
  }
};
