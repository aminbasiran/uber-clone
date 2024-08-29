import React from "react";
import { Tabs } from "expo-router";

const HomeLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarStyle: {
                    borderRadius: 50,
                    paddingBottom: 0, // ios only
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 78,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: "bold",
                    },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: "bold",
                    },
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    tabBarLabel: "Settings",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: "bold",
                    },
                }}
            />
        </Tabs>
    );
};

export default HomeLayout;
