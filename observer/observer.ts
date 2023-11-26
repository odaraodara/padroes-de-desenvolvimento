var readlineSync = require("readline-sync");

// Observador
interface Observer {
  update(): void;
}

// Sujeito (Subject)
class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update());
  }
}

// Editor (Subject)
abstract class Editor extends Subject {
  abstract insertLine(lineNumber: number, text: string): void;
  abstract removeLine(lineNumber: number): void;
  abstract open(): void;
  abstract save(): void;
}

// TextEditor (ConcreteSubject)
class TextEditor extends Editor {
  private content: string[] = [];

  insertLine(lineNumber: number, text: string): void {
    this.content.splice(lineNumber - 1, 0, text);
    this.notify(); // Notificar observadores após a inserção
  }

  removeLine(lineNumber: number): void {
    this.content.splice(lineNumber - 1, 1);
    this.notify(); // Notificar observadores após a remoção
  }

  open(): void {
    let lineNumber = 1;
    let userInput = "";
    while (userInput !== "EOF") {
      userInput = readlineSync.question("Digite as linhas de texto. Digite 'EOF' para encerrar: ");
      if (userInput !== "EOF") {
        this.insertLine(lineNumber, userInput);
        lineNumber++;
      }
    }
  }

  save(): void {
    // Imprimir o conteúdo na tela
    console.log("Conteúdo salvo com sucesso:");
    console.log(this.content.join("\n"));
  }

  getContent(): string { 
    return this.content.join('\n');
  }
}

// ConsoleObserver (ConcreteObserver)
class ConsoleObserver implements Observer {
  private editor: TextEditor;

  constructor(editor: TextEditor) {
    this.editor = editor;
    this.editor.addObserver(this);
  }

  update(): void {
    console.log("Conteúdo atualizado:\n", this.editor.getContent());
  }
}

// Exemplo de uso
if (require.main === module) {
  const textEditor = new TextEditor();
  const consoleObserver = new ConsoleObserver(textEditor);

  textEditor.open();
  textEditor.save();
}


