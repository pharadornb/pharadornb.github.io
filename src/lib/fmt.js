const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Escapes text, then wraps each phrase in `bold` with <b>. Phrases come from resume.en.json.
export function fmt(text, bold = []) {
  let out = escapeHtml(text);
  for (const phrase of bold) {
    const safe = escapeHtml(phrase);
    out = out.replace(safe, `<b>${safe}</b>`);
  }
  return out;
}
