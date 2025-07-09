import streamlit as st
import random

class RandomGenerator():
    def __init__(self):
        self.db = "database.db"

    def add_quote(self):
        pass

class ShowWeb():
    def __init__(self):
        pass

    def show_quote(self):
        st.markdown(
        "<div style='text-align: center;'>"
        "<h1>Random Quote Generator</h1>"
        "</div>",
        unsafe_allow_html=True)

    def show_form(self):
        pass

if __name__ == "__main__":
    show_web = ShowWeb()
    show_web.show_quote()