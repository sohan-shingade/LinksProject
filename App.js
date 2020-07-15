import React from "react";
import { Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import * as Linking from "expo-linking";

const links = [
  {
    title: "Plus",
    url: "https://www.Walmart.com/plus",
    color: "#d88d8a",
  },
  {
    title: "Walmart Plus Faq",
    url: "https://www.Walmart.com/plus/faq",
    color: "yellow",
  },
  {
    title: "Trial Plans",
    url: "https://www.Walmart.com/plus/faq/trial-membership-plans",
    color: "gray",
  },
  {
    title: "Plus Plans",
    url: "https://www.Walmart.com/plus/faq/walmart-plus-membership-plans",
    color: "orange",
  },
  {
    title: "Payment and Billing",
    url: "https://www.Walmart.com/plus/faq/payment-and-billing",
    color: "cyan",
  },
  {
    title: "Prior Delivery Unlimited Customers",
    url: "https://www.Walmart.com/plus/faq/prior-delivery-unlimited-customers",
    color: "red",
  },
  {
    title: "Prior Delivery Unlimited Customers",
    url: "https://www.Walmart.com/plus/faq/prior-delivery-unlimited-customers",
    color: "#b19cd9",
  },
  {
    title: "Free Unlimited Delivery",
    url: "https://www.Walmart.com/plus/faq/free-unlimited-delivery",
    color: "#b5651d",
  },
  {
    title: "Prefered Time Slots",
    url: "https://www.Walmart.com/plus/faq/preferred-time-slots",
    color: "#2f96a3",
  },
  {
    title: "Open Time Slots",
    url: "https://www.Walmart.com/plus/faq/open-time-slot-notifications",
    color: "#81b887",
  },
  {
    title: "Scan and Go",
    url: "https://www.Walmart.com/plus/faq/mobile-scan-and-go",
    color: "#baefc6",
  },
  {
    title: "Fuel Discounts",
    url: "https://www.Walmart.com/plus/faq/fuel-discounts",
    color: "#20ee9c",
  },
  {
    title: "Early Access Deals",
    url: "https://www.Walmart.com/plus/faq/early-access-to-deals",
    color: "#61d308",
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  Linking,
  FlatList,
  SafeAreaView,
} from 'react-native';

const links = [
  {
    title: 'Walmart Plus',
    url: 'https://www.Walmart.com/plus',
    color: '#d88d8a',
  },
  {
    title: 'Walmart Plus Faq',
    url: 'https://www.Walmart.com/plus/faq',
    color: 'yellow',
  },
  {
    title: 'Trial Plans',
    url: 'https://www.Walmart.com/plus/faq/trial-membership-plans',
    color: 'gray',
  },
  {
    title: 'Walmart Plus Plans',
    url: 'https://www.Walmart.com/plus/faq/walmart-plus-membership-plans',
    color: 'orange',
  },
  {
    title: 'Payment and Billing',
    url: 'https://www.Walmart.com/plus/faq/payment-and-billing',
    color: 'cyan',
  },
  {
    title: 'Prior Delivery Unlimited Customers',
    url: 'https://www.Walmart.com/plus/faq/prior-delivery-unlimited-customers',
    color: 'red',
  },
  {
    title: 'Prior Delivery Unlimited Customers',
    url: 'https://www.Walmart.com/plus/faq/prior-delivery-unlimited-customers',
    color: '#b19cd9',
  },
  {
    title: 'Free Unlimited Delivery',
    url: 'https://www.Walmart.com/plus/faq/free-unlimited-delivery',
    color: '#b5651d',
  },
  {
    title: 'Prefered Time Slots',
    url: 'https://www.Walmart.com/plus/faq/preferred-time-slots',
    color: '#2f96a3',
  },
  {
    title: 'Open Time Slots',
    url: 'https://www.Walmart.com/plus/faq/open-time-slot-notifications',
    color: '#81b887',
  },
  {
    title: 'Scan and Go',
    url: 'https://www.Walmart.com/plus/faq/mobile-scan-and-go',
    color: '#baefc6',
  },
  {
    title: 'Fuel Discounts',
    url: 'https://www.Walmart.com/plus/faq/fuel-discounts',
    color: '#20ee9c',
  },
  {
    title: 'Early Access Deals',
    url: 'https://www.Walmart.com/plus/faq/early-access-to-deals',
    color: '#61d308',
>>>>>>> 2dce8e210cbf420bae9a957f9a025a01cb1a034d
  },
];

export default class App extends React.Component {
  handlePress = (url) => {
    const supported = Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  ButtonLink = (item) => (
    <TouchableOpacity
<<<<<<< HEAD
      accessibilityRole="link"
      href={item.url}
      target="_blank"
=======
>>>>>>> 2dce8e210cbf420bae9a957f9a025a01cb1a034d
      style={{
        width: 300,
        height: 100,
        backgroundColor: item.color,
<<<<<<< HEAD
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text accessibilityRole="link" href={item.url} target="_blank">
        {item.title}
      </Text>
=======
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => this.handlePress(item.url)}>
      <Text>{item.title}</Text>
>>>>>>> 2dce8e210cbf420bae9a957f9a025a01cb1a034d
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView
<<<<<<< HEAD
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
=======
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
>>>>>>> 2dce8e210cbf420bae9a957f9a025a01cb1a034d
        <FlatList
          data={links}
          renderItem={(item) => this.ButtonLink(item.item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}
