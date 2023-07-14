# Lessons Learned

## Had a bug in my for loop not recognizing the function name and after running the code, the prompts stops at the 3rd questions and would not continue

- To make the answer function recognize the userName variable, which is currently defined inside the user function as a local variable, we can introduce a global variable to ensure its accessibility throughout the code. By declaring the userName variable as a global variable, the answer function will be able to access and utilize it.
