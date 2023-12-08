import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../../interfaces/cast.interface'

interface CastItemCardProps extends Cast { }

const CastItemCard: FC<CastItemCardProps> = ({
  name, character, profile_path
}) => {
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`

  return (
    <View style={styles.container}>
      {
        profile_path && (
          <Image
            source={{ uri }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 8
            }}
          />
        )
      }

      <View style={{paddingStart: profile_path ? 0 : 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>
          {character}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  actorInfoContainer: {

  },
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: 16,
    marginBottom: 16,
    marginHorizontal: 12,
    marginStart: 0,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    flex: 1
  }
})

export default CastItemCard
