from bs4 import BeautifulSoup
import requests
import csv
import re


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
# I guess I care about author, title, and page count
with open("book_data.csv", "w") as data:
    csvwriter = csv.writer(data)
    csvwriter.writerow(("author", "title", "pages"))
    no_pages = 0
    for book_link in book_links:
        source = requests.get(book_link).text
        # If there's no author, write the row anyways but put 
        # N/A as the author
        try:
            author = soup.find("a", class_ = "product-detail-author").contents[0]
        except AttributeError:
            author = "N/A"
        soup = BeautifulSoup(source, "lxml")
        title = soup.find("h1", class_ = "product-detail-page-main-heading page-main-heading").contents[0]
        # If there isn't a page count, don't write a row
        try:
            unclean_pages = soup.find_all("span", class_ = "item")[1].contents[1]
            digits = re.compile(r'\d+')
            cleaned_pages = digits.findall(unclean_pages)[0]
        except IndexError:
            continue

        csvwriter.writerow((author, title, cleaned_pages))

    



