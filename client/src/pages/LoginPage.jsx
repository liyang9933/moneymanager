import { TextInput, PasswordInput, Button, Container, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/api';

const LoginPage = () => {
  const { login } = useAuth();
  const form = useForm({
    initialValues: { username: '', password: '' },
  });

  const handleSubmit = async (values) => {
    try {
      const response = await loginUser(values);
      login(response.data.token);
      window.location.href = '/assessment02/';
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <Container size="xs">
      <Title order={2}>Login</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Username" {...form.getInputProps('username')} />
        <PasswordInput label="Password" {...form.getInputProps('password')} />
        <Button type="submit" style={{ backgroundColor: "#2ecc71" }} mt="md">Login</Button>
      </form>
    </Container>
  );
};

export default LoginPage;
