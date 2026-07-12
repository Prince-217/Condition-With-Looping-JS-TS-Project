# 🔁 JavaScript Project - 2: Condition with Looping Programs

A collection of **20 JavaScript programs** demonstrating conditional statements (`if-else`) combined with looping constructs (`for`, `while`, `for...of`, `for...in`) — covering basic logic building, real-world simulations, and pattern printing.

> 📚 Built as part of my Full Stack Web Development coursework at **RW Skill Education**, under the guidance of **Vivek Sir**.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Programs List](#-programs-list)
- [Code Snippets](#-code-snippets)
- [Screenshots](#-screenshots)
- [How to Run](#-how-to-run)
- [Key Concepts Practiced](#-key-concepts-practiced)
- [Author](#-author)

---

## 📖 About the Project

This repository contains **20 mini-programs** that combine **conditional logic** with **looping techniques** in JavaScript. Each program is self-contained, wrapped in its own block scope (`{ ... }`), and logs its output to the browser console (with two exceptions that render output directly to the DOM using `document.write`).

The project was originally written in **TypeScript** (`script.ts`) and converted to plain **JavaScript** (`script.js`) as per the assignment guidelines, while preserving the original `.ts` file for reference.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Page structure & question list |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Core logic implementation |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Original typed implementation |

---

## 📁 Project Structure

```
js-condition-looping-programs/
├── index.html      # Question list + script mount point
├── script.ts        # Original TypeScript source
├── script.js         # Compiled/converted JavaScript (runs in browser)
└── README.md          # Project documentation
```

---

## 📝 Programs List

### 🔹 Basic Level
| # | Program |
|---|---|
| 1 | Print all even numbers from 1 to 50 using a `for` loop |
| 2 | Print numbers from 1 to 100, skipping multiples of 3 using `continue` |
| 3 | Sum of all numbers from 1 to N (user input) using `while` |
| 4 | Check and print whether each number from 1–20 is prime |
| 5 | Print a multiplication table for a given number |
| 6 | Count vowels in a string using `for` loop and `if` |
| 7 | Reverse a number using `while` and modulus |
| 8 | Find the factorial of a number using a loop |
| 9 | Print the Fibonacci series up to N terms |
| 10 | Check if a number is an Armstrong number |

### 🔹 Real-World Style
| # | Program |
|---|---|
| 11 | Attendance checker — eligibility based on ≥75% presence |
| 12 | Grade calculator — assigns grades based on marks |
| 13 | ATM cash dispenser — minimum notes for a given amount |
| 14 | Shopping cart discount — slab-based discount logic |
| 15 | Login attempt simulator — max 3 attempts with `while` + `break` |
| 16 | Electricity bill generator — slab-based unit pricing |
| 17 | Student pass/fail report from an array of objects |

### 🔹 Slightly Advanced
| # | Program |
|---|---|
| 18 | Right-angled triangle star pattern using nested loops |
| 19 | Find largest & smallest number in an array |
| 20 | FizzBuzz (1–100) |

---

## 💻 Code Snippets

**Prime Number Checker (Program 4)**
```javascript
function isPrime(x) {
    if (x <= 1 || isNaN(x)) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        if (x % i === 0) return false;
    }
    return true;
}
```

**ATM Cash Dispenser (Program 13)**
```javascript
function noteDispenser(amount) {
    let note1 = 0, note2 = 0, note3 = 0;

    while (amount != 0) {
        if (amount >= 2000) {
            note1 = Math.trunc(amount / 2000);
            amount %= 2000;
        } else if (amount >= 500) {
            note2 = Math.trunc(amount / 500);
            amount %= 500;
        } else if (amount >= 100) {
            note3 = Math.trunc(amount / 100);
            amount %= 100;
        }
    }
    console.log(`2000 Notes => ${note1}\n500 Notes => ${note2}\n100 Notes => ${note3}`);
}
```

**FizzBuzz (Program 20)**
```javascript
for (let i = 1; i <= 100; i++) {
    let prt = i.toString();
    if (i % 3 == 0) prt = "Fizz";
    if (i % 5 == 0) prt = "Buzz";
    if (i % 3 == 0 && i % 5 == 0) prt = "FizzBuzz";
    document.write(`${prt}<br>`);
}
```

> 💡 See [`script.js`](./script.js) for the full source of all 20 programs.

---

## 🖼 Screenshots

> Add screenshots of your browser console output and the triangle/FizzBuzz DOM output below.
> Create a `/screenshots` folder in your repo, drop your images there, and update the paths.

| Console Output | Triangle Pattern (Q18) | FizzBuzz Output (Q20) |
|---|---|---|
| ![Console Output](<img width="691" height="594" alt="image" src="https://github.com/user-attachments/assets/8d1d976d-306e-43b0-af20-ced37d0c86c3" />
) | ![Triangle Pattern](<img width="164" height="137" alt="image" src="https://github.com/user-attachments/assets/e3fc3539-e765-40f5-9fb7-c9963c0eae8c" />
) | ![FizzBuzz](<img width="224" height="321" alt="image" src="https://github.com/user-attachments/assets/2bf3e172-6bc7-43c7-8c06-d6d2784538f1" />
) |

---

## 🎥 Video Walkthrough
 
Watch a complete explanation of all 20 programs (Hinglish/English) on YouTube:
 
▶️ **[Watch the video walkthrough here](https://drive.google.com/file/d/19gRgiy6onTWkbCajjdxHHTODCO1BbO9a/view?usp=drive_link)**
 
The video covers:
- Code walkthrough for each of the 20 programs
- Logic explanation behind conditions and loop choices
- Live console/browser output demo

---

## ▶️ How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/Prince-217/js-condition-looping-programs.git
   ```
2. Open `index.html` in any modern browser (Live Server extension recommended in VS Code).
3. Open the browser **Developer Console** (`F12` or `Ctrl+Shift+I`) to view the logged output.
4. Some programs (like the login simulator and sum calculator) will trigger a `prompt()` popup for input.

---

## 🎯 Key Concepts Practiced

- `for`, `while`, `for...of`, and `for...in` loops
- `if / else if / else` conditional branching
- `break` and `continue` statements
- Nested loops for pattern printing
- Array and object iteration
- Real-world slab/tier logic (billing, discounts, grading)
- Block scoping with `{ }` for variable isolation across programs

---

## 👤 Author

**Prince S. Nayi**
Full Stack Web Development Student @ RW Skill Education

- GitHub: [@Prince-217](https://github.com/Prince-217)
- LinkedIn: [prince-nai-14ab22368](https://www.linkedin.com/in/prince-nayi-14ab22368/)
- LeetCode: [Prince_Nayi](https://leetcode.com/Prince_Nayi)

---

⭐ If you found this helpful for your own JS practice, consider giving the repo a star!
