import { useEffect, useState } from "react";
import { TextInput, Button, Select } from "@mantine/core";
import api from '../services/axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IconChevronDown } from "@tabler/icons-react";

export default function TransactionCreatePage() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    api.get("/category", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      setCategories(res.data);
    });
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/transaction", {
        amount,
        category,
        description,
        type
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/transactions?page=1");
    } catch (err) {
      console.error("Failed to create transaction:", err);
      if (err.status === 400)
        alert('Failed to create new transaction, all the required fields must be completed.')
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
        required
      />
      <Select
        rightSection={<IconChevronDown size={16} />}
        rightSectionWidth={30}
        label="Category"
        data={categories.map(c => ({ label: c.name, value: c._id }))}
        value={category}
        onChange={setCategory}
        required
      />
      <TextInput
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
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
        value={type}
        onChange={(value) => setType(value)}
        required
        mb="sm" />
      <Button style={{ backgroundColor: "#2ecc71" }} type="submit" mt="md">Create</Button>
      <p>* Required value</p>
    </form>
  );
}
