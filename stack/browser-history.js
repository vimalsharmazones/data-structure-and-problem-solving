class BrowserHistory {
  constructor(homepage) {
    this.current = homepage;
    this.backStack = [];
    this.forwardStack = [];
  }

  // Visit new page
  visit(url) {
    this.backStack.push(this.current);
    this.current = url;
    this.forwardStack = []; // clear forward history
  }

  // Move back
  back() {
    if (this.backStack.length === 0) {
      console.log("No back history");
      return this.current;
    }

    this.forwardStack.push(this.current);
    this.current = this.backStack.pop();

    return this.current;
  }

  // Move forward
  forward() {
    if (this.forwardStack.length === 0) {
      console.log("No forward history");
      return this.current;
    }

    this.backStack.push(this.current);
    this.current = this.forwardStack.pop();

    return this.current;
  }

  currentPage() {
    return this.current;
  }
}
