import { siteConfig, DAY_ORDER, DAY_LABEL, type DayKey } from "@/config/site";

const JS_DAYS: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function toMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Current weekday + minutes-of-day in the configured time zone. */
function zonedNow(now: Date): { day: DayKey; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.hours.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const wk = get("weekday").toLowerCase().slice(0, 3) as DayKey;
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));
  return { day: JS_DAYS.includes(wk) ? wk : "mon", minutes: hour * 60 + minute };
}

export type OpenStatus = { open: boolean; label: string };

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const { day, minutes } = zonedNow(now);
  const today = siteConfig.hours.days[day];
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, label: `Open now, closes ${formatTime(today.close)}` };
  }
  // Find next opening day.
  const startIdx = JS_DAYS.indexOf(day);
  for (let i = 0; i < 8; i++) {
    const k = JS_DAYS[(startIdx + i) % 7];
    const h = siteConfig.hours.days[k];
    if (!h) continue;
    if (i === 0 && minutes >= toMinutes(h.open)) continue; // already past today's opening
    const when = i === 0 ? "today" : i === 1 ? "tomorrow" : DAY_LABEL[k];
    return { open: false, label: `Closed, opens ${when} ${formatTime(h.open)}` };
  }
  return { open: false, label: "Closed" };
}

/** Rows for a human-readable hours table. */
export function hoursRows(): { day: string; value: string }[] {
  return DAY_ORDER.map((k) => {
    const h = siteConfig.hours.days[k];
    return { day: DAY_LABEL[k], value: h ? `${formatTime(h.open)} to ${formatTime(h.close)}` : "Closed" };
  });
}

export const HOURS_SHORT = "Mon-Sat 10:30 am to 7:00 pm, Sunday closed";
