import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { colors, radius } from '@/constants/design';

const activeText = colors.text;
const inactiveText = colors.textMuted;

type TabInitialProps = {
  initials: string;
  color: string;
  focused: boolean;
};

function TabInitial({ initials, color, focused }: TabInitialProps) {
  return (
    <View
      style={[
        styles.initialBadge,
        {
          backgroundColor: focused ? color : colors.surface,
          borderColor: focused ? color : colors.border,
        },
      ]}>
      <Text style={[styles.initialText, { color: focused ? activeText : inactiveText }]}>
        {initials}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: activeText,
        headerTitleStyle: {
          fontWeight: '700',
        },
        sceneStyle: {
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: activeText,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: inactiveText,
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          href: null,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="single-player"
        options={{
          title: 'Single Player',
          tabBarLabel: 'Solo',
          tabBarIcon: ({ focused }) => (
            <TabInitial initials="SP" color={colors.accents.singlePlayer} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="multiplayer"
        options={{
          title: 'Multiplayer Quiz',
          tabBarLabel: 'Multi',
          tabBarIcon: ({ focused }) => (
            <TabInitial initials="MP" color={colors.accents.multiplayer} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="league"
        options={{
          title: 'League',
          tabBarIcon: ({ focused }) => (
            <TabInitial initials="L" color={colors.accents.league} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="player-statistics"
        options={{
          title: 'Player Statistics',
          tabBarLabel: 'Stats',
          tabBarIcon: ({ focused }) => (
            <TabInitial initials="ST" color={colors.accents.statistics} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabInitial initials="P" color={colors.accents.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.tabBar,
    borderTopColor: colors.border,
    height: 76,
    paddingBottom: 10,
    paddingTop: 8,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
  },

  initialBadge: {
    alignItems: 'center',
    borderRadius: radius.md,
    borderWidth: 1,
    height: 28,
    justifyContent: 'center',
    width: 34,
  },

  initialText: {
    fontSize: 11,
    fontWeight: '900',
  },
});
