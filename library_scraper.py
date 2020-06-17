from bs4 import BeautifulSoup
import requests


# Make sure that we append our HTML data on an empty file
with open("book_data.html", "w") as file:
    file.write("")

# Get a list of links to book pages. Once we have this list,
# I will go to each page and extract the lenght and titles of each book
pages = 2
book_links = []
source = requests.get("https://www.hamiltonbook.com/books").text
soup = BeautifulSoup(source, "lxml")

# Using inspector tool, these are the anchor tags that contain links
# to the page with more book data on it.
book_lis = soup.find_all("li", class_ = "product-listing__item grid-list__item col-xxs-12 col-xs-6 col-sm-6 col-md-4 col-lg-3")
for li in book_lis:
    anchor = li.find("a") # find is for tags
    book_links.append(anchor.get("href")) # get is for attributes

# Now that we have a list of links to books (book_links), it's time to grab
# the meta data from each of those bookds.
"""
for book_link in book_links:
    print(book_link)
    source = str(requests.get(book_link))
    soup = BeautifulSoup(source, "lxml")
    print(soup.prettify())

source = requests.get(book_links[0]).text
soup = BeautifulSoup(source, "lxml")
print(soup.prettify())
print(book_links)
# Why tf these different
print(len(set(book_links)))
print(len(book_links))

"""



