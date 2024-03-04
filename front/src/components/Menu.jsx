import Icon from "../utilities/Icon";
import { HOME, CURSOS } from "../router/path";

const Menu = [
    {
        id_menu: 1,
        name: '/',
        icon: <Icon.Home size={30} />,
        url: HOME
    },
    {
        id_menu: 2,
        name: 'CURSOS',
        icon: <Icon.teacher size={30} />,
        url: CURSOS
    }
]

export default Menu