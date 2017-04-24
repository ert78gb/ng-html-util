/**
 * Calculate the top left position of the targetElement
 * @param {Document} document
 * @param {HTMLElement} targetElement
 * @returns {{top: number, left: number}}
 */
export function extractElementPosition(document: Document, targetElement: HTMLElement): { top: number, left: number } {

  let body = document.body;
  let docEl = document.documentElement;

  let windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
  let windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;

  let scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
  let scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;

  let clientTop = docEl.clientTop || body.clientTop || 0;
  let clientLeft = docEl.clientLeft || body.clientLeft || 0;


  if (!targetElement) {
    // No element found, so return the current position to not cause any change in scroll position
    return { top: scrollTop, left: scrollLeft };
  }
  let box = targetElement.getBoundingClientRect();

  let top = box.top + scrollTop - clientTop;
  let left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}
