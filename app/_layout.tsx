import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack>

    {/*removing the header showing the current files*/}
    <Stack.Screen
    name='(tabs)'
    options={{headerShown: false}}
    />

    <Stack.Screen
        name='movie/[id]'
        options={{headerShown: false}}
    />
  </Stack>;
}


