const WHATSAPP_NUMBER = "558899785493"; // DDI 55 + DDD 88 + 9978-5493

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
