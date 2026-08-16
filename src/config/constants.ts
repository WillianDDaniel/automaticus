export const WHATSAPP_NUMBER = "5511999999999";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vi a solução de atendimento com IA e gostaria de saber mais.";

export const INSTAGRAM_URL = "https://instagram.com/atendeia";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
