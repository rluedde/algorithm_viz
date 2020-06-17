from bs4 import BeautifulSoup
import requests


# Make sure that we append our HTML data on an empty file
with open("book_data.html", "w") as file:
    file.write("")

# Get a list of links to book pages. Once we have this list,
# I will go to each page and extract the lenght and titles of each book
pages = 2
book_links = []
for i in range(pages):
    source = requests.get(f"https://www.barnesandnoble.com/b/new-releases/_/N-1oyg?Nrpp=40&page={i + 1}").text
    soup = BeautifulSoup(source, "lxml")
    # Using inspector tool, these are the div tags that contain the anchor tags
    # to the page with more book data on it.
    book_data = soup.find_all("div", {"class": "product-shelf-title product-info-title pt-xs"})

    for book in book_data:
        anchor = book.find("a")
        book_links.append("www.barnesandnoble.com" + anchor.get("href"))
# Why tf these different
print(len(set(book_links)))
print(len(book_links))




