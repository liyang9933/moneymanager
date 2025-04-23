import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../services/axios'
import {
  Text,
  NumberInput,
  Button,
  Container,
  Title,
  Group,
} from "@mantine/core";

const BudgetEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [budget, setBudget] = useState(null);
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const res = await api.get(`/budget/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBudget(res.data);
        setAmount(res.data.amount);
        setMonth(res.data.month);
        setCategory(res.data.category.name);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch budget:", err);
      }
    };

    fetchBudget();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(
        `/budget/${id}`,
        { amount, month, category },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/budget");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this transaction?");
    if (!confirm) return;
    try {
      await api.delete(`/budget/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/budget");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Title>Edit Budget</Title><br />
      <form onSubmit={handleUpdate}>
        <div>
          <label>Amount:</label>
          <NumberInput
            value={amount}
            onChange={(value) => setAmount(value)}
            required
          />
        </div>

        <br />
        <Text>Month:&nbsp;{month}</Text>
        <br />
        <Text>Category:&nbsp;{category}</Text>
        <br />
        <Group>
          <Button type="submit" style={{ backgroundColor: "#2ecc71" }}>Update</Button>
          <Button type="button" onClick={handleDelete} style={{ backgroundColor: "#2ecc71" }}>
            Delete
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default BudgetEditPage;
