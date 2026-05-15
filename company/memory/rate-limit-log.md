# Rate Limit / Model Availability Log

## 2026-05-15
- `openrouter/moonshotai/kimi-k2:free` failed for Content Studio: no endpoint available.
- `openrouter/google/gemini-2.0-flash-001:free` failed for Verification/Ops: no endpoint available.
- `openrouter/deepseek/deepseek-r1:free` failed for Verification/Ops retry: no endpoint available.

Policy update: before assigning critical work to a free OpenRouter model, prefer a small smoke test or use models that have recently completed successfully. If unavailable/rate-limited, record here and retry on the next scheduled shift rather than looping.
- `openrouter/qwen/qwen3-8b:free` failed for Content Studio retry: no endpoint available.
