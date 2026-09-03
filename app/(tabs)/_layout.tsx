import { Tabs } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { colores } from '../../src/tema/colores';

/** Ícono de tab: emoji, para no depender de una librería de íconos. */
function IconoTab({ emoji, focused }: { emoji: string; focused: boolean }) {
  return <Text style={[estilos.icono, !focused && estilos.iconoInactivo]}>{emoji}</Text>;
}

/** Menú de navegación inferior con las tres pantallas del template. */
export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colores.primario,
        tabBarInactiveTintColor: colores.textoSuave,
        tabBarStyle: {
          backgroundColor: colores.superficie,
          borderTopColor: colores.borde,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        headerStyle: { backgroundColor: colores.superficie },
        headerTintColor: colores.texto,
        headerTitleStyle: { fontWeight: '700' },
        sceneStyle: { backgroundColor: colores.fondo },
      }}
    >
      <Tabs.Screen
        name="contador"
        options={{
          title: 'Contador',
          tabBarIcon: ({ focused }) => <IconoTab emoji="⚽" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="tarjetas"
        options={{
          title: 'Tarjetas',
          tabBarIcon: ({ focused }) => <IconoTab emoji="🗓️" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => <IconoTab emoji="👤" focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const estilos = StyleSheet.create({
  icono: {
    fontSize: 20,
  },
  iconoInactivo: {
    opacity: 0.5,
  },
});
