// Refined prompt for camelCase conversion

/*
  Prompt:
  Write a robust JavaScript function named `toCamelCase` that converts any
  given string into camelCase. The function should:
    - trim leading and trailing whitespace
    - split words on spaces, hyphens, underscores, or punctuation
    - discard any non-alphanumeric characters except those used as separators
    - lowercase the first word and capitalize the first letter of each
      subsequent word
    - handle empty, null, or undefined input gracefully by returning an empty
      string
    - preserve numbers and treat them as part of words

  Example:
    toCamelCase("first name")      -> "firstName"
    toCamelCase("user_id")         -> "userId"
    toCamelCase("SCREEN_NAME")     -> "screenName"
    toCamelCase("mobile-number")   -> "mobileNumber"
*/

function toCamelCase(str) {
  if (str == null) return ''; // covers undefined and null
  if (typeof str !== 'string') str = String(str);

  // normalize separators to spaces, remove illegal characters
  const parts = str
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean);

  if (parts.length === 0) return '';

  const first = parts[0].toLowerCase();
  const rest = parts.slice(1).map(p =>
    p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
  );

  return first + rest.join('');
}

// export for reuse if needed
module.exports = { toCamelCase };
