const WHATSAPP_NUMBER = "5588988868716"; // DDI 55 + DDD 88 + 9 8886-8716

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
