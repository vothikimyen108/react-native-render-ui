import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  TextInput,
  UIManager,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { AccordionItem } from "react-native-accordion-list-view";
import { iconCheckDone, iconArrowDown, iconExpand } from "../icon";
import { DataNote } from "../data/data";
import Table from "./Table";

const ContentCreate = () => {
  const [text, setText] = useState("");
  const [listAccordion, setListAccordion] = useState<Accordion[]>([]);

  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    // Map through the data array and create a new array with default values
    const newListAccordion = DataNote.map((item) => ({
      id: item.id,
      isOpen: false,
    }));

    setListAccordion(newListAccordion);
  }, [Platform.OS]);

  const customTitle = (item: Note) => {
    const isItem = listAccordion.find((i) => i.id === item.id);
    return (
      <View style={stylesAccordion.viewTitle}>
        <View>
          {isItem && isItem?.isOpen && iconCheckDone({ width: 18, height: 13 })}
        </View>
        <View>
          <Text style={stylesAccordion.mainTitle}>{item.mainTitle}</Text>
          <Text style={stylesAccordion.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    );
  };

  const customBody = () => {
    return (
      <View style={stylesAccordion.viewBody}>
        <View style={stylesAccordion.div}></View>
        <View style={stylesAccordion.viewContent}>
          <Text>
            Mô tả ngắn nội dung<Text style={stylesAccordion.styleDot}> *</Text>
          </Text>
          <View style={stylesAccordion.input}>
            <TextInput
              style={{ textAlignVertical: "top" }}
              placeholder="Nhập mô tả"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
            />
          </View>
          <View style={stylesAccordion.viewTable}>
            <View>
              <Text style={stylesAccordion.textTable}>Bảng kê chi tiết</Text>
              <Text style={stylesAccordion.subTitle}>Mô tả bảng</Text>
            </View>
            <View>{iconExpand({ width: "20", height: "20" })}</View>
          </View>
          <Table></Table>
        </View>
      </View>
    );
  };

  const customIcon = (item: Note) => {
    const isItem = listAccordion.find((i) => i.id === item.id);
    return (
      <View
        style={{
          ...stylesAccordion.viewIcon,
          transform: `${
            isItem && isItem?.isOpen ? "rotate(90deg)" : "rotate(0deg)"
          }`,
        }}
      >
        {iconArrowDown({ width: "12", height: "12" })}
      </View>
    );
  };

  return (
    <SafeAreaView style={stylesAccordion.container}>
      <ScrollView>
        {DataNote.map((item) => (
          <View style={stylesAccordion.containerItem}>
            <AccordionItem
              key={item.id.toString()}
              customTitle={() => customTitle(item)}
              customBody={() => customBody()}
              customIcon={() => customIcon(item)}
              animationDuration={400}
              isOpen={false}
              onPress={(isOpen) => {
                const openAccordionItem = listAccordion;
                const index = openAccordionItem.findIndex(
                  (i) => i.id === item.id
                );
                openAccordionItem[index].isOpen = isOpen;
                setListAccordion(openAccordionItem);
              }}
              containerStyle={stylesAccordion.viewContainerStyle}
              pressableProps={{
                style: ({ pressed }) => [
                  {
                    marginVertical: 5,
                    marginHorizontal: 16,
                  },
                ],
              }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const stylesAccordion = StyleSheet.create({
  container: {
    backgroundColor: "rgba(245, 247, 250, 1)",
    width: "100%",
    height: "90%",
    paddingTop: 20,
  },
  containerItem: {
    paddingHorizontal: 16,
  },
  titleStyle: {
    color: "#000",
  },

  viewContainerStyle: {
    borderBottomEndRadius: 12,
    padding: 0,
    marginBottom: 20,
  },
  viewTitle: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 12,
  },
  mainTitle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: "rgba(16, 24, 40, 0.6)",
  },
  viewBody: {
    height: "auto",
  },
  div: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(242, 244, 247, 1)",
  },
  viewContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  styleDot: {
    color: "red",
  },
  input: {
    marginVertical: 10,
  },
  viewIcon: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(242, 244, 247, 1)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTable: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  textTable: {
    color: "rgba(207, 21, 52, 1)",
    lineHeight: 20,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ContentCreate;
