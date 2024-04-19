import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { iconArrowLeft, iconRemove } from "../icon"; // Import the iconRemove function
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type HeaderProps = {
  nativeHeaderProps: NativeStackHeaderProps;
};

const Header = ({ nativeHeaderProps }: HeaderProps) => {
  const { back, navigation, options, route } = nativeHeaderProps;
  const { title: optionsTitle } = options;
  const { title: backTitle } = back ?? { title: "" };
  const handleBack = () => {
    navigation.goBack();
  };

  const HeaderHorizontal = () => {
    return (
      <View style={stylesHorizontal.container}>
        <View style={stylesHorizontal.viewHeader}>
          <View style={stylesHorizontal.viewLeft}>
            {backTitle && (
              <TouchableOpacity onPress={handleBack}>
                {iconArrowLeft({ width: 8, height: 12 })}
              </TouchableOpacity>
            )}
          </View>
          <View style={stylesHorizontal.viewRight}>
            <Text style={stylesHorizontal.titleText}>{optionsTitle}</Text>
          </View>
        </View>
      </View>
    );
  };

  const HeaderVertical = () => {
    return (
      <View style={styles.container}>
        <View>
          {backTitle && (
            <TouchableOpacity onPress={handleBack}>
              {iconRemove({ size: 25 })}
            </TouchableOpacity>
          )}
          <View>
            <Text style={styles.titleText}>{optionsTitle}</Text>
          </View>
        </View>
      </View>
    );
  };

  return route?.name === "Detail" ? HeaderHorizontal() : HeaderVertical();
};

const styles = StyleSheet.create({
  container: {
    color: "#000",
    paddingHorizontal: 16,
    backgroundColor: "rgba(245, 247, 250, 1)",
    paddingTop: 40,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 34,
    paddingTop: 8,
  },
});

const stylesHorizontal = StyleSheet.create({
  container: {
    color: "#000",
    backgroundColor: "rgba(245, 247, 250, 1)",
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  titleText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },

  viewHeader: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  viewLeft: {
    flexBasis: "5%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  viewRight: {
    flexBasis: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
