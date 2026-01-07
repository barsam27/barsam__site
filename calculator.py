import tkinter as tk

root = tk.Tk()
root.title("Calculator")
root.geometry("210x300")
root.configure(bg="#000000")
root.resizable(False, False)

expression = ""

def press(value):
    global expression
    if value == "AC":
        expression = ""
        display.set("0")
    elif value == "=":
        try:
            result = str(eval(expression))
            display.set(result)
            expression = result
        except:
            display.set("Error")
            expression = ""
    else:
        expression += value
        display.set(expression)

display = tk.StringVar()
display.set("0")

screen = tk.Label(
    root,
    textvariable=display,
    font=("Arial", 28),
    bg="black",
    fg="white",
    anchor="e",
    padx=10,
    height=2
)
screen.pack(fill="both")

buttons = [
    ["AC", "%", "/", "*"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", ".", "", ""]
]

frame = tk.Frame(root, bg="black")
frame.pack(expand=True)

for r in range(len(buttons)):
    for c in range(len(buttons[r])):
        text = buttons[r][c]
        if text == "":
            continue

        color = "#ff9500" if text in ["=", "AC"] else "#333333"

        btn = tk.Button(
            frame,
            text=text,
            font=("Arial", 20),
            bg=color,
            fg="white",
            bd=0,
            command=lambda t=text: press(t)
        )
        btn.grid(row=r, column=c, sticky="nsew", padx=5, pady=5)

for i in range(4):
    frame.columnconfigure(i, weight=1)
for i in range(5):
    frame.rowconfigure(i, weight=1)

root.mainloop()