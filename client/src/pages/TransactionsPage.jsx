import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../services/axios'
import { debounce } from 'lodash';
import { getTransactions } from '../services/api';
import { useAuth } from "../context/AuthContext";
import {
  Container, Title, Button, Group, Card, Text, Flex, Stack, MediaQuery
} from '@mantine/core';

const TransactionsPage = () => {
  const [search, setSearch] = useSearchParams();
  const page = Number(search.get('page'));

  const navigate = useNavigate();
  const { token } = useAuth();

  const [transactions, setTransactions] = useState([]);

  const [pages, setPages] = useState({});
  useEffect(() => {
    if (!token) return;
    getTransactions(page).then((res) => {
      setTransactions(res.data.transactions);
      setPages({
        total: res.data.total,
        pages: res.data.pages,
        currentPage: res.data.currentPage,
      });
    });
  }, [page, token]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this transaction?");
    if (!confirm) return;
    try {
      await api.delete(`/transaction/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        });
      setTransactions((transactions) => transactions.filter((obj) => { return obj._id !== id }))
    } catch (err) {
      console.error("Failed to delete transaction:", err);
    }
  };

  const handlePageChange = useCallback(
    debounce((newPage) => {
      setSearch({ page: newPage });
    }, 500), []
  )
  return (
    <Container>
      <Group position="apart" mb='md'>
        <Title order={2}>Transactions</Title>
        <Button style={{ backgroundColor: "#2ecc71" }} disabled={page <= 1} onClick={() => handlePageChange(Number(page) - 1)
        }>
          ⬅️Previous
        </Button>
        <Button style={{ backgroundColor: "#2ecc71" }} disabled={page >= pages.pages} onClick={() => handlePageChange(Number(page) + 1)}>
          Next➡️
        </Button>
      </Group>

      <Stack spacing="sm">
        {transactions.map(tx => (
          <Card withBorder shadow="sm" mb="sm" key={tx._id}>
            <MediaQuery smallerThan="sm" styles={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Flex justify="space-between" align="center">
                <div>
                  <Text weight={1000}>{new Date(tx.date).toLocaleDateString()}</Text>
                  <Text color="dimmed" size="sm">
                    {tx.category.name}
                  </Text>
                </div>
                <Text>
                  {tx.description}
                </Text>
                <Text color="dimmed" size="sm">
                  {tx.type}
                </Text>
                <Text color={tx.type === "expense" ? "red" : "green"} size={20} weight={500}>${tx.amount}</Text>
                <Group>
                  <Button variant="light" color="green" compact radius="md" onClick={() => navigate(`/transaction/edit/${tx._id}`)}>Edit</Button>&nbsp;
                  <Button variant="light" color="green" compact radius="md" onClick={() => handleDelete(tx._id)}>Delete</Button>
                </Group>
              </Flex>
            </MediaQuery>
          </Card>
        ))}
      </Stack>
      <Text align="center" mt="md">
        Current Page: {pages.currentPage}/{pages.pages}&nbsp;
        Total:{pages.total} entries
      </Text>
      <Button style={{ backgroundColor: "#2ecc71" }} onClick={() => navigate(`/transaction/create`)}>➕</Button>

    </Container >
  );
};

export default TransactionsPage;
