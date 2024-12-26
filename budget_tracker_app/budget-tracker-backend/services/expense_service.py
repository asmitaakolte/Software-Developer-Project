from flask_pymongo import PyMongo

def add_expense(mongo, expense_data):
    mongo.db.expenses.insert_one(expense_data)
