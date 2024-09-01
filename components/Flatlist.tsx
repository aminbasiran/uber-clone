import { View, Text, FlatList } from "react-native";
import React from "react";
interface IDataItem {
    id: string;
    title: string;
}

interface IFlatListPropsType {
    orientation: "horizontal" | "vertical";
    data: IDataItem[];
    component: React.FC;
}

const Flatlistc: React.FC<IFlatListPropsType> = ({
    orientation,
    data,
    component,
}) => {
    return (
        <View>
            <FlatList
                horizontal={orientation === "horizontal"}
                data={data}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={component}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Flatlistc;
