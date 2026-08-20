const WHATSAPP_NUMBER = "5511999999999"; // TODO: substituir pelo número real da Azuos Dev

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
