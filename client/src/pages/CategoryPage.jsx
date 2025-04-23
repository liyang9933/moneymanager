import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { getCategories } from '../services/api';
import {
  Container, Title, Button, Group, Card, Text, Flex, SimpleGrid
} from '@mantine/core';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (!token) return;
    getCategories().then((res) => setCategories(res.data));
  }, [token]);

  return (
    <Container>
      <Title>Categories</Title>
      <SimpleGrid cols={2} spacing="md" breakpoints={[
        { maxWidth: 'sm', cols: 1 },
        { minWidth: 'sm', cols: 2 },
        { minWidth: 'md', cols: 3 },
      ]}>
        {categories.map(c => (
          <Card withBorder shadow="sm" mb="sm" key={c._id}>
            <Flex justify="space-between" align="center">
              <Link to={`edit/${c._id}`} style={{ textDecoration: 'none' }}>
                <Text style={{ color: "#2ecc71" }} size="sm" weight={800} variant="link" sx={{ '&:hover': { textDecoration: 'none' } }}>
                  {c.name}
                </Text>
              </Link>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      <Group>
        <Button style={{ backgroundColor: "#2ecc71" }} onClick={() => navigate(`/categories/create`)}>➕</Button>
      </Group>
    </Container>
  );
};

export default CategoryPage;
