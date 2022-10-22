import { StyleSheet} from 'aphrodite';
import colors from '../../colors';

const styles = StyleSheet.create({
	linkSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	body: {
		backgroundGolor: colors.first
	},
	linkIcon: {
		fontWeight: 500,
		textDecoration: 'none',
		display: 'flex',
		gap: 4,
		alignItems: 'center'
	},
	title: {
		color: colors.third,
        fontWeight: 600
	},
	subTitle: {
		color: colors.fourth,
        fontWeight: 600,
	},
	subTitleRole: {
		fontWeight: 500
	},
	textCenter: {
		textAlign: 'center'
	},
	keyword: {
        backgroundColor: colors.fourth,
        color: colors.first,
        margin: 4,
        padding: 4,
        borderRadius: 4
    }
});

export default styles;