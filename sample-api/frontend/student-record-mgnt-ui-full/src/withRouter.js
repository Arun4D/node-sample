
import { useNavigate} from "react-router-dom";

export const withRouter = (Component) => {
    let ComponentWithRouterProps = (props) => {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate} />
    }

    return ComponentWithRouterProps;
}
