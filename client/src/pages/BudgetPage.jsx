import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
import { getBudgets } from '../services/api';
import {
  Container, Title, Button, Group, Card, Text, Flex, Stack, MediaQuery
} from '@mantine/core';

const BudgetPage = () => {
  const navigate = useNavigate();
  const [budgets, setBudgets] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    if (!token) return;
    getBudgets().then((res) => setBudgets(res.data));
  }, [token]);

  return (
    <Container>
      <Title>Budgets</Title>
      <Stack>
        {budgets.map(b => (
          <Card withBorder shadow="sm" mb="sm" key={b._id}>
            <MediaQuery smallerThan="sm" styles={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Flex justify="space-between" align="center">
                <div>
                  <Text weight={1000}>{b.category.name}</Text>
                </div>
                <Text color="dimmed" size="sm">{b.month}</Text>
                <Text size={20} weight={500}>${b.amount}</Text>


                <Link to={`/budget/${b._id}`} style={{ textDecoration: 'none' }}>
                  <Text style={{ color: "#2ecc71" }} size="sm" variant="link" sx={{ '&:hover': { textDecoration: 'none' } }}>
                    Edit/Delete
                  </Text>
                </Link>
              </Flex>
            </MediaQuery>
          </Card>
        ))}
      </Stack>
      <Group>
        <Button style={{ backgroundColor: "#2ecc71" }} onClick={() => navigate(`/budget/create`)}>➕</Button>
      </Group>
    </Container>
  );
};

export default BudgetPage;
