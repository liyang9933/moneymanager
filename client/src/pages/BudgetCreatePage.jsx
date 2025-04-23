import { useEffect, useState } from "react";
import { TextInput, Button, Select } from "@mantine/core";
import api from '../services/axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IconChevronDown } from "@tabler/icons-react";

export default function BudgetCreatePage() {
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
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

    await api.post("/budget", {
      amount,
      category,
      month
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate("/budget");
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
        label="Month"
        value={month}
        onChange={(e) => setMonth(e.currentTarget.value)}
        mb="sm"
      />
      <Button style={{ backgroundColor: "#2ecc71" }} type="submit" mt="md">Create</Button>
    </form>
  );
}
