/**
 * Exemple: Algorithme de tricount
 */

export function tricount(users: User[]): TricountResult[] {
  const totalByUser: number[] = [];

  let total = 0;

  for (const user of users) {
    let userTotal = 0;
    for (const expense of user.expenses) {
      userTotal += expense.amount;
    }
    totalByUser.push(userTotal);
    total += userTotal;
  }

  const part = total / users.length;

  const result: TricountResult[] = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userTotal = totalByUser[i];
    const difference = userTotal - part;
    result.push({ name: user.name, difference });
  }

  return result;
}

interface Expense {
  description: string;
  amount: number;
}

interface User {
  name: string;
  expenses: Expense[];
}

interface TricountResult {
  name: string;
  difference: number;
}
