import streamlit as st
import pandas as pd
from collections import Counter
import random

class ShowWeb():
    def __init__(self):
        self.file = "quotes.csv"

    def show_quote(self):
        st.markdown(
        "<div style='text-align: center;'>"
        "<h1>Random Quote Generator</h1>"
        "</div>",
        unsafe_allow_html=True)

        df = pd.read_csv("quotes.csv", sep=";")
        list_of_lists = df.values.tolist()
        rd = random.choice(list_of_lists)

        title = rd[0]
        quote = rd[1]
        page = rd[2]

        st.markdown(
        "<div style='text-align: center;'>"
        f"<h4>{title}</h4>"
        "</div>",
        unsafe_allow_html=True)

        st.markdown(
        "<div style='text-align: center;'>"
        f"<h2>'{quote}'</h2>"
        "</div>",
        unsafe_allow_html=True)

        st.markdown(
        "<div style='text-align: right;'>"
        f"<p>- {page}</p>"
        "</div>",
        unsafe_allow_html=True)

        st.button("New Quote")

if __name__ == "__main__":
    show_web = ShowWeb()
    show_web.show_quote()