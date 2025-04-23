import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AppShell, Navbar, Header, Text, Button, Group, Drawer, Burger, Stack, MediaQuery } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const AppLayout = () => {

  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [drawerOpened, { open, close }] = useDisclosure(false);
  const navLinks = (
    <Stack spacing="xs">
      <Button style={{ color: "#2ecc71" }} variant="subtle" fullWidth onClick={() => { navigate('/'); close(); }}>Welcome</Button>
      <Button style={{ color: "#2ecc71" }} variant="subtle" fullWidth onClick={() => { navigate('/transactions?page=1'); close(); }}>Transactions</Button>
      <Button style={{ color: "#2ecc71" }} variant="subtle" fullWidth onClick={() => { navigate('/budget'); close(); }}>Budgets</Button>
      <Button style={{ color: "#2ecc71" }} variant="subtle" fullWidth onClick={() => { navigate('/categories'); close(); }}>Categories</Button>
    </Stack>
  );

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={close}
        title="Navigation"
        padding="md"
        size="xs"
        hiddenFrom="sm"
      >
        {navLinks}
      </Drawer>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Navbar width={{ base: 200 }} p="md">
              <Navbar.Section>
                {navLinks}
              </Navbar.Section>
            </Navbar>
          </MediaQuery>
        }
        header={
          <Header height={60} p="md">
            <Group position="apart" align="center" sx={{ height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger opened={drawerOpened} onClick={open} size="sm" />
              </MediaQuery>
              <Text fw={700} size="xl">💰 Money Manager</Text>
              <Button style={{ backgroundColor: "#2ecc71", color: "white" }} variant="light" onClick={() => {
                logout();
                navigate('/login');
              }}>
                Logout
              </Button>
            </Group>
          </Header>
        }
      >
        <Outlet />
      </AppShell>
    </>
  );
};

export default AppLayout;
