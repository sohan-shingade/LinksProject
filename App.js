import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
  TextInput,
  View,
} from 'react-native';
import * as Linking from 'expo-linking';

const links = [
  {
    title: 'Plus',
    url: 'https://www.Walmart.com/plus',
    esurl: 'https://www-e16.walmart.com/plus',
    color: '#d88d8a',
  },
  {
    title: 'Plus Faq',
    url: 'https://www.Walmart.com/plus/faq',
    esurl: 'https://www-e16.walmart.com/plus/faq',
    color: 'yellow',
  },
  {
    title: 'Trial Plans',
    url: 'https://www.Walmart.com/plus/faq/trial-membership-plans',
    esurl: 'https://www-e16.walmart.com/plus/faq/trial-membership-plans',
    color: 'gray',
  },
  {
    title: 'Plus Plans',
    url: 'https://www.Walmart.com/plus/faq/walmart-plus-membership-plans',
    esurl: 'https://www-e16.walmart.com/plus/faq/walmart-plus-membership-plans',
    color: 'orange',
  },
  {
    title: 'Payment and Billing',
    url: 'https://www.Walmart.com/plus/faq/payment-and-billing',
    esurl: 'https://www-e16.walmart.com/plus/faq/payment-and-billing',
    color: 'cyan',
  },
  {
    title: 'Prior Delivery Unlimited Customers',
    url: 'https://www.Walmart.com/plus/faq/prior-delivery-unlimited-customers',
    esurl:
      'https://www-e16.walmart.com/plus/faq/prior-delivery-unlimited-customers',
    color: 'red',
  },
  {
    title: 'Prior Delivery Unlimited Customers',
    url: 'https://www.Walmart.com/plus/faq/prior-delivery-unlimited-customers',
    esurl:
      'https://www-e16.walmart.com/plus/faq/prior-delivery-unlimited-customers',
    color: '#b19cd9',
  },
  {
    title: 'Free Unlimited Delivery',
    url: 'https://www.Walmart.com/plus/faq/free-unlimited-delivery',
    esurl: 'https://www-e16.walmart.com/plus/plus/faq/free-unlimited-delivery',
    color: '#b5651d',
  },
  {
    title: 'Prefered Time Slots',
    url: 'https://www.Walmart.com/plus/faq/preferred-time-slots',
    esurl: 'https://www-e16.walmart.com/plus/faq/preferred-time-slots',
    color: '#2f96a3',
  },
  {
    title: 'Scan and Go',
    url: 'https://www.Walmart.com/plus/faq/mobile-scan-and-go',
    esurl: 'https://www-e16.walmart.com/plus/faq/mobile-scan-and-go',
    color: '#baefc6',
  },
  {
    title: 'Fuel Discounts',
    url: 'https://www.Walmart.com/plus/faq/fuel-discounts',
    esurl: 'https://www-e16.walmart.com/plus/faq/fuel-discounts',
    color: '#20ee9c',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      passInput: '',
      logError: false,
    };
  }

  handlePress = (url) => {
    const supported = Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      Linking.openURL(url);
    } else {
      Alert.alert('Don`t know how to open this URL: ${url}');
    }
  };

  ButtonLink = (item) => (
    <View
      style={{
        width: 300,
        height: 100,
        backgroundColor: item.color,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        accessibilityRole="link"
        href={item.url}
        target="_blank"
        style={{
          flex: 1,
          height: 100,
          backgroundColor: item.color,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 4,
        }}
        onPress={() => {
          if (Platform.OS !== 'web') {
            this.handlePress(item.url);
          }
        }}>
        <Text accessibilityRole="link" href={item.url} target="_blank">
          walmart com {item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="link"
        href={item.esurl}
        target="_blank"
        style={{
          flex: 1,
          height: 100,
          backgroundColor: item.color,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 4,
        }}
        onPress={() => {
          if (Platform.OS !== 'web') {
            this.handlePress(item.esurl);
          }
        }}>
        <Text accessibilityRole="link" href={item.esurl} target="_blank">
          e16 {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return this.state.loggedIn ? (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={links}
          renderItem={(item) => this.ButtonLink(item.item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    ) : (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{padding: 20}}>
          <TextInput
            style={{
              height: 50,
              borderColor: 'gray',
              borderWidth: 3,
              width: 300,
              textAlign: 'center',
              color: 'black',
            }}
            value={this.state.passInput}
            onChangeText={(text) => this.onTextInputChange(text)}></TextInput>
        </View>
        <TouchableOpacity
          style={{
            padding: 20,
            width: 300,
            height: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (this.state.passInput === 'Wal+Plus') {
              this.setState({
                loggedIn: true,
                logError: false,
              });
            } else {
              this.setState({
                logError: true,
              });
            }
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
        <Text
          style={{fontSize: 15, color: this.state.logError ? 'red' : 'white'}}>
          Wrong Password
        </Text>
      </SafeAreaView>
    );
  }

  onTextInputChange = (text) => {
    this.setState({
      passInput: text,
      logError: false,
    });
  };
}
