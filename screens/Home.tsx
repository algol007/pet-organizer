import { FlatList, Image, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const CardOwner = ({navigation}: any) => {
  const goToDetail = (id: number) => {
    navigation.navigate('Detail', {id})
  }

  return (
    <Pressable style={styles.cardContainer} onPress={() => goToDetail(123)}>
      <View style={styles.owner}>
        <View style={styles.ownerProfile}><Text style={styles.ownerPhoto}>KK</Text></View>
        <Text style={styles.textDefault}>John Mayer</Text>
      </View>
      <View style={styles.flexRow}>
        <Image resizeMode="cover" source={require("../assets/images/star-fill.png")} style={{width: 20, height: 20}} />
        <View style={{marginLeft: 20}}>
        <Image resizeMode="cover" source={require("../assets/images/arrow-right.png")} style={{width: 6, height: 12}} />
        </View>
      </View>
    </Pressable>
  )
}

export default function Home({ navigation }: any) {
  const dummy = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = () => (
    <View style={{marginBottom: 16, borderRadius: 12}}>
      <CardOwner navigation={navigation} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={[styles.flexCenter, {marginBottom: 24}]}>
        <View style={styles.ownerProfile2}><Text style={styles.ownerPhoto2}>KK</Text></View>
        <Text style={[styles.textDefault, {fontWeight: '500'}]}>Master: John Mayer</Text>
      </View>
      <View style={{width: '100%', backgroundColor: '#F8F8FF'}}>
        <View style={[styles.flexBetween, {marginBottom: 24}]}>
        <Text style={styles.textSecondary}>Owner List</Text>
        <Pressable>
        <Text style={styles.textSecondary}>Sort By: Name</Text>
        </Pressable>
        </View>
        <FlatList
          data={dummy}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const shadow = StyleSheet.create({
  shadowDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.09,
    shadowRadius: 7,
    backgroundColor: '#FFFFFF'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8FF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  owner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerProfile: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 16
  },
  ownerProfile2: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#36A388'
  },
  ownerPhoto: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF'
  },
  ownerPhoto2: {
    fontWeight: '600',
    fontSize: 16,
    color: '#36A388'
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8FF'
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF'
  },
  cardContainer: {
    height: 64,
    ...shadow.shadowDefault,
  },
  textDefault: {
    color: '#404040'
  },
  textSecondary: {
    color: '#A1AFC3',
    fontWeight: '500'
  },
  textLabel: {
    color: '#A1AFC3',
    fontSize: 12
  },
});
