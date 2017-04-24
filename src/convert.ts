/**
 * Append the 'px' suffix to the input value.
 * @param {number} value
 * @returns {string}
 */
export function convertNumberToPx(value: number): string {
  return value + 'px';
}

/**
 * Remove the 'px' suffix from the input value.
 * @param {string} value
 * @returns {number}
 */
export function convertPxToNumber(value: string): number {
  if(!value)
    return 0;

  return Number.parseInt(value.replace('px', ''));
}
