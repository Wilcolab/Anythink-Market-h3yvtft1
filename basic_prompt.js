// Utility for converting text to various case formats

/**
 * Convert a string to **snake_case**.
 *
 * This function normalizes whitespace, punctuation, and camelCase boundaries
 * into underscores, then lowercases the entire result. Useful for generating
 * identifiers, filenames, or API keys where underscores are preferred.
 *
 * @param {string} str - The input text to transform. Non-string values return
 *   an empty string.
 * @returns {string} The snake-cased version of the input.
 *
 * @example
 *   toSnakeCase("Hello World") // "hello_world"
 *   toSnakeCase("convertToSnakeCase") // "convert_to_snake_case"
 *   toSnakeCase("  spaced-out  ") // "spaced_out"
 */
function toSnakeCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .trim()
    // insert underscore between camelCase boundaries
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    // replace non-alphanumeric characters with underscore
    .replace(/[^a-zA-Z0-9]+/g, '_')
    // collapse multiple underscores
    .replace(/__+/g, '_')
    .toLowerCase();
}

/**
 * Convert a string to **camelCase**.
 *
 * Handles a variety of separators (spaces, hyphens, underscores,
 * punctuation) and normalizes them into a continuous camelCased string.
 * The first word is lowercased; subsequent words are capitalized. Numbers
 * are preserved and treated as part of words.
 *
 * @param {string} str - Input text to transform. Non-strings return an empty
 *   string.
 * @returns {string} camel-cased output.
 *
 * @example
 *   toCamelCase("first name") // "firstName"
 *   toCamelCase("user_id") // "userId"
 *   toCamelCase("SCREEN_NAME") // "screenName"
 *   toCamelCase("mobile-number") // "mobileNumber"
 */
function toCamelCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  // split on non-alphanumeric characters
  const parts = str
    .trim()
    // replace non-alphanumerics with space so split works
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean);

  if (parts.length === 0) return '';

  const [first, ...rest] = parts;
  const camel = first.toLowerCase() +
    rest
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join('');
  return camel;
}

/**
 * Add two numbers with validation.
 *
 * @param {number} a - first addend
 * @param {number} b - second addend
 * @returns {number} sum of a and b
 * @throws {Error} if inputs are not valid numbers
 */
function addNumbers(a, b) {
  if (a === undefined || a === null) {
    throw new Error('First argument is undefined or null');
  }
  if (b === undefined || b === null) {
    throw new Error('Second argument is undefined or null');
  }
  if (typeof a !== 'number' || Number.isNaN(a)) {
    throw new Error(`First argument is not a valid number: ${a}`);
  }
  if (typeof b !== 'number' || Number.isNaN(b)) {
    throw new Error(`Second argument is not a valid number: ${b}`);
  }
  return a + b;
}

/**
 * Convert text to **dot.case** (lowercase words separated by period/dot).
 *
 * Similar to snake_case but uses `.` as the separator. CamelCase boundaries
 * are respected, and multiple non-alphanumeric characters collapse into a
 * single dot. Leading or trailing dots are trimmed.
 *
 * @param {string} str - Input text; non-strings return an empty string.
 * @returns {string} Dot-separated lowercase string.
 *
 * @example
 *   toDotCase('Hello World') // 'hello.world'
 *   toDotCase('convertToDot') // 'convert.to.dot'
 *   toDotCase(' already.dotted') // 'already.dotted'
 */
function toDotCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .trim()
    // insert separator between camelCase boundaries
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
    // replace non-alphanumeric characters with dot
    .replace(/[^a-zA-Z0-9]+/g, '.')
    // collapse multiple dots
    .replace(/\.{2,}/g, '.')
    .toLowerCase()
    // remove leading/trailing dots
    .replace(/(^\.|\.$)/g, '');
}

module.exports = { toSnakeCase, toCamelCase, addNumbers, toDotCase };