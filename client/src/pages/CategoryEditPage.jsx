import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../services/axios'
import {
  Text,
  TextInput,
  Button,
  Container,
  Title,
  Group,
} from "@mantine/core";

const CategoryEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [budget, setBudget] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await api.get(`/category/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setName(res.data.name);
        const trans = await api.get(`/transaction`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTransactions(trans.data.transactions);

        const bgt = await api.get(`/budget`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBudget(bgt.data);
      } catch (err) {
        console.error("Failed to fetch budget:", err);
      }
    };

    fetchCategory();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(
        `/category/${id}`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/categories");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this transaction?");
    if (!confirm) return;
    if (transactions.find(transObj => transObj.category._id === id) ||
      budget.find(catObj => catObj.category._id === id)) {
      alert('Cannot delete category that is in use by transactions or budgets.');
      return;
    }
    try {
      await api.delete(`/category/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/categories");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <Container>
      <Title>Edit Category</Title><br />
      <form onSubmit={handleUpdate}>
        <div>
          <Text>Category name:</Text>
          <TextInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <Group>
          <Button style={{ backgroundColor: "#2ecc71" }} type="submit">Update</Button>
          <Button type="button" onClick={handleDelete} style={{ backgroundColor: "#2ecc71" }}>
            Delete
          </Button>
        </Group>

      </form>
    </Container>
  );
};

export default CategoryEditPage;
