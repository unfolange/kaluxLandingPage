// Link de agendamiento (Cal.com). El horario de disponibilidad (lunes a
// viernes 9am-6pm, sábados 8am-1pm) se configura en Cal.com, en el
// "Availability schedule" del evento — no se puede fijar desde acá.
// TODO: confirmar que este es el slug real del evento en Cal.com.
export const CONTACT_URL = "https://cal.com/kaelux/diagnostico";

// TODO: reemplazar por el correo real de contacto.
export const CONTACT_EMAIL = "hola@kaelux.com";

// Número de WhatsApp de Kaelux (Colombia, +57).
export const WHATSAPP_NUMBER = "573228875312";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, tengo una pregunta sobre Kaelux."
)}`;

export const SITE_URL = "https://kaelux-ai.com";

export const SITE_NAME = "Kaelux";

export const SITE_DESCRIPTION =
  "Kaelux construye la infraestructura que organiza la información de tu empresa para que puedas implementar y escalar soluciones de IA sobre tus propios sistemas, con cualquier modelo y sin atarte a un proveedor.";
