import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;
const vh = height / 100;
const pw = width => width * vw; // percent width
const ph = height => height * vh; // percent height

const size = size => {
	if (Platform.OS === 'ios') {
		// console.tron.log('iOS - pixelRatio:', pixelRatio)
		// console.tron.log('iOS - vw:', vw)
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return size * 1;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8
			return size * 1.1;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 3.75) {
			// X, XS
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// XS Max
			return size * 1.3;
		} else {
			return size * 1;
		}
	} else {
		if (pixelRatio <= 1) {
			return size * 0.9;
		} else if (pixelRatio <= 1.5) {
			return size * 1;
		} else if (pixelRatio <= 2) {
			return size * 1.1;
		} else if (pixelRatio <= 3) {
			return size * 1.2;
		} else if (pixelRatio <= 3.5) {
			return size * 1.3;
		} else {
			return size * 1.1;
		}
	}
};

const keyboardVerticalOffset = offset => {
	if (Platform.OS === 'ios') {
		// console.tron.log('iOS - pixelRatio:', pixelRatio)
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return offset;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8
			return offset - 100;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return offset - 150;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return offset - 150;
		} else if (pixelRatio === 3 && vw === 3.75) {
			// X, XS
			return offset - 200;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// XS Max
			return offset - 200;
		} else {
			return offset - 100;
		}
	} else {
		// console.tron.log('Android - pixelRatio:', pixelRatio)
		if (pixelRatio <= 1) {
			return offset;
		} else if (pixelRatio <= 1.5) {
			return offset;
		} else if (pixelRatio <= 2) {
			return offset + 20;
		} else if (pixelRatio <= 3) {
			return offset + 50;
		} else if (pixelRatio <= 3.5) {
			return offset + 100;
		} else {
			return offset;
		}
	}
};

// Used via Metrics.baseMargin
const metrics = {
	marginHorizontal: 10,
	marginVertical: 10,
	section: 25,
	baseMargin: 10,
	doubleBaseMargin: 20,
	smallMargin: 5,
	doubleSection: 50,
	horizontalLineHeight: 1,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	buttonRadius: 4,
	icons: {
		tiny: 15,
		small: 20,
		medium: 30,
		large: 45,
		xl: 50
	},
	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	},
	/**
	 * exampleScreenMetrics
	 */
	exampleScreenMetrics: {
		container: {
			marginTop: ph(8),
			marginBottom: ph(6),
			width: pw(20)
		},
		logo: {
			width: size(152),
			height: size(166)
		},
		keyboardVerticalOffset: keyboardVerticalOffset(-50),
		...Platform.select({
			ios: {
				paddingTop: DeviceInfo.hasNotch() ? size(30) : size(20)
			},
			android: {
				paddingTop: DeviceInfo.hasNotch() ? size(30) : size(20)
			}
		})
	}
};

export default metrics;
