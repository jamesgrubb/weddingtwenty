import { sleeps } from '../../pages/api/utils/Sleeps';
const Sleeps = (props) => {
	return <span className={props.classes}>{sleeps()}</span>;
};

export default Sleeps;
