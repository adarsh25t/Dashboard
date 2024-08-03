# Dashboard
A brief description of your project, its purpose, and what it aims to achieve.


## About The Project
This project is a responsive dashboard interface created using React.js, TypeScript, and Material-UI. It is designed to be a static, responsive dashboard that closely matches a provided UI design, with customizable colors, images, and font sizes.

1. Built With
2. React.js
3. TypeScript
4. Material-UI
5. recharts
   
# Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites

1. npm
 - `npm install npm@latest -g`

### Installation
1. Clone the repo
 - `git clone https://github.com/your_username_/Project-Name.git`

2. Install NPM packages
 - `npm install`


 #  Usage
This project includes a sidebar and header that fit within the screen without scrolling. The dashboard content is displayed dynamically and includes various UI components like a bar chart created using @mui/x-charts.

## To run the project locally:
- `npm start`

  Navigate to `http://localhost:3000` to view the project in the browser.

## Project Structure
The project structure is as follows:

```/src
  /components
    /Sidebar
    /Header
        - Barmenu.tsx
        - Header.tsx
        - HeaderUserProfile.tsx
    /widgets
        - ActivityWidget.tsx
        - CircularProgressWithLabel.tsx
        - FeatureSection.tsx
        - FeedbackWidget.tsx
        - OrderTable.tsx
        - ProfiltWidget.tsx
        - RecentOrdersWidget.tsx
        - SelectBarchart.tsx
        - TotalOrdersWidget.tsx
    /DashboardContent.tsx
    /DashboardLayout.tsx
    /MobileSlider.tsx
    /Sidebar.tsx
  /lib
    - type.ts
  /assets
    /BarChart
  App.js
  index.js 
  ```

# Components
    - Sidebar: Contains navigation links.
    - Header: Displays the title and other header elements.
    - DashboardContent: Main content area where charts and other data are displayed.
    - BarChart: A reusable bar chart component using `@mui/x-charts`.
