import { useSelector } from 'react-redux';

import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';
import { selectTodos } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <Filter />
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <TodoList />
        </Container>
      </Section>
    </>
  );
};
