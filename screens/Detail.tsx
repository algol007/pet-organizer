import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const CardOwner2 = () => {
  return (
    <View style={styles.cardContainer2}>
      <View style={styles.owner}>
        <View style={styles.ownerProfile2}><Text style={styles.ownerPhoto2}>KK</Text></View>
        <View>
          <View style={{marginBottom: 10}}>
            <Text style={[styles.textLabel, {marginBottom: 2}]}>First Name</Text>
            <Text style={styles.textDefault}>Paul</Text>
          </View>
          <View>
            <Text style={[styles.textLabel, {marginBottom: 2}]}>Last Name</Text>
            <Text style={styles.textDefault}>McCartney</Text>
          </View>
        </View>
      </View>
      <View>
        <Image resizeMode="cover" source={require("../assets/images/star.png")} style={{width: 20, height: 20}} />
      </View>
    </View>
  )
}

const CardOwner3 = () => {
  return (
    <View style={styles.cardContainer3}>
      <View style={styles.owner}>
        <View style={styles.ownerProfile}><Text style={styles.ownerPhoto}>KK</Text></View>
        <View>
          <Text style={[styles.textDefault, {marginBottom: 8, fontWeight: "700"}]}>John Mayer</Text>
          <Text style={styles.textLabel}>Age: 2 years 3 months</Text>
        </View>
      </View>
      <View>
        <Image resizeMode="cover" source={require("../assets/images/arrow-right.png")} style={{width: 6, height: 12}} />
      </View>
    </View>
  )
}

export default function Detail({ navigation }: any) {
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
    <View style={{marginBottom: 8, borderRadius: 12}}>
      <CardOwner3 />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={[styles.flexCenter, {position: 'relative', marginBottom: 24, width: '100%'}]}>
        <Pressable style={{position: 'absolute', left: 0}} onPress={() => navigation.navigate('Home')}>
          <Image resizeMode="cover" source={require("../assets/images/arrow-left.png")} style={{width: 12, height: 12}} />
        </Pressable>
        <View style={[styles.flexCenter, ]}>
          <View style={styles.ownerProfile3}><Text style={styles.ownerPhoto3}>KK</Text></View>
          <Text style={[styles.textDefault, {fontWeight: '500'}]}>Master: John Mayer</Text>
        </View>
      </View>
      <View style={{marginBottom: 24, width: '100%'}}>
        <Text style={[styles.textSecondary, {marginBottom: 16}]}>Owner Card</Text>
        <CardOwner2 />
      </View>
      <View style={{width: '100%'}}>
        <Text style={[styles.textSecondary, {marginBottom: 8}]}>Cats</Text>
        <View style={{width: '100%', backgroundColor: '#F8F8FF'}}>
          <FlatList
            data={dummy}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 0, padding: 20, width: '100%'}}>
      <Pressable style={styles.buttonMakeMaster}>
        <Text style={styles.buttonText}>Make Master</Text>
      </Pressable>
      </View>
    </View>
  );
}

const shadow = StyleSheet.create({
  shadowDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.04,
    shadowRadius: 4,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8FF',
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
    marginRight: 20
  },
  ownerProfile2: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 20
  },
  ownerProfile3: {
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
    fontSize: 20,
    color: '#FFFFFF'
  },
  ownerPhoto3: {
    fontWeight: '600',
    fontSize: 16,
    color: '#36A388'
  },
  buttonMakeMaster: {
    backgroundColor: '#36A388',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    height: 64,
    ...shadow.shadowDefault
  },
  cardContainer2: {
    height: 140,
    ...shadow.shadowDefault
  },
  cardContainer3: {
    height: 80,
    ...shadow.shadowDefault
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
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF'
  },
});
