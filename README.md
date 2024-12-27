# Software-Developer-Project
# Software-Developer-Project
Budget Tracker
==============

A Full Stack Budget Tracker Application to manage income, expenses, 
monthly summaries, and yearly financial reports with interactive dashboards.

Features
--------
1. Add Income and Expenses
   - Add or update income for specific months.
   - Add expenses with names and amounts.
2. Monthly Dashboard
   - View monthly income, expenses, and savings.
   - Detailed breakdown of expenses.
   - Pie chart to visualize savings vs. expenses.
3. Yearly Dashboard
   - View yearly total income, expenses, and savings.
   - Monthly breakdown of income and expenses.
   - Bar chart to compare monthly income and expenses.
4. Persistent Storage
   - Data saved in MongoDB Atlas or local MongoDB database.

Technologies Used
-----------------
Frontend:
- React (with functional components and Material-UI for design).
- Chart.js for visualizations (Bar and Pie charts).
- Axios for API communication.

Backend:
- Flask for REST API endpoints.
- Flask-PyMongo for MongoDB interactions.
- Flask-CORS for handling cross-origin requests.

Database:
- MongoDB Atlas for cloud-based data storage.

Setup Instructions
------------------

Backend Setup:
1. Navigate to the backend folder:cd budget-tracker/backend
2. Create a virtual environment and activate it: python -m venv venv source venv/bin/activate # On Windows: venv\Scripts\activate
3. Install the required dependencies: pip install -r requirements.txt
4. Configure the database : I have used MongDB Atlas Dashbaord and generated connection string for python application 
5. Run the backend server : python app.py   (The backend will run on http://localhost:5000)

Frontend Setup:
1. Navigate to the frontend folder:cd budget-tracker/frontend
2. Install dependencies: npm install
3. Start the frontend server: npm start (The frontend will run on http://localhost:3000)

Database Setup (using MongoDb Atlas Dashboard )
1. Create Account
2. Create Cluster
    1. After logging in, click "Build a Database".
    2. Choose the Free Tier option.
    3. Select a cloud provider (e.g., AWS, Azure, or Google Cloud) and region close to your location.
    4. Create Cluster.
3. Create Database
    1. Go to Database Deployments.
    2. Click Browse Collections on your cluster.
    3. Create your database:
    4. Database Name: budget_tracker
    5. Collection Name: income ,expenses
   
Usage
1. Add Data
  Navigate to the "Add Data" page.
  Add income and expenses for a specific month.

2. Monthly Dashboard:
  Enter the month (format: YYYY-MM) in the Monthly Dashboard page.
  View total income, expenses, savings, and expense details.
  Visualize the data using a pie chart.

3. Yearly Dashboard:
  Enter the year (format: YYYY) in the Yearly Dashboard page.
  View total yearly income, expenses, and savings.
  See monthly breakdowns and a bar chart of income vs. expenses.








