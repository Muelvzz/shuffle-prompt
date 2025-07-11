# Random Quote Generator
Clean and minimalits, it displays a randomly selected quote each time it's run. Quotes are loaded from a CSV file and
presented in a visually pleasing format with title, quote text, and source.

## Features
**Randomized Quotes**: Fetches a random quote from a local `quotes.csv` file.
**Styled Display**: Quotes are presented in a well-aligned layout using HTML formatting.
**Includes Source Info**: Displays the title of the book or speaker and page/reference.
**Single Button Action**: "New Quote" button prepared for future interactivity.

## How to Run It
Ensure you have the required libraries:
  streamlit
  pandas

Then run the app with:
  streamlit run your_file_name.py

Note: make sure the `quotes.csv` file exists in the same directory and is formatted like:

```
Title;Quote;Source
Atomic Habits;"You do not rise to the level of your goals. You fall to the level of your systems.";"27"
The Alchemist;"And, when you want something, all the universe conspires in helping you to achieve it.";"22"
```

## Example Output
<img width="777" height="388" alt="image" src="https://github.com/user-attachments/assets/3e9ae843-ff22-4ecb-8dba-52dbd891d9c7" />

---

## Future Improvements
**Search & Filter**: Let users filter by book title, topic, or author.
**Categorization**: Group quotes by genre, mood, or theme.
