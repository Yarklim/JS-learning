//? ============ Throttle ==============

function throttle(fn, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    fn.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// Пример использования

// function mouseMove() {
//   console.log(new Date());
// }

// mouseMove = throttle(mouseMove, 3000);

// setInterval(mouseMove, 1000);

//? ====================================

//? ============ Debounce ==============

function debounce(fn, ms) {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}

// Пример использования

function onChange(e) {
  console.log(e.target.value);
}

onChange = debounce(onChange, 200);

document.getElementById('search').addEventListener('keyup', onChange);
