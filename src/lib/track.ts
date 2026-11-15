/** Client-side analytics hook. No-op for v1; wire a provider here later. */
export function track(event: string, props?: Record<string, string | number | boolean>): void {
  void event;
  void props;
}
