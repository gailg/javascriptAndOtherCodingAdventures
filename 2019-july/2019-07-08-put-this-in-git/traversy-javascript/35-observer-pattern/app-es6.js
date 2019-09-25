class EventObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
  }
  fire() {
    this.observers.forEach(item => item.call());
  }
}

const click = new EventObserver();

// event listeners
document.querySelector(".sub-ms").addEventListener(
  "click", () => click.subscribe(getCurrentMilliseconds));

document.querySelector(".unsub-ms").addEventListener(
  "click", () => click.unsubscribe(getCurrentMilliseconds));

document.querySelector(".sub-s").addEventListener(
  "click", () => click.subscribe(getCurrentSeconds));

document.querySelector(".unsub-s").addEventListener(
  "click", () => click.unsubscribe(getCurrentSeconds));
document.querySelector(".fire").addEventListener(
  "click", () => click.fire());

// click handler
const getCurrentMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
const getCurrentSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}