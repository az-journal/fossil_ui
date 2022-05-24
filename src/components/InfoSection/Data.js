import { FaCode } from "react-icons/fa";
import { Paragraph } from "./InfoElements";
import {ReactComponent as coding} from '../../images/coding.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    headline: 'FOSSIL',
    bottomLine:'API',
    description: "The API allows it’s users to specify what kind of data they want to access on starknet ,such data will be made available by the Fossil API service. Once the work is done, a notifying webhook will be sent back with the appropriate L2 calldata. ",
    imgStart: false,
    img: {coding},
    alt: 'code',
    dark: true,
    primary:true,
    darkText: false
};