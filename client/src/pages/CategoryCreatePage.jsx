import { useEffect, useState } from "react";
import { TextInput, Button } from "@mantine/core";
import api from '../services/axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function BudgetCreatePage() {
  const [name, setName] = useState("");
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
    if (categories.find((catObj) => { return catObj.name === name })) {
      alert("The category is already existed.");
      return;
    }
    await api.post("/category", {
      name
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate("/categories");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Category name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        mb="sm"
      /><br />
      <Button style={{ backgroundColor: "#2ecc71" }} type="submit" mt="md">Create</Button>
    </form>
  );
}
