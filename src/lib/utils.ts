export function isValidIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");
  return /^[6-9]\d{9}$/.test(cleaned);
}

export function formatWhatsAppMessage(data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
}): string {
  return [
    "New Appointment Request - AV Dentistry",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Treatment: ${data.treatment}`,
  ].join("\n");
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
