import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
// import { Container, Icon } from './styles';
import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

// export function ButtonIcon({}: Props) {
  export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return(
    // <Container>
    <Container {...rest}>
      {/* <Icon name="home" type="PRIMARY" /> */}
      <Icon 
        name={icon}
        type={type} 
      />
    </Container>
  );
}