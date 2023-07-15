import { useState } from 'react';
import { FlatList } from 'react-native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native'
// import { ListEmpty } from '@components/ListEmpty';
import { Container } from './styles';

// export function Groups(props: any) { // Navegação com props
export function Groups() { // Navegação com destructuring
  const [groups, setGroups] = useState<string[]>([]); // Tipagem explícita
  // const [groups, setGroups] = useState(['']); // Tipagem implícita
  const navigation = useNavigation() 

  function handleNewGroup() {
    // props.navigation.navigate('new') // Navegação com props
    navigation.navigate('new')
  }


  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item} // Identificador único para cada componente da lista
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}