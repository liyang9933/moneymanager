import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TransactionsPage from './pages/TransactionsPage';
import TransactionCreatePage from './pages/TransactionCreatePage';
import TransactionEditPage from './pages/TransactionEditPage';
import BudgetPage from './pages/BudgetPage';
import BudgetEditPage from './pages/BudgetEditPage';
import BudgetCreatePage from './pages/BudgetCreatePage'
import CategoryPage from './pages/CategoryPage';
import CategoryCreatePage from './pages/CategoryCreatePage'
import CategoryEditPage from './pages/CategoryEditPage'

function App() {
  return (

    <Routes>

      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="transaction/create" element={<TransactionCreatePage />} />
        <Route path="transaction/edit/:id" element={<TransactionEditPage />} />
        <Route path="budget" element={<BudgetPage />} />
        <Route path="budget/create" element={<BudgetCreatePage />} />
        <Route path="budget/:id" element={<BudgetEditPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CategoryCreatePage />} />
        <Route path="categories/edit/:id" element={<CategoryEditPage />} />
      </Route>

    </Routes>
  );
}

export default App;
