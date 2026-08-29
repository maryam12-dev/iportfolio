/*
# Create app_config table for server-side secrets

1. New Tables
- `app_config`: stores key-value configuration that must stay server-side only
  (e.g. Telegram bot tokens). The edge function reads this with the service
  role key; the anon/authenticated roles have NO access.
- `key` (text, primary key)
- `value` (text, not null)

2. Security
- RLS enabled.
- No policies for anon or authenticated — only the service role (which
  bypasses RLS) can read/write. This keeps secrets invisible to the browser.
*/

CREATE TABLE IF NOT EXISTS app_config (
  key text PRIMARY KEY,
  value text NOT NULL
);

ALTER TABLE app_config ENABLE ROW LEVEL SECURITY;

INSERT INTO app_config (key, value) VALUES
  ('telegram_bot_token', '8741289280:AAGF9QIrq60--99kX0houu_Mee_Xn-o39N8')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
