import {StyleSheet} from 'react-native';

const ColorStyles = {
  white: '#FFFFFF',
  splashHeader: '#283E4B',
  splashBackground: '#344A57',
  statusBarColor: '#016098',
  lightBlue: '#1A8FC5'
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: ColorStyles.splashBackground
      },
      Header: {
        backgroundColor: ColorStyles.splashHeader,
        height: 45
      },
      carouselChild: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      splashImage: {
        scaleX: 1.5,
        scaleY: 1.5
      },
      logo: {
          alignSelf: 'center',
          scaleX: 0.75,
          scaleY: 0.75
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
      }
})

export {Styles, ColorStyles};