import { Container, Title, TabButton } from './styles';

export default function Tab() {
  return (
    <div>
      <Container>
        <TabButton>Summary</TabButton>
        <TabButton>Jobs</TabButton>
        <TabButton>Nodes</TabButton>
      </Container>
      <Title>
        Overview
      </Title>
    </div>
  );
}