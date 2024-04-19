import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";

const MyTabBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={label}
            style={{
              ...styles.tab,
              backgroundColor: `${isFocused ? "white" : "transparent"}`,
            }}
          >
            <Animated.Text
              style={{
                ...styles.text,
                color: `${isFocused ? "black" : "rgba(16, 24, 40, 0.4)"}`,
              }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(71, 84, 103, 0.07)",
    borderRadius: 100,
    padding: 5,
    marginVertical: 12,
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 6,
    borderRadius: 100,
    flexBasis: "50%",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
});

export default MyTabBar;
