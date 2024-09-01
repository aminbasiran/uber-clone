import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const HomeLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "green",
                tabBarStyle: {
                    borderRadius: 50,
                    paddingBottom: 0, // ios only
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 60,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="home" size={size} color={color} />
                        );
                    },
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
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="person-circle"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="settings"
                                size={size}
                                color={color}
                            />
                        );
                    },
                    headerShown: false,
                    tabBarLabel: "Settings",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: "bold",
                    },
                }}
            />
            <Tabs.Screen
                name="message"
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="chatbox"
                                size={size}
                                color={color}
                            />
                        );
                    },
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
