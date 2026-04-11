export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

export function trackEventDebounced(
  eventName: string,
  params?: Record<string, unknown>,
  delay = 500
) {
  const existing = debounceTimers.get(eventName);
  if (existing) clearTimeout(existing);

  debounceTimers.set(
    eventName,
    setTimeout(() => {
      trackEvent(eventName, params);
      debounceTimers.delete(eventName);
    }, delay)
  );
}
