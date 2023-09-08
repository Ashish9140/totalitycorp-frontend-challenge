**Project Summary**

Task was building an e-commerce website using ReactJS. The goal was to create a user-friendly shopping platform with essential features like product listings, cart management, checkout, responsive design, and optional user authentication.

Approach:

**Product Listings**
   - Getting the Latest Products: Connected to an external product database, which is an API with only 12 products, sufficient for displaying essential features.
   - User-Friendly Design: Ensured the website was easy to use and visually appealing, prominently featuring product details such as images, names, prices, and a simple "Add to Cart" button.
   - Easy Browsing: Implemented filters to let customers sort and find products by category, price, and ratings, with options for low to high and high to low, making product discovery effortless.

**Shopping Cart**
   - Smart Cart Management: Employed a special method for efficient shopping cart management, allowing customers to easily view their selections.
   - Control for Shoppers: Empowered shoppers to add, remove, or adjust item quantities in their cart, providing a smooth user experience.
   - Real-Time Updates: Implemented real-time updates for the total cost and item count as customers added or removed items, using Context API and the reducer method.

**Checkout**
   - Efficient Checkout: Designed a straightforward checkout process that calculated the total cost of items in the cart, streamlining the final steps of a purchase.
   - User-Friendly Forms: Created forms designed to make it easy for customers to enter their shipping and payment details, ensuring a hassle-free checkout experience.

**Responsive Design**
   - Works Everywhere: Built a responsive design that functions seamlessly on both computers and mobile devices, ensuring accessibility for all users.
   - Beautiful Styling: Utilized the "styled-components" library to create a beautiful and consistent design across all screen sizes.

**User Authentication**
   - Secure Logins: Integrated with Auth0 for added security, enabling users to register and log in using their preferred method, such as Facebook, Google, or GitHub.
   - Personal Touch: Displayed users' names in the website header, adding a personal touch to the site, even for those who manually logged in.

**Local Storage for Cart Management**
   - Cart Persistence: Improved user convenience by utilizing the browser's "localStorage" feature, ensuring that cart items remained intact even if users closed the browser or refreshed the page.
   - Better Performance: Storing cart data locally reduced the need for frequent server requests, resulting in a faster and more reliable website.


**Tech Stack**
- Frontend Framework: ReactJS
- State Management: Context API and Reducer Pattern
- Data Source: External API (`https://api.pujakaitem.com/api/products`)
- Styling: "styled-components"
- User Authentication: Auth0 (with Facebook, Google, and GitHub options)
- Cart Persistence: "localStorage"