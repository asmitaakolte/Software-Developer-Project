def format_expenses(expenses):
    return [{"description": e["description"], "amount": e["amount"]} for e in expenses]
