import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Avatar from '../assets/avatar.png';
import Avatar1 from '../assets/avatar1.png';
import Avatar2 from '../assets/avatar2.png';
import { withNavigation } from 'react-navigation';

class CardItem extends Component {
  state = {
    discussionList: [
      {
        nickname: 'Wynn',
        content: '在南京邮电大学读书是一种怎样的体验',
        avatar: Avatar
      },
      {
        nickname: 'Salt',
        content: '跨端框架的实践和优化',
        avatar: Avatar1
      },
      {
        nickname: 'Hash',
        content: '函数式编程中的函子',
        avatar: Avatar2
      }
    ]
  };
  render() {
    const { discussionList } = this.state;
    const { navigation } = this.props;
    const createDiscussionItem = ({ nickname, content, avatar }, index) => (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('DetailPage');
        }}
      >
        <View style={styles.surroundingItem} key={index}>
          <Image
            source={avatar}
            style={{
              width: 45,
              height: 45
            }}
          />
          <View
            style={{
              marginLeft: 20,
              marginRight: 24,
              flex: 3
            }}
          >
            <Text style={styles.title}>{nickname}</Text>
            <Text style={styles.infoDetail}>{content || 'N/A'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
    return (
      <View>
        {discussionList.map((item, index) => createDiscussionItem(item, index))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surroundingItem: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingVertical: 28,
    paddingLeft: 20,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4
  },
  title: {
    color: '#5fbdaa',
    fontSize: 20,
    borderRadius: 4,
    overflow: 'hidden'
  },
  infoDetail: {
    fontSize: 12,
    color: '#98a6ad',
    lineHeight: 18
  }
});

export default withNavigation(CardItem);
