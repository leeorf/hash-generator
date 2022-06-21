# Software features

- [General](#general)
- [Input](#input)
- [Hash output](#hash-output)
- [Copy to clipboard](#copy-to-clipboard)
- [Save preferences](#save-preferences)

## General

- [x] Display sofware version

## Input

- [x] Default to hide input
- [ ] Show and hide hash input
- [ ] Animation of copy to clipboard
- [ ] No validation
- [ ] Max length

  - Example: SHA-256 has the input message size < 264-bits. Block size is
    512-bits, and it has a word size of 32-bits. The output is a 256-bit digest.

## Hash output

- [ ] Use a secure hash function
- [ ] Able to change hash function (SHA-1, SHA-256, etc), but same interface
- [ ] Same input same output
- [ ] Copy hash to clipboard
- [ ] Output to user

# Copy to clipboard

- [ ] Button to copy to clipboard
- [ ] Copy hash to clipboard
- [ ] Animation of copy to clipboard

# Save preferences

- [ ] User can choose to save hash (input and output) on browser storage
- [ ] User can choose to display or not the hash input
- [ ] User can choose to display or not the hash output
- [ ] User can choose to save preferences on browser storage
- [ ] First run/no preferences should display
  - [ ] Hidden hash input
  - [ ] Do not display hash output
  - [ ] Automatically copy hash to clipboard
