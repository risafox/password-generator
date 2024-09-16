## PASSWORD GENERATION ALGORITHM

### PURPOSE:
  - To take a series of user inputs and generate a password

### INPUTS:
  - string: answer_one, answer to question 1
  - string: answer_two, answer to question 2
  - string: answer_three, answer to question 3
  - int: password_length, desired password length
  - bool: have_symbols, include symbols (todo: fill in symbols)
  - bool: have_numbers, include numbers (0-9)
  - bool: have_lowercase, include lowercase characters (todo: get frontend to remove this option)
  - bool: have_uppercase, include uppercase characters
  - bool: have_ambiguous_characters, exclude ambiguous characters (todo: fill in symbols)

### OUTPUT:
 - Password string of specified length, which will include the three answers, and any specified numbers and
   symbols

### DESIGN DECISIONS:
  - What if the desired length of the password is too short? (todo: get frontend to add a suggested length popup?)
    - Truncate the password to be of the desired length. Ideally, entire answers would remain intact, so
      if the three answers are "banana", "cat", and "moon", and the desired length is 8, and the user wants
      numbers, the generated password would not have truncated words such as "moon8ban", rather it would be
      something like "banana89" or "3catmoon", where full words are still intact and extra space is filled
      with numbers or special characters
    - Raise error letting user know that this happened, and suggest picking a longer password length
  - What if the desired length of the password is even shorter than the shortest answer?
    - Password generation fails
    - Raise error letting user know that this happened, and suggest picking a longer password length
  - What is the desired length of the password is too long?
    - Fill the remaining space with numbers or special characters
  - What happens when there is extra space to be filled (re: the points above), but the user didn't request
    numbers or special characters?
    - Return a password without the extra space filled (so the password will be shorter than requested)
    - Raise error letting user know that this happened, and suggest adding numbers and/or symbols
  - Where do the inserted symbols and numbers go?
    - They will be placed between whole answers, and not within an answer
  - What happens when the a user chooses not to include symbols but chooses to exclude ambiguous characters?
    - Password generation fails, todo: should this be handled in the frontend, where the exclude option blocks
      unless the include symbols is checked?
    - Raise error, telling user they either need to include symbols or exclude ambiguous characters
  - What happens when a user doesn't select to include uppercase or lowercase letters?
    - Password generation fails
    - Raise error, telling user they either need to include uppercase or lowercase letters

### FUTURE DIRECTIONS:
  - Add a password strength algorithm to run on the generated password
  - Add a recommended length option
  - Add recommended settings?

### THINGS TO DISCUSS WITH FRONTEND:
 - All the todos
 - How will the info needed be passed to us (e.g. JSON?)