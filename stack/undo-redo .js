class UndoRedo {
  constructor(initialState = "") {
    this.current = initialState;
    this.undoStack = [];
    this.redoStack = [];
  }

  // Perform new action
  execute(newState) {
    this.undoStack.push(this.current);
    this.current = newState;
    this.redoStack = []; // clear redo history
  }

  // Undo action
  undo() {
    if (this.undoStack.length === 0) {
      console.log("Nothing to undo");
      return this.current;
    }

    this.redoStack.push(this.current);
    this.current = this.undoStack.pop();
    return this.current;
  }

  // Redo action
  redo() {
    if (this.redoStack.length === 0) {
      console.log("Nothing to redo");
      return this.current;
    }

    this.undoStack.push(this.current);
    this.current = this.redoStack.pop();
    return this.current;
  }

  getState() {
    return this.current;
  }
}

const editor = new UndoRedo("A");

editor.execute("B");
editor.execute("C");
editor.execute("D");

console.log(editor.getState()); // D

console.log(editor.undo()); // C
console.log(editor.undo()); // B

console.log(editor.redo()); // C

editor.execute("E"); // New action clears redo stack

console.log(editor.redo()); // Nothing to redo
console.log(editor.getState()); // E
