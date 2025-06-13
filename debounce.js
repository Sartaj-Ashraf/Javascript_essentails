/**
 * Debounce Function
 * =================
 *
 * The debounce function is a utility function that delays the execution of a function until a certain amount of time has passed since the last time it was called.
 *
 * The debounce function takes two arguments:
 *   - func: the function to be debounced
 *   - delay: the amount of time to wait before executing the function
 *
 * setTimeout returns id, which is used to clear the timeout.
 * The debounce function returns a new function that can be called instead of the original function. When this new function is called, it will wait for the specified amount of time before executing the original function. If the new function is called multiple times during this waiting period, it will only execute the original function once the waiting period has expired.
 *
 * @param {Function} func The function to be debounced
 * @param {number} delay The amount of time to wait before executing the function
 * @return {Function} A new function that can be called instead of the original function
 */
export function debounce(func, delay) {
    let timeoutId = null;
  
    return function (...args) {
      const context = this;
  
      if (timeoutId !== null) {
        clearTimeout(timeoutId);    
      }
  
      timeoutId = setTimeout(() => {
        func.apply(context, args);
        timeoutId = null;
      }, delay);
    };
  }