import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../services/axios'
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Container,
  Title,
  Group,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const TransactionEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await api.get(`/transaction/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTransaction(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch transaction:", err);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await api.get("/category", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(res.data);

      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchTransaction();
    fetchCategories();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`transaction/${id}`, {
        amount: transaction.amount,
        description: transaction.description,
        category: transaction.category,
        type: transaction.type,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      navigate("/transactions?page=1");
    } catch (err) {
      console.error("Failed to update transaction:", err);
    }
  };

  if (loading || !transaction) return <p>Loading...</p>;
  return (

    <Container size="xs">
      <Title order={2} mb="md">Edit Transaction</Title>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label="Amount"
          value={transaction.amount}
          onChange={(value) => setTransaction({ ...transaction, amount: value })}
          required
          mb="sm"
        />
        <TextInput
          label="Description"
          value={transaction.description}
          onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
          mb="sm"
        />
        <Select
          rightSection={<IconChevronDown size={16} />}
          rightSectionWidth={30}
          label="Category"
          data={categories.map((cat) => ({
            value: cat._id,
            label: cat.name,
          }))}
          value={transaction.category._id}
          onChange={(value) => setTransaction({ ...transaction, category: value })}
          required
          mb="sm"
        />
        <Select
          rightSection={<IconChevronDown size={16} />}
          rightSectionWidth={30}
          label="Type"
          data={[
            { value: "income", label: "Income" },
            { value: "expense", label: "Expense" },
          ]}
          value={transaction.type}
          onChange={(value) => setTransaction({ ...transaction, type: value })}
          required
          mb="sm"
        />
        <TextInput
          label="Date"
          value={new Date(transaction.date).toLocaleDateString()}
          disabled
          mb="md"
        />
        <Group position="right">
          <Button type="submit" style={{ backgroundColor: "#2ecc71" }}>Update</Button>
        </Group>
      </form>
      <p>* Required value</p>
    </Container>
  );
};

export default TransactionEditPage;
