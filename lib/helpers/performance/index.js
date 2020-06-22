export { debounce };

function debounce(func = null, wait = 250, immediate = false) {
  let timeout;

  return function() {
    const context = this,
      args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    var callNow = immediate && !timeout;
    if (callNow) func.apply(context, args);
  };
}
