import {StyleSheet} from 'react-native';

const ColorStyles = {
  splashHeader: '#283E4B',
  splashBackground: '#344A57',
  statusBarColor: '#016098',
  lightBlue: '#1A8FC5', //primary
  background: '#E4E9ED',
  noteColor: '#737373'
}

const Styles = StyleSheet.create({
      container: {
        backgroundColor: ColorStyles.background
      },
      LinkText: {
        color: ColorStyles.lightBlue
      },
      splashContainer: {
        backgroundColor: ColorStyles.splashBackground
      },
      messagingSearchBar: {
        backgroundColor: 'white',
        borderBottomColor: ColorStyles.background,
        borderBottomWidth: 0.5
      },
      splashHeader: {
        backgroundColor: ColorStyles.splashHeader
      },

      carouselChild: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      splashImage: {
        transform: ([{scale: 1.5}])
      },
      logo: {
          alignSelf: 'center',
          transform: ([{scale: 0.75}])
      },
      content: {
        flex: 1,
        justifyContent: 'center'
      },
      splashImage: {
        flex: 1,
        backgroundColor: 'yellow'
      },
      tombolTombol: {
        justifyContent: 'space-around',
        alignItems: 'center',
    
      },
      buttonText: {
        fontSize: 20
      },
      
      profilePicture: {
        alignSelf: 'center',
        transform: ([{
          scale: 1.5
        }]),
        top: 48,
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
        elevation: 3
      },

      dashboardContainer: {
        backgroundColor: '#344A57',
        padding: 10,
        marginVertical: 10
      },

      icon: {
        fontSize: 18,
        color: ColorStyles.noteColor
      },

      profileDescCard: {
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10
      },

      statusAction: {
        borderTopWidth: 0.5,
        borderTopColor: '#EEE',
        justifyContent: 'center'
      },

      statusActionText: {
        color: ColorStyles.noteColor
      },

      friendCard: {
        width: 177.5,
        borderWidth: 0.5,
        borderColor: ColorStyles.background,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 16
      },

      Searchbar: {
        backgroundColor: 'white',
                            opacity: 0.75,
                            width: 200,
                            marginVertical: 6,
                            elevation: 4,
                            borderRadius: 3
      }
})

export {Styles, ColorStyles};