export function slugifyName(name: string): string {
  if (!name) return "";
  const slug = name
    .toLowerCase()
    .trim()
    // replace any sequence of non-alphanumeric characters with a single dash
    .replace(/[^a-z0-9]+/g, "-")
    // remove leading/trailing dashes
    .replace(/^-+|-+$/g, "");
  return encodeURIComponent(slug);
}

export function avatarUrlForName(name: string): string {
  const slug = slugifyName(name);
  if (!slug)
    return "https://pub-7ad008e9f0d34aeea2bef87268ba75dc.r2.dev/avatars/default.png";
  return `https://pub-7ad008e9f0d34aeea2bef87268ba75dc.r2.dev/avatars/${slug}.png`;
}
