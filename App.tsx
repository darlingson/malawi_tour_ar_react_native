import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import ARModule from "./modules/ARModule";

type SectionProps = PropsWithChildren<{
  title: string,
  description: string,
}>;

const Section: React.FC<SectionProps> = ({ children, title, description }) => (
  <View style={styles.sectionContainer}>
    <Text style={[styles.sectionTitle]}>{title}</Text>
    <Text style={styles.sectionDescription}>{description}</Text>
    {children}
  </View>
);

const App: React.FC<{}> = () => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Section title="AR" description="Render the native AR module">
          <Button
            title="Show AR"
            onPress={async () => {
              const res = await ARModule.showAR();
              console.log(res);
            }}
          />
        </Section>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  sectionContainer: { marginTop: 32, paddingHorizontal: 24 },
  sectionTitle: { fontSize: 24, fontWeight: "600" },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: "400",
  },
});

export default App;